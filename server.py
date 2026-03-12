import json
import os
import re
import secrets
from datetime import timedelta
from http import HTTPStatus
from http.cookies import SimpleCookie
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import unquote, urlparse

from backend.defaults import normalize_role
from backend.store import HendonStore, SESSION_DAYS, build_station_status, iso_now, normalize_invoice_items, sha256_hex, utc_now, verify_password, hash_password


BASE_DIR = Path(__file__).resolve().parent
STORE = HendonStore(BASE_DIR / "data" / "hendon.sqlite3", BASE_DIR / "data" / "menu-data.js")
SESSION_COOKIE = "hendon_session"
HOST = os.environ.get("HOST", "0.0.0.0")
PORT = int(os.environ.get("PORT", "5500"))


class HendonHandler(SimpleHTTPRequestHandler):
    server_version = "HendonServer/1.0"

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self) -> None:
        path = urlparse(self.path).path
        if path.startswith("/api/"):
            self.handle_api("GET", path)
            return
        super().do_GET()

    def do_POST(self) -> None:
        self.handle_api("POST", urlparse(self.path).path)

    def do_PUT(self) -> None:
        self.handle_api("PUT", urlparse(self.path).path)

    def do_PATCH(self) -> None:
        self.handle_api("PATCH", urlparse(self.path).path)

    def do_DELETE(self) -> None:
        self.handle_api("DELETE", urlparse(self.path).path)

    def log_message(self, format: str, *args: Any) -> None:
        print(f"{self.log_date_time_string()} - {format % args}")

    def read_json(self) -> Any:
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length) if length else b"{}"
        return json.loads(raw.decode("utf-8")) if raw else {}

    def send_json(self, status: int, payload: dict[str, Any], extra_headers: list[tuple[str, str]] | None = None) -> None:
        data = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        if extra_headers:
            for key, value in extra_headers:
                self.send_header(key, value)
        self.end_headers()
        self.wfile.write(data)

    def send_error_json(self, status: int, message: str) -> None:
        self.send_json(status, {"error": message})

    def parse_cookies(self) -> SimpleCookie:
        cookie = SimpleCookie()
        header = self.headers.get("Cookie")
        if header:
            cookie.load(header)
        return cookie

    def set_session_cookie(self, token: str) -> list[tuple[str, str]]:
        max_age = SESSION_DAYS * 24 * 60 * 60
        return [("Set-Cookie", f"{SESSION_COOKIE}={token}; Path=/; HttpOnly; SameSite=Lax; Max-Age={max_age}")]

    def clear_session_cookie(self) -> list[tuple[str, str]]:
        return [("Set-Cookie", f"{SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0")]

    def current_user(self, connection) -> dict[str, Any] | None:
        token_cookie = self.parse_cookies().get(SESSION_COOKIE)
        if not token_cookie:
            return None
        row = connection.execute(
            """
            SELECT users.id, users.username, users.role, sessions.token_hash, sessions.expires_at
            FROM sessions
            JOIN users ON users.id = sessions.user_id
            WHERE sessions.token_hash = ?
            """,
            (sha256_hex(token_cookie.value),),
        ).fetchone()
        if not row:
            return None
        if row["expires_at"] < iso_now():
            connection.execute("DELETE FROM sessions WHERE token_hash = ?", (row["token_hash"],))
            connection.commit()
            return None
        return {"id": row["id"], "username": row["username"], "role": row["role"], "token_hash": row["token_hash"]}

    def require_auth(self, connection) -> dict[str, Any] | None:
        user = self.current_user(connection)
        if not user:
            self.send_error_json(HTTPStatus.UNAUTHORIZED, "Duhet te logohesh.")
        return user

    def require_role(self, connection, roles: set[str]) -> dict[str, Any] | None:
        user = self.require_auth(connection)
        if not user:
            return None
        if normalize_role(user["role"]) not in roles:
            self.send_error_json(HTTPStatus.FORBIDDEN, "Nuk ke akses per kete veprim.")
            return None
        return user

    def bootstrap_payload(self, connection, user: dict[str, Any] | None) -> dict[str, Any]:
        invoices = STORE.list_invoices(connection)
        return {
            "siteData": STORE.get_site_data(connection),
            "session": {"username": user["username"], "role": user["role"]} if user else None,
            "users": STORE.list_users(connection) if user and normalize_role(user["role"]) == "admin" else [],
            "invoices": STORE.filter_invoices_for_user(user, invoices),
        }

    def handle_api(self, method: str, path: str) -> None:
        try:
            with STORE.connect() as connection:
                if path == "/api/health" and method == "GET":
                    self.send_json(HTTPStatus.OK, {"status": "ok"})
                    return

                if path == "/api/bootstrap" and method == "GET":
                    self.send_json(HTTPStatus.OK, self.bootstrap_payload(connection, self.current_user(connection)))
                    return

                if path == "/api/invoices" and method == "GET":
                    user = self.require_auth(connection)
                    if not user:
                        return
                    self.send_json(HTTPStatus.OK, {"invoices": STORE.filter_invoices_for_user(user, STORE.list_invoices(connection))})
                    return

                if path == "/api/auth/login" and method == "POST":
                    payload = self.read_json()
                    username = str(payload.get("username") or "").strip()
                    password = str(payload.get("password") or "")
                    row = connection.execute("SELECT id, username, password_hash, role FROM users WHERE username = ?", (username,)).fetchone()
                    if not row or not verify_password(password, row["password_hash"]):
                        self.send_error_json(HTTPStatus.UNAUTHORIZED, "Kredencialet nuk jane te sakta.")
                        return
                    token = secrets.token_urlsafe(32)
                    connection.execute("DELETE FROM sessions WHERE user_id = ?", (row["id"],))
                    connection.execute(
                        "INSERT INTO sessions (token_hash, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)",
                        (sha256_hex(token), row["id"], (utc_now() + timedelta(days=SESSION_DAYS)).isoformat(), iso_now()),
                    )
                    connection.commit()
                    self.send_json(
                        HTTPStatus.OK,
                        self.bootstrap_payload(connection, {"id": row["id"], "username": row["username"], "role": row["role"]}),
                        extra_headers=self.set_session_cookie(token),
                    )
                    return

                if path == "/api/auth/logout" and method == "POST":
                    user = self.current_user(connection)
                    if user:
                        connection.execute("DELETE FROM sessions WHERE token_hash = ?", (user["token_hash"],))
                        connection.commit()
                    self.send_json(HTTPStatus.OK, {"ok": True}, extra_headers=self.clear_session_cookie())
                    return

                if path == "/api/site-data" and method == "PUT":
                    user = self.require_role(connection, {"admin"})
                    if not user:
                        return
                    payload = self.read_json()
                    self.send_json(HTTPStatus.OK, {"siteData": STORE.set_site_data(connection, payload.get("siteData"))})
                    return

                if path == "/api/users" and method == "POST":
                    user = self.require_role(connection, {"admin"})
                    if not user:
                        return
                    payload = self.read_json()
                    username = str(payload.get("username") or "").strip()
                    password = str(payload.get("password") or "").strip()
                    role = normalize_role(payload.get("role"))
                    if not username or not password:
                        self.send_error_json(HTTPStatus.BAD_REQUEST, "Username dhe password jane te detyrueshme.")
                        return
                    if connection.execute("SELECT id FROM users WHERE username = ?", (username,)).fetchone():
                        self.send_error_json(HTTPStatus.CONFLICT, "Ky username ekziston.")
                        return
                    connection.execute(
                        "INSERT INTO users (username, password_hash, role, created_at) VALUES (?, ?, ?, ?)",
                        (username, hash_password(password), role, iso_now()),
                    )
                    connection.commit()
                    self.send_json(HTTPStatus.CREATED, {"users": STORE.list_users(connection)})
                    return

                if path == "/api/users/password" and method == "PATCH":
                    user = self.require_auth(connection)
                    if not user:
                        return
                    payload = self.read_json()
                    target = str(payload.get("username") or user["username"]).strip()
                    new_password = str(payload.get("newPassword") or "").strip()
                    if not new_password:
                        self.send_error_json(HTTPStatus.BAD_REQUEST, "Password-i i ri eshte i detyrueshem.")
                        return
                    if target != user["username"] and normalize_role(user["role"]) != "admin":
                        self.send_error_json(HTTPStatus.FORBIDDEN, "Nuk ke akses per te ndryshuar kete password.")
                        return
                    if not connection.execute("SELECT id FROM users WHERE username = ?", (target,)).fetchone():
                        self.send_error_json(HTTPStatus.NOT_FOUND, "User-i nuk u gjet.")
                        return
                    connection.execute("UPDATE users SET password_hash = ? WHERE username = ?", (hash_password(new_password), target))
                    connection.commit()
                    self.send_json(HTTPStatus.OK, {"users": STORE.list_users(connection)})
                    return

                if path.startswith("/api/users/") and method == "DELETE":
                    user = self.require_role(connection, {"admin"})
                    if not user:
                        return
                    username = unquote(path.removeprefix("/api/users/")).strip()
                    if not username:
                        self.send_error_json(HTTPStatus.BAD_REQUEST, "User-i mungon.")
                        return
                    if username == "admin":
                        self.send_error_json(HTTPStatus.BAD_REQUEST, "Admin-i kryesor nuk mund te fshihet.")
                        return
                    connection.execute("DELETE FROM users WHERE username = ?", (username,))
                    connection.commit()
                    self.send_json(HTTPStatus.OK, {"users": STORE.list_users(connection)})
                    return

                if path == "/api/invoices" and method == "POST":
                    user = self.require_role(connection, {"waiter"})
                    if not user:
                        return
                    payload = self.read_json()
                    items = normalize_invoice_items(payload.get("items"))
                    if not items:
                        self.send_error_json(HTTPStatus.BAD_REQUEST, "Shto te pakten nje artikull ne porosi.")
                        return
                    created_at = utc_now()
                    number = STORE.create_invoice_number(connection, created_at)
                    invoice = {
                        "id": f"{number}-{int(created_at.timestamp() * 1000)}",
                        "number": number,
                        "createdAt": created_at.isoformat(),
                        "waiter": user["username"],
                        "table": str(payload.get("table") or "").strip(),
                        "customer": str(payload.get("customer") or "").strip(),
                        "note": str(payload.get("note") or "").strip(),
                        "items": items,
                        "total": sum(item["totalPrice"] for item in items),
                        "stationStatus": build_station_status(items),
                    }
                    connection.execute(
                        "INSERT INTO invoices (id, number, created_at, waiter, table_name, customer, note, total, station_status, items_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                        (invoice["id"], invoice["number"], invoice["createdAt"], invoice["waiter"], invoice["table"], invoice["customer"], invoice["note"], invoice["total"], json.dumps(invoice["stationStatus"]), json.dumps(invoice["items"])),
                    )
                    connection.commit()
                    self.send_json(HTTPStatus.CREATED, {"invoice": invoice})
                    return

                if path.startswith("/api/invoices/") and path.endswith("/ready") and method == "POST":
                    user = self.require_auth(connection)
                    if not user:
                        return
                    match = re.fullmatch(r"/api/invoices/([^/]+)/stations/(bar|kitchen)/ready", path)
                    if not match:
                        self.send_error_json(HTTPStatus.NOT_FOUND, "Ruta nuk u gjet.")
                        return
                    invoice_id, station = match.groups()
                    role = normalize_role(user["role"])
                    if role not in {"admin", station}:
                        self.send_error_json(HTTPStatus.FORBIDDEN, "Nuk ke akses per kete stacion.")
                        return
                    row = connection.execute("SELECT station_status FROM invoices WHERE id = ?", (invoice_id,)).fetchone()
                    if not row:
                        self.send_error_json(HTTPStatus.NOT_FOUND, "Fatura nuk u gjet.")
                        return
                    status = json.loads(row["station_status"])
                    if status.get(station) != "na":
                        status[station] = "ready"
                    connection.execute("UPDATE invoices SET station_status = ? WHERE id = ?", (json.dumps(status), invoice_id))
                    connection.commit()
                    self.send_json(HTTPStatus.OK, {"ok": True})
                    return

                self.send_error_json(HTTPStatus.NOT_FOUND, "Ruta nuk u gjet.")
        except json.JSONDecodeError:
            self.send_error_json(HTTPStatus.BAD_REQUEST, "JSON nuk eshte valid.")
        except Exception as error:
            self.send_error_json(HTTPStatus.INTERNAL_SERVER_ERROR, f"Server error: {error}")


def main() -> None:
    STORE.init_db()
    server = ThreadingHTTPServer((HOST, PORT), HendonHandler)
    print(f"Hendon server running on http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
