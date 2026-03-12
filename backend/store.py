import hashlib
import json
import secrets
import sqlite3
from datetime import UTC, datetime, timedelta
from pathlib import Path
from typing import Any

from .defaults import DEFAULT_USERS, STATION_BY_TYPE, default_site_data, normalize_role


SESSION_DAYS = 30
PBKDF2_ITERATIONS = 240_000


def utc_now() -> datetime:
    return datetime.now(UTC)


def iso_now() -> str:
    return utc_now().isoformat()


def sha256_hex(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), PBKDF2_ITERATIONS).hex()
    return f"pbkdf2_sha256${PBKDF2_ITERATIONS}${salt}${digest}"


def verify_password(password: str, stored_hash: str) -> bool:
    try:
        algorithm, iterations, salt, digest = stored_hash.split("$", 3)
    except ValueError:
        return False
    if algorithm != "pbkdf2_sha256":
        return False
    calculated = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), int(iterations)).hex()
    return secrets.compare_digest(calculated, digest)


def clamp_rating(value: Any) -> int:
    try:
        parsed = int(round(float(value)))
    except (TypeError, ValueError):
        return 5
    return max(1, min(5, parsed))


def normalize_content(raw: Any, fallback: dict[str, Any]) -> dict[str, Any]:
    value = raw if isinstance(raw, dict) else {}
    hero = value.get("hero") if isinstance(value.get("hero"), dict) else {}
    about = value.get("about") if isinstance(value.get("about"), dict) else {}
    contact = value.get("contact") if isinstance(value.get("contact"), dict) else {}
    return {
        "businessName": str(value.get("businessName") or fallback["businessName"]),
        "metaDescription": str(value.get("metaDescription") or fallback["metaDescription"]),
        "hero": {
            "kicker": str(hero.get("kicker") or fallback["hero"]["kicker"]),
            "title": str(hero.get("title") or fallback["hero"]["title"]),
            "lead": str(hero.get("lead") or fallback["hero"]["lead"]),
            "image": str(hero.get("image") or fallback["hero"]["image"]),
        },
        "about": {
            "title": str(about.get("title") or fallback["about"]["title"]),
            "text": str(about.get("text") or fallback["about"]["text"]),
            "hours": str(about.get("hours") or fallback["about"]["hours"]),
            "address": str(about.get("address") or fallback["about"]["address"]),
        },
        "menuTitle": str(value.get("menuTitle") or fallback["menuTitle"]),
        "contact": {
            "title": str(contact.get("title") or fallback["contact"]["title"]),
            "text": str(contact.get("text") or fallback["contact"]["text"]),
        },
    }


def normalize_menu(menu: Any, fallback: list[dict[str, Any]]) -> list[dict[str, Any]]:
    source = menu if isinstance(menu, list) and menu else fallback
    normalized = []
    for index, item in enumerate(source, start=1):
        if not isinstance(item, dict):
            continue
        raw_name = item.get("name")
        raw_section = item.get("section") or item.get("description")
        normalized.append(
            {
                "id": str(item.get("id") or f"m{index}"),
                "type": "drink" if item.get("type") == "drink" else "food",
                "name": {
                    "sq": str(raw_name.get("sq") if isinstance(raw_name, dict) else raw_name or f"Artikull {index}"),
                    "en": str((raw_name.get("en") if isinstance(raw_name, dict) else raw_name) or (raw_name.get("sq") if isinstance(raw_name, dict) else raw_name) or f"Item {index}"),
                },
                "section": {
                    "sq": str(raw_section.get("sq") if isinstance(raw_section, dict) else raw_section or "Te tjera"),
                    "en": str((raw_section.get("en") if isinstance(raw_section, dict) else raw_section) or (raw_section.get("sq") if isinstance(raw_section, dict) else raw_section) or "Other"),
                },
                "price": str(item.get("price") or "0 ALL"),
            }
        )
    return normalized or fallback


def normalize_reviews(reviews: Any, fallback: list[dict[str, Any]]) -> list[dict[str, Any]]:
    source = reviews if isinstance(reviews, list) and reviews else fallback
    normalized = []
    for index, review in enumerate(source, start=1):
        if isinstance(review, str):
            normalized.append({"author": f"Guest {index}", "rating": 5, "date": "Google Maps", "text": {"sq": review, "en": review}})
            continue
        if not isinstance(review, dict):
            continue
        text = review.get("text")
        normalized.append(
            {
                "author": str(review.get("author") or f"Guest {index}"),
                "rating": clamp_rating(review.get("rating")),
                "date": str(review.get("date") or "Google Maps"),
                "text": {
                    "sq": str(text.get("sq") if isinstance(text, dict) else text or ""),
                    "en": str((text.get("en") if isinstance(text, dict) else text) or (text.get("sq") if isinstance(text, dict) else text) or ""),
                },
            }
        )
    return [review for review in normalized if review["text"]["sq"] or review["text"]["en"]] or fallback


def normalize_site_data(raw: Any, menu_path: Path) -> dict[str, Any]:
    fallback = default_site_data(menu_path)
    value = raw if isinstance(raw, dict) else {}
    content = value.get("content") if isinstance(value.get("content"), dict) else {}
    links = value.get("links") if isinstance(value.get("links"), dict) else {}
    return {
        "content": {
            "sq": normalize_content(content.get("sq"), fallback["content"]["sq"]),
            "en": normalize_content(content.get("en"), fallback["content"]["en"]),
        },
        "links": {
            "phone": str(links.get("phone") or fallback["links"]["phone"]),
            "mapsUrl": str(links.get("mapsUrl") or fallback["links"]["mapsUrl"]),
            "mapEmbed": str(links.get("mapEmbed") or fallback["links"]["mapEmbed"]),
            "instagram": str(links.get("instagram") or fallback["links"]["instagram"]),
            "youtube": str(links.get("youtube") or fallback["links"]["youtube"]),
            "tiktok": str(links.get("tiktok") or fallback["links"]["tiktok"]),
        },
        "menu": normalize_menu(value.get("menu"), fallback["menu"]),
        "gallery": [str(item) for item in (value.get("gallery") if isinstance(value.get("gallery"), list) else fallback["gallery"]) if str(item).strip()],
        "reviews": normalize_reviews(value.get("reviews"), fallback["reviews"]),
    }


def extract_price_value(price: Any) -> int:
    text = str(price or "")
    if "%" in text:
        return 0
    digits = []
    current = ""
    for char in text:
        if char.isdigit() or char in ",.":
            current += char
        elif current:
            digits.append(current)
            break
    if current and not digits:
        digits.append(current)
    if not digits:
        return 0
    return int(round(float(digits[0].replace(",", "."))))


def normalize_invoice_items(raw_items: Any) -> list[dict[str, Any]]:
    items = raw_items if isinstance(raw_items, list) else []
    normalized = []
    for index, item in enumerate(items, start=1):
        if not isinstance(item, dict):
            continue
        name = item.get("name")
        section = item.get("section")
        item_type = "drink" if item.get("type") == "drink" else "food"
        qty = max(1, int(item.get("qty") or 1))
        try:
            safe_unit_price = max(0, int(round(float(item.get("unitPrice")))))
        except (TypeError, ValueError):
            safe_unit_price = extract_price_value(item.get("priceLabel") or item.get("price"))
        normalized.append(
            {
                "id": str(item.get("id") or f"li-{index}"),
                "menuId": str(item.get("menuId") or item.get("id") or ""),
                "type": item_type,
                "station": STATION_BY_TYPE[item_type],
                "name": {
                    "sq": str(name.get("sq") if isinstance(name, dict) else name or f"Artikull {index}"),
                    "en": str((name.get("en") if isinstance(name, dict) else name) or (name.get("sq") if isinstance(name, dict) else name) or f"Item {index}"),
                },
                "section": {
                    "sq": str(section.get("sq") if isinstance(section, dict) else section or "Te tjera"),
                    "en": str((section.get("en") if isinstance(section, dict) else section) or (section.get("sq") if isinstance(section, dict) else section) or "Other"),
                },
                "qty": qty,
                "unitPrice": safe_unit_price,
                "priceLabel": str(item.get("priceLabel") or item.get("price") or f"{safe_unit_price} ALL"),
                "totalPrice": qty * safe_unit_price,
            }
        )
    return normalized


def build_station_status(items: list[dict[str, Any]], raw_status: Any = None) -> dict[str, str]:
    value = raw_status if isinstance(raw_status, dict) else {}
    status = {}
    for station in ("bar", "kitchen"):
        has_items = any(item["station"] == station for item in items)
        status[station] = "na" if not has_items else ("ready" if value.get(station) == "ready" else "pending")
    return status


def normalize_invoice_record(record: sqlite3.Row) -> dict[str, Any]:
    items = normalize_invoice_items(json.loads(record["items_json"]))
    return {
        "id": record["id"],
        "number": record["number"],
        "createdAt": record["created_at"],
        "waiter": record["waiter"],
        "table": record["table_name"],
        "customer": record["customer"],
        "note": record["note"],
        "items": items,
        "total": int(record["total"]),
        "stationStatus": build_station_status(items, json.loads(record["station_status"])),
    }


class HendonStore:
    def __init__(self, db_path: Path, menu_path: Path) -> None:
        self.db_path = db_path
        self.menu_path = menu_path

    def connect(self) -> sqlite3.Connection:
        connection = sqlite3.connect(self.db_path)
        connection.row_factory = sqlite3.Row
        connection.execute("PRAGMA foreign_keys = ON")
        return connection

    def init_db(self) -> None:
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        with self.connect() as connection:
            connection.executescript(
                """
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT NOT NULL UNIQUE,
                    password_hash TEXT NOT NULL,
                    role TEXT NOT NULL,
                    created_at TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS sessions (
                    token_hash TEXT PRIMARY KEY,
                    user_id INTEGER NOT NULL,
                    expires_at TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
                );
                CREATE TABLE IF NOT EXISTS app_state (
                    key TEXT PRIMARY KEY,
                    value TEXT NOT NULL
                );
                CREATE TABLE IF NOT EXISTS invoices (
                    id TEXT PRIMARY KEY,
                    number TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    waiter TEXT NOT NULL,
                    table_name TEXT NOT NULL,
                    customer TEXT NOT NULL,
                    note TEXT NOT NULL,
                    total INTEGER NOT NULL,
                    station_status TEXT NOT NULL,
                    items_json TEXT NOT NULL
                );
                CREATE INDEX IF NOT EXISTS idx_invoices_created_at ON invoices (created_at DESC);
                """
            )
            for user in DEFAULT_USERS:
                existing = connection.execute("SELECT id FROM users WHERE username = ?", (user["username"],)).fetchone()
                if not existing:
                    connection.execute(
                        "INSERT INTO users (username, password_hash, role, created_at) VALUES (?, ?, ?, ?)",
                        (user["username"], hash_password(user["password"]), user["role"], iso_now()),
                    )
            existing_site = connection.execute("SELECT value FROM app_state WHERE key = 'site_data'").fetchone()
            if not existing_site:
                connection.execute(
                    "INSERT INTO app_state (key, value) VALUES ('site_data', ?)",
                    (json.dumps(normalize_site_data(default_site_data(self.menu_path), self.menu_path)),),
                )
            connection.execute("DELETE FROM sessions WHERE expires_at < ?", (iso_now(),))
            connection.commit()

    def get_site_data(self, connection: sqlite3.Connection) -> dict[str, Any]:
        row = connection.execute("SELECT value FROM app_state WHERE key = 'site_data'").fetchone()
        if not row:
            data = normalize_site_data(default_site_data(self.menu_path), self.menu_path)
            connection.execute("INSERT OR REPLACE INTO app_state (key, value) VALUES ('site_data', ?)", (json.dumps(data),))
            connection.commit()
            return data
        return normalize_site_data(json.loads(row["value"]), self.menu_path)

    def set_site_data(self, connection: sqlite3.Connection, site_data: Any) -> dict[str, Any]:
        normalized = normalize_site_data(site_data, self.menu_path)
        connection.execute("INSERT OR REPLACE INTO app_state (key, value) VALUES ('site_data', ?)", (json.dumps(normalized),))
        connection.commit()
        return normalized

    def list_users(self, connection: sqlite3.Connection) -> list[dict[str, str]]:
        rows = connection.execute("SELECT username, role FROM users ORDER BY CASE role WHEN 'admin' THEN 0 ELSE 1 END, username").fetchall()
        return [{"username": row["username"], "role": row["role"]} for row in rows]

    def list_invoices(self, connection: sqlite3.Connection) -> list[dict[str, Any]]:
        rows = connection.execute("SELECT * FROM invoices ORDER BY created_at DESC").fetchall()
        return [normalize_invoice_record(row) for row in rows]

    def create_invoice_number(self, connection: sqlite3.Connection, created_at: datetime) -> str:
        start = created_at.replace(hour=0, minute=0, second=0, microsecond=0).isoformat()
        end = (created_at.replace(hour=0, minute=0, second=0, microsecond=0) + timedelta(days=1)).isoformat()
        row = connection.execute("SELECT COUNT(*) AS total FROM invoices WHERE created_at >= ? AND created_at < ?", (start, end)).fetchone()
        return f"INV-{created_at.strftime('%Y%m%d')}-{int(row['total']) + 1:03d}"

    def filter_invoices_for_user(self, user: dict[str, Any] | None, invoices: list[dict[str, Any]]) -> list[dict[str, Any]]:
        if not user:
            return []
        role = normalize_role(user["role"])
        if role == "admin":
            return invoices
        if role == "waiter":
            return [invoice for invoice in invoices if invoice["waiter"] == user["username"]]
        if role == "bar":
            return [invoice for invoice in invoices if invoice["stationStatus"].get("bar") != "na"]
        if role == "kitchen":
            return [invoice for invoice in invoices if invoice["stationStatus"].get("kitchen") != "na"]
        return []
