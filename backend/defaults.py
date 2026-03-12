import re
from typing import Any


ROLE_KEYS = {"admin", "waiter", "bar", "kitchen"}
STATION_BY_TYPE = {"food": "kitchen", "drink": "bar"}

DEFAULT_CONTENT = {
    "sq": {
        "businessName": "The Hendon Pub",
        "metaDescription": "The Hendon Pub - Pub modern me ushqim tradicional, pije premium dhe atmosfere unike.",
        "hero": {
            "kicker": "Pub & Grill",
            "title": "Shija e Nates ne Zemer te Qytetit",
            "lead": "Atmosfere autentike, kuzhine tradicionale dhe kokteje te kuruara per cdo mbremje.",
            "image": "https://images.unsplash.com/photo-1514361892635-6e1226792788?auto=format&fit=crop&w=2200&q=80",
        },
        "about": {
            "title": "Pub me Stil Modern",
            "text": "The Hendon Pub kombinon recetat tradicionale me prezantim modern. Cdo detaj eshte menduar per nje mbremje perfekte.",
            "hours": "E Hene - E Diele: 07:00 - 00:00",
            "address": "Kompleksi Delijorgji, Tirane 1023",
        },
        "menuTitle": "Te Preferuarat",
        "contact": {"title": "Rezervo Tavolinen Tende", "text": "Per rezervime ose pyetje, na kontakto cdo dite."},
    },
    "en": {
        "businessName": "The Hendon Pub",
        "metaDescription": "The Hendon Pub - A modern pub with signature food, premium drinks and a distinctive atmosphere.",
        "hero": {
            "kicker": "Pub & Grill",
            "title": "Taste the Night in the Heart of the City",
            "lead": "Authentic atmosphere, traditional cuisine and curated cocktails for every evening.",
            "image": "https://images.unsplash.com/photo-1514361892635-6e1226792788?auto=format&fit=crop&w=2200&q=80",
        },
        "about": {
            "title": "A Modern-Style Pub",
            "text": "The Hendon Pub blends traditional recipes with a modern presentation. Every detail is designed for a memorable night out.",
            "hours": "Monday - Sunday: 07:00 - 00:00",
            "address": "Delijorgji Complex, Tirana 1023",
        },
        "menuTitle": "Favorites",
        "contact": {"title": "Book Your Table", "text": "For reservations or questions, get in touch with us every day."},
    },
}

DEFAULT_LINKS = {
    "phone": "+355698757893",
    "mapsUrl": "https://www.google.com/maps/place/The+Hendon+Pub/@41.3225198,19.7957727,17z/data=!4m6!3m5!1s0x1350310040968bf3:0x3a48075119e30851!8m2!3d41.3223019!4d19.7954807!16s%2Fg%2F11xmqhv6hp!17m2!4m1!1e3!18m1!1e1?entry=ttu",
    "mapEmbed": "https://maps.google.com/maps?q=41.3223019,19.7954807&z=17&output=embed",
    "instagram": "https://www.instagram.com/hendonpub?igsh=bmF3d2xnOW52MnNr",
    "youtube": "https://www.youtube.com/@HendonPub",
    "tiktok": "https://www.tiktok.com/@the.hendon.pub",
}

DEFAULT_GALLERY = [
    "assets/gallery/the-hendon-pub.jpg?v=20260311",
    "assets/gallery/hendon-1.jpg",
    "assets/gallery/hendon-2.jpg",
    "assets/gallery/hendon-3.jpg",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepyUZiELVVQXSMkm5d2Tn6WwukRbW_-BY73xVW4hBDQQb4ChZjsEdD0PKNck5OFrD9D3Pe_YDZi6XQVq98991VKg6RDuKCoY5TDC7biI0ZzppLa6DFxSrAo2jPQa253r8fMh-9YML5_wIhJ=w203-h270-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-3giaC14HStnt1fvo9ZezAz94adyqVy-cszqnRqk60WzSKz0cy78d-d5jP9i2tSAGf47evyaLekhpcxF8FdsIB-MmhpQ-7g56hhFdo4T7EaAmJg3d93N9hm7cLCffIJrfuwuzigliS582=w203-h270-k-no",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqJMw12MV9aWmJ2VW3daS4eGRo9gVL18c75n25mpBiSb2TuaSmQKFetrYrW106lpTRBcIW8zQtcJ4RWh5V1RVMXYgIZStQwu_k-A_5Fi8aWiuXTd_4pHa5vopZ9Vlq95qYFWWrK1rbFHU4_=w203-h360-k-no",
]

DEFAULT_REVIEWS = [
    {"author": "Klient Google", "rating": 5, "date": "Google Maps", "text": {"sq": "Ambienti super dhe ushqimi shume i mire. Do rikthehem patjeter.", "en": "Great atmosphere and very good food. I will definitely come back."}},
    {"author": "Klient Google", "rating": 5, "date": "Google Maps", "text": {"sq": "Sherbim korrekt, cmime te mira dhe atmosfere e ngrohte.", "en": "Professional service, fair prices and a warm atmosphere."}},
    {"author": "Klient Google", "rating": 5, "date": "Google Maps", "text": {"sq": "Vendi ideal per darke me shoqeri dhe kokteje fantastike.", "en": "An ideal place for dinner with friends and fantastic cocktails."}},
]

DEFAULT_USERS = [
    {"username": "admin", "password": "admin123", "role": "admin"},
    {"username": "kamarier", "password": "kamarier123", "role": "waiter"},
    {"username": "banak", "password": "banak123", "role": "bar"},
    {"username": "kuzhine", "password": "kuzhine123", "role": "kitchen"},
]


def normalize_role(role: Any) -> str:
    value = str(role or "").strip().lower()
    if value == "user":
        return "waiter"
    if value in {"bartender", "banakier"}:
        return "bar"
    if value in {"chef", "cook", "kuzhine"}:
        return "kitchen"
    return value if value in ROLE_KEYS else "waiter"


def load_default_menu(menu_path) -> list[dict[str, Any]]:
    text = menu_path.read_text(encoding="utf-8")
    pattern = re.compile(r'add\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\);')
    items = []
    for index, match in enumerate(pattern.finditer(text), start=1):
        item_type, section, name, price = match.groups()
        items.append({"id": f"m{index}", "type": item_type, "name": name, "description": section, "price": price})
    return items


def default_site_data(menu_path) -> dict[str, Any]:
    return {
        "content": DEFAULT_CONTENT,
        "links": DEFAULT_LINKS,
        "menu": load_default_menu(menu_path),
        "gallery": DEFAULT_GALLERY,
        "reviews": DEFAULT_REVIEWS,
    }
