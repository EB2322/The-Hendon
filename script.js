const STORAGE_KEYS = {
  data: "hendon_site_data_v2",
  legacyData: "hendon_site_data",
  users: "hendon_users",
  session: "hendon_session",
  language: "hendon_language"
};

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/The+Hendon+Pub/@41.3225198,19.7957727,17z/data=!4m8!3m7!1s0x1350310040968bf3:0x3a48075119e30851!8m2!3d41.3223019!4d19.7954807!9m1!1b1!16s%2Fg%2F11xmqhv6hp!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D";
const CUSTOM_GALLERY_IMAGES = [
  "assets/gallery/hendon-1.jpg",
  "assets/gallery/hendon-2.jpg",
  "assets/gallery/hendon-3.jpg",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepyUZiELVVQXSMkm5d2Tn6WwukRbW_-BY73xVW4hBDQQb4ChZjsEdD0PKNck5OFrD9D3Pe_YDZi6XQVq98991VKg6RDuKCoY5TDC7biI0ZzppLa6DFxSrAo2jPQa253r8fMh-9YML5_wIhJ=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-3giaC14HStnt1fvo9ZezAz94adyqVy-cszqnRqk60WzSKz0cy78d-d5jP9i2tSAGf47evyaLekhpcxF8FdsIB-MmhpQ-7g56hhFdo4T7EaAmJg3d93N9hm7cLCffIJrfuwuzigliS582=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqJMw12MV9aWmJ2VW3daS4eGRo9gVL18c75n25mpBiSb2TuaSmQKFetrYrW106lpTRBcIW8zQtcJ4RWh5V1RVMXYgIZStQwu_k-A_5Fi8aWiuXTd_4pHa5vopZ9Vlq95qYFWWrK1rbFHU4_=w203-h360-k-no"
];

const UI = {
  sq: {
    navAbout: "Rreth Nesh", navMenu: "Menu", navGallery: "Galeri", navContact: "Kontakt",
    manage: "Menaxho", login: "Hyr", logout: "Dil", heroMenu: "Shiko Menune", maps: "Na Gjej ne Maps",
    aboutTag: "Rreth Nesh", hours: "Orari", address: "Adresa", openLocation: "Hap lokacionin",
    menuTag: "Menu", filterAll: "Te Gjitha", filterFood: "Ushqim", filterDrink: "Pije",
    galleryTag: "Galeri", galleryTitle: "Atmosfera", reviewsTag: "Vleresime", reviewsTitle: "Cfare Thone Klientet",
    reviewsLink: "Shiko te gjitha ne Google", contactTag: "Kontakt",
    footerRights: "Te gjitha te drejtat e rezervuara.", panelTitle: "Paneli i Menaxhimit", panelClose: "Mbyll",
    editorLanguage: "Po editon gjuhen: Shqip", menuEditorTitle: "Menu Editor (admin + user)", saveMenu: "Ruaj Menune", addItem: "Shto Artikull",
    generalEditorTitle: "General Editor (vetem admin)", labelBusinessName: "Emri i biznesit", labelHeroKicker: "Hero kicker", labelHeroTitle: "Hero title",
    labelHeroText: "Hero text", labelAboutTitle: "About title", labelAboutText: "About text", labelMenuTitle: "Menu title", labelHours: "Orari",
    labelAddress: "Adresa", labelContactTitle: "Kontakt title", labelContactText: "Kontakt text", labelPhone: "Telefon", labelMapsUrl: "Link Google Maps",
    labelMapEmbed: "Map embed URL", labelHeroImage: "Hero image URL", saveGeneral: "Ruaj General",
    jsonTitle: "JSON Data (vetem admin)", jsonHelp: "Ketu mund te shikosh, importosh ose shkarkosh te gjitha te dhenat e faqes.",
    applyJson: "Ruaj JSON", refreshJson: "Rifresko JSON", downloadJson: "Shkarko JSON",
    galleryEditorTitle: "Gallery Editor (vetem admin)", labelGalleryImport: "Import foto nga URL (nje per rresht)", importGallery: "Importo URL",
    labelGalleryUpload: "Upload foto nga kompjuteri", saveGallery: "Ruaj Galerine", addGallery: "Shto Foto",
    reviewsEditorTitle: "Reviews Editor (vetem admin)", saveReviews: "Ruaj Reviews", addReview: "Shto Review",
    usersTitle: "Users (vetem admin)", addUser: "Shto User", passwordManagerTitle: "Password Manager (vetem admin)",
    labelOwnPassword: "Ndrysho password-in tend", changePassword: "Ndrysho", labelOtherPassword: "Ndrysho password per user tjeter", savePassword: "Ruaj",
    userRole: "user", adminRole: "admin", newPasswordPlaceholder: "password i ri",
    loginTitle: "Hyr", username: "Username", password: "Password", loginSubmit: "Hyr", cancel: "Anulo",
    invalidCredentials: "Kredencialet nuk jane te sakta.", sessionLoggedOut: "Nuk je i loguar.",
    menuEmptyTitle: "Menu bosh", menuEmptyText: "Nuk ka artikuj per kete filter.",
    legendNa: "Jeshile: Jo alkolike", legendLight: "E verdhe: Te lehta", legendStrong: "E kuqe: Te forta",
    badgeNa: "Jo alkolike", badgeLight: "E lehte", badgeStrong: "E forte", galleryAlt: "Foto e ambientit",
    menuSaved: "Menu u ruajt.", generalSaved: "General u ruajt.", gallerySaved: "Galeria u ruajt.", reviewsSaved: "Reviews u ruajten.",
    jsonSaved: "JSON u ruajt me sukses.", jsonInvalid: "JSON nuk eshte valid.", validUrls: "Vendos URL valide, nje per rresht.",
    fillUsernamePassword: "Ploteso username dhe password.", usernameExists: "Ky username ekziston.",
    newPasswordRequired: "Vendos password-in e ri.", chooseUserAndPassword: "Zgjidh user dhe vendos password-in e ri.",
    selfPasswordChanged: "Password-i yt u ndryshua."
  },
  en: {
    navAbout: "About", navMenu: "Menu", navGallery: "Gallery", navContact: "Contact",
    manage: "Manage", login: "Login", logout: "Logout", heroMenu: "View Menu", maps: "Find Us on Maps",
    aboutTag: "About", hours: "Opening Hours", address: "Address", openLocation: "Open location",
    menuTag: "Menu", filterAll: "All", filterFood: "Food", filterDrink: "Drinks",
    galleryTag: "Gallery", galleryTitle: "Atmosphere", reviewsTag: "Reviews", reviewsTitle: "What Guests Say",
    reviewsLink: "See all on Google", contactTag: "Contact",
    footerRights: "All rights reserved.", panelTitle: "Management Panel", panelClose: "Close",
    editorLanguage: "Editing language: English", menuEditorTitle: "Menu Editor (admin + user)", saveMenu: "Save Menu", addItem: "Add Item",
    generalEditorTitle: "General Editor (admin only)", labelBusinessName: "Business name", labelHeroKicker: "Hero kicker", labelHeroTitle: "Hero title",
    labelHeroText: "Hero text", labelAboutTitle: "About title", labelAboutText: "About text", labelMenuTitle: "Menu title", labelHours: "Opening hours",
    labelAddress: "Address", labelContactTitle: "Contact title", labelContactText: "Contact text", labelPhone: "Phone", labelMapsUrl: "Google Maps link",
    labelMapEmbed: "Map embed URL", labelHeroImage: "Hero image URL", saveGeneral: "Save General",
    jsonTitle: "JSON Data (admin only)", jsonHelp: "View, import or download the complete website data here.",
    applyJson: "Save JSON", refreshJson: "Refresh JSON", downloadJson: "Download JSON",
    galleryEditorTitle: "Gallery Editor (admin only)", labelGalleryImport: "Import photos by URL (one per line)", importGallery: "Import URLs",
    labelGalleryUpload: "Upload photos from computer", saveGallery: "Save Gallery", addGallery: "Add Photo",
    reviewsEditorTitle: "Reviews Editor (admin only)", saveReviews: "Save Reviews", addReview: "Add Review",
    usersTitle: "Users (admin only)", addUser: "Add User", passwordManagerTitle: "Password Manager (admin only)",
    labelOwnPassword: "Change your password", changePassword: "Change", labelOtherPassword: "Change another user's password", savePassword: "Save",
    userRole: "user", adminRole: "admin", newPasswordPlaceholder: "new password",
    loginTitle: "Login", username: "Username", password: "Password", loginSubmit: "Login", cancel: "Cancel",
    invalidCredentials: "The credentials are not correct.", sessionLoggedOut: "You are not logged in.",
    menuEmptyTitle: "Empty menu", menuEmptyText: "There are no items for this filter.",
    legendNa: "Green: Non-alcoholic", legendLight: "Yellow: Light", legendStrong: "Red: Strong",
    badgeNa: "Non-alcoholic", badgeLight: "Light", badgeStrong: "Strong", galleryAlt: "Venue photo",
    menuSaved: "Menu saved.", generalSaved: "General content saved.", gallerySaved: "Gallery saved.", reviewsSaved: "Reviews saved.",
    jsonSaved: "JSON saved successfully.", jsonInvalid: "The JSON is not valid.", validUrls: "Enter valid URLs, one per line.",
    fillUsernamePassword: "Enter both username and password.", usernameExists: "This username already exists.",
    newPasswordRequired: "Enter the new password.", chooseUserAndPassword: "Choose a user and enter the new password.",
    selfPasswordChanged: "Your password was changed."
  }
};

const DEFAULT_USERS = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" }
];

const DEFAULT_CONTENT = {
  sq: {
    businessName: "The Hendon Pub",
    metaDescription: "The Hendon Pub - Pub modern me ushqim tradicional, pije premium dhe atmosfere unike.",
    hero: {
      kicker: "Pub & Grill",
      title: "Shija e Nates ne Zemer te Qytetit",
      lead: "Atmosfere autentike, kuzhine tradicionale dhe kokteje te kuruara per cdo mbremje.",
      image: "https://images.unsplash.com/photo-1514361892635-6e1226792788?auto=format&fit=crop&w=2200&q=80"
    },
    about: {
      title: "Pub me Stil Modern",
      text: "The Hendon Pub kombinon recetat tradicionale me prezantim modern. Cdo detaj eshte menduar per nje mbremje perfekte.",
      hours: "E Hene - E Diele: 07:00 - 00:00",
      address: "Kompleksi Delijorgji, Tirane 1023"
    },
    menuTitle: "Te Preferuarat",
    contact: { title: "Rezervo Tavolinen Tende", text: "Per rezervime ose pyetje, na kontakto cdo dite." }
  },
  en: {
    businessName: "The Hendon Pub",
    metaDescription: "The Hendon Pub - A modern pub with signature food, premium drinks and a distinctive atmosphere.",
    hero: {
      kicker: "Pub & Grill",
      title: "Taste the Night in the Heart of the City",
      lead: "Authentic atmosphere, traditional cuisine and curated cocktails for every evening.",
      image: "https://images.unsplash.com/photo-1514361892635-6e1226792788?auto=format&fit=crop&w=2200&q=80"
    },
    about: {
      title: "A Modern-Style Pub",
      text: "The Hendon Pub blends traditional recipes with a modern presentation. Every detail is designed for a memorable night out.",
      hours: "Monday - Sunday: 07:00 - 00:00",
      address: "Delijorgji Complex, Tirana 1023"
    },
    menuTitle: "Favorites",
    contact: { title: "Book Your Table", text: "For reservations or questions, get in touch with us every day." }
  }
};

const DEFAULT_LINKS = {
  phone: "+355698757893",
  mapsUrl: "https://www.google.com/maps/place/The+Hendon+Pub/@41.3225198,19.7957727,17z/data=!4m6!3m5!1s0x1350310040968bf3:0x3a48075119e30851!8m2!3d41.3223019!4d19.7954807!16s%2Fg%2F11xmqhv6hp!17m2!4m1!1e3!18m1!1e1?entry=ttu",
  mapEmbed: "https://maps.google.com/maps?q=41.3223019,19.7954807&z=17&output=embed",
  instagram: "https://www.instagram.com/hendonpub?igsh=bmF3d2xnOW52MnNr",
  youtube: "https://www.youtube.com/@HendonPub",
  tiktok: "https://www.tiktok.com/@the.hendon.pub"
};

function translateMenuSection(section) {
  const map = {
    "KAFE": "COFFEE",
    "PIJE TE FRESKETA": "FRESH DRINKS",
    "KOKTEJE": "COCKTAILS",
    "MENGJESI": "BREAKFAST",
    "SNACKS": "SNACKS",
    "SPECIALITETE": "SPECIALS",
    "LEGJENDA E FORCES": "STRENGTH GUIDE",
    "KOKTEJE TE SUGJERUARA": "SUGGESTED COCKTAILS"
  };
  return map[section] || section;
}

function translateMenuName(name) {
  const map = {
    "Kafe": "Coffee",
    "Kafe e ftohte": "Iced coffee",
    "Makiato": "Macchiato",
    "Makiato e ftohte": "Iced macchiato",
    "Cappuccino e ftohte": "Iced cappuccino",
    "Cokollate e ngrohte": "Hot chocolate",
    "Cokollate e ftohte": "Iced chocolate",
    "Kakao e ngrohte": "Hot cocoa",
    "Kakao e ftohte": "Iced cocoa",
    "Caj (bustine)": "Tea (tea bag)",
    "Caj bio": "Organic tea",
    "Uje Lajthiza": "Lajthiza water",
    "Uje pa gaz (M250)": "Still water (M250)",
    "Uje me gaz (M250)": "Sparkling water (M250)",
    "Ice Tea pjeshke": "Peach iced tea",
    "Ice Tea limon": "Lemon iced tea",
    "Analcolik": "Non-alcoholic",
    "Omlete normale": "Classic omelette",
    "Petulla": "Fried dough",
    "Kroketa": "Croquettes",
    "Patate fritel": "Fried potatoes",
    "Antipast e ngrohte": "Warm antipasti",
    "Bruskete ancuge": "Anchovy bruschetta",
    "Bruskete klasike": "Classic bruschetta",
    "Bruskete mix": "Mixed bruschetta",
    "Salcice artizanale": "Artisanal sausage",
    "Patate Amerikane me krem tartufi": "American fries with truffle cream",
    "Schnitzel pule ose vici": "Chicken or veal schnitzel",
    "Bartender's Choice - sipas kerkeses": "Bartender's Choice - on request",
    "Smoked Negroni - opsionale (Strong-Very strong)": "Smoked Negroni - optional (Strong-Very strong)",
    "Pyet kamarierin": "Ask the waiter"
  };
  return map[name] || name;
}

function buildMenu() {
  const items = [];
  const add = (type, sectionSq, nameSq, price) => {
    items.push({
      id: `m${items.length + 1}`,
      type,
      name: { sq: nameSq, en: translateMenuName(nameSq) },
      section: { sq: sectionSq, en: translateMenuSection(sectionSq) },
      price
    });
  };

  add("drink", "KAFE", "Kafe", "120 ALL");
  add("drink", "KAFE", "Kafe e ftohte", "150 ALL");
  add("drink", "KAFE", "Makiato", "130 ALL");
  add("drink", "KAFE", "Makiato e ftohte", "150 ALL");
  add("drink", "KAFE", "Cappuccino", "180 ALL");
  add("drink", "KAFE", "Cappuccino (bustine)", "180 ALL");
  add("drink", "KAFE", "Cappuccino e ftohte", "250 ALL");
  add("drink", "KAFE", "Cokollate e ngrohte", "200 ALL");
  add("drink", "KAFE", "Cokollate e ftohte", "250 ALL");
  add("drink", "KAFE", "Kakao e ngrohte", "200 ALL");
  add("drink", "KAFE", "Kakao e ftohte", "250 ALL");
  add("drink", "KAFE", "Salep", "150 ALL");
  add("drink", "KAFE", "Caj (bustine)", "120 ALL");
  add("drink", "KAFE", "Caj bio", "250 ALL");
  add("drink", "KAFE", "Frape", "250 ALL");
  add("drink", "PIJE TE FRESKETA", "Uje Lajthiza", "100 ALL");
  add("drink", "PIJE TE FRESKETA", "Uje pa gaz (M250)", "150 ALL");
  add("drink", "PIJE TE FRESKETA", "Uje me gaz (M250)", "150 ALL");
  add("drink", "PIJE TE FRESKETA", "Coca Cola", "200 ALL");
  add("drink", "PIJE TE FRESKETA", "Lemon Soda", "200 ALL");
  add("drink", "PIJE TE FRESKETA", "Oran Soda", "200 ALL");
  add("drink", "PIJE TE FRESKETA", "Ice Tea pjeshke", "200 ALL");
  add("drink", "PIJE TE FRESKETA", "Ice Tea limon", "200 ALL");
  add("drink", "PIJE TE FRESKETA", "Red Bull", "400 ALL");
  add("drink", "PIJE TE FRESKETA", "Rose Lemonade", "400 ALL");
  add("drink", "PIJE TE FRESKETA", "Britvic", "200 ALL");
  add("drink", "PIJE TE FRESKETA", "Tonic Fentimans", "400 ALL");
  add("drink", "PIJE TE FRESKETA", "Grodino", "200 ALL");
  add("drink", "PIJE TE FRESKETA", "Bitter", "180 ALL");
  add("drink", "APERITIV", "Aperol Spritz", "500 ALL");
  add("drink", "APERITIV", "Campari Spritz", "500 ALL");
  add("drink", "APERITIV", "Hugo", "500 ALL");
  add("drink", "KOKTEJE", "Vesper", "700 ALL");
  add("drink", "KOKTEJE", "London Mule", "700 ALL");
  add("drink", "KOKTEJE", "Negroni", "700 ALL");
  add("drink", "KOKTEJE", "Gimlet", "700 ALL");
  add("drink", "KOKTEJE", "Espresso Martini", "700 ALL");
  add("drink", "KOKTEJE", "Bramble", "700 ALL");
  add("drink", "KOKTEJE", "Churchill", "700 ALL");
  add("drink", "KOKTEJE", "House Cocktail", "800 ALL");
  add("drink", "KOKTEJE", "Analcolik", "600 ALL");
  add("drink", "KOKTEJE", "Bartender Recipe", "800 / 900 / 1000 ALL");
  add("food", "MENGJESI", "Classic Benedict", "500 ALL");
  add("food", "MENGJESI", "Omlete normale", "250 ALL");
  add("food", "MENGJESI", "Egg Poached", "300 ALL");
  add("food", "MENGJESI", "Sunny Side Up", "250 ALL");
  add("food", "MENGJESI", "Ham & Cheese Sandwich", "150 ALL");
  add("food", "MENGJESI", "Ham, Egg & Cheese Sandwich", "170 ALL");
  add("food", "MENGJESI", "Hash Browns", "150 ALL");
  add("food", "MENGJESI", "French Toast", "300 ALL");
  add("food", "MENGJESI", "Petulla", "200 ALL");
  add("food", "SNACKS", "Mini Burger", "450 ALL");
  add("food", "SNACKS", "Chicken Wings", "700 ALL");
  add("food", "SNACKS", "Chicken Fingers", "650 ALL");
  add("food", "SNACKS", "Onion Rings", "350 ALL");
  add("food", "SNACKS", "Kroketa", "350 ALL");
  add("food", "SNACKS", "Patate fritel", "300 ALL");
  add("food", "SPECIALITETE", "Antipast e ngrohte", "1200 - 2200 ALL");
  add("food", "SPECIALITETE", "Bruskete ancuge", "600 ALL");
  add("food", "SPECIALITETE", "Bruskete klasike", "400 ALL");
  add("food", "SPECIALITETE", "Bruskete mix", "600 ALL");
  add("food", "SPECIALITETE", "Tacos Beef", "750 ALL");
  add("food", "SPECIALITETE", "Tacos Chicken", "500 ALL");
  add("food", "SPECIALITETE", "Salcice artizanale", "800 ALL");
  add("food", "SPECIALITETE", "Patate Amerikane me krem tartufi", "450 ALL");
  add("food", "SPECIALITETE", "Fish & Chips", "850 ALL");
  add("food", "SPECIALITETE", "Schnitzel pule ose vici", "800 ALL");
  add("food", "SPECIALITETE", "French Fries", "350 ALL");
  add("drink", "LEGJENDA E FORCES", "Light", "~8-12%");
  add("drink", "LEGJENDA E FORCES", "Medium", "~12-18%");
  add("drink", "LEGJENDA E FORCES", "Strong", "~18-25%");
  add("drink", "LEGJENDA E FORCES", "Very strong", "25%+");
  add("drink", "KOKTEJE TE SUGJERUARA", "Aperol Spritz - Aperol/Prosecco/Soda (Light)", "Pyet kamarierin");
  add("drink", "KOKTEJE TE SUGJERUARA", "Negroni - Gin/Campari/Sweet Vermouth (Strong)", "Pyet kamarierin");
  add("drink", "KOKTEJE TE SUGJERUARA", "Mojito - Rum/Mint/Lime/Soda (Medium)", "Pyet kamarierin");
  add("drink", "KOKTEJE TE SUGJERUARA", "Margarita - Tequila/Triple sec/Lime (Strong)", "Pyet kamarierin");
  add("drink", "SHOTS & SHOOTERS", "Vodka Shot", "Pyet kamarierin");
  add("drink", "SHOTS & SHOOTERS", "Tequila Shot", "Pyet kamarierin");
  add("drink", "SHOTS & SHOOTERS", "Whiskey Shot", "Pyet kamarierin");
  add("drink", "SHOTS & SHOOTERS", "Jagerbomb", "Pyet kamarierin");
  return items;
}

const DEFAULT_DATA = {
  content: DEFAULT_CONTENT,
  links: DEFAULT_LINKS,
  menu: buildMenu(),
  gallery: [...CUSTOM_GALLERY_IMAGES],
  reviews: [
    { author: "Klient Google", rating: 5, date: "Google Maps", text: { sq: "Ambienti super dhe ushqimi shume i mire. Do rikthehem patjeter.", en: "Great atmosphere and very good food. I will definitely come back." } },
    { author: "Klient Google", rating: 5, date: "Google Maps", text: { sq: "Sherbim korrekt, cmime te mira dhe atmosfere e ngrohte.", en: "Professional service, fair prices and a warm atmosphere." } },
    { author: "Klient Google", rating: 5, date: "Google Maps", text: { sq: "Vendi ideal per darke me shoqeri dhe kokteje fantastike.", en: "An ideal place for dinner with friends and fantastic cocktails." } }
  ]
};

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clampRating(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return 5;
  return Math.max(1, Math.min(5, Math.round(num)));
}

function normalizeContent(raw, fallback) {
  const value = raw && typeof raw === "object" ? raw : {};
  return {
    businessName: String(value.businessName || fallback.businessName),
    metaDescription: String(value.metaDescription || fallback.metaDescription),
    hero: {
      kicker: String((value.hero && value.hero.kicker) || fallback.hero.kicker),
      title: String((value.hero && value.hero.title) || fallback.hero.title),
      lead: String((value.hero && value.hero.lead) || fallback.hero.lead),
      image: String((value.hero && value.hero.image) || fallback.hero.image)
    },
    about: {
      title: String((value.about && value.about.title) || fallback.about.title),
      text: String((value.about && value.about.text) || fallback.about.text),
      hours: String((value.about && value.about.hours) || fallback.about.hours),
      address: String((value.about && value.about.address) || fallback.about.address)
    },
    menuTitle: String(value.menuTitle || fallback.menuTitle),
    contact: {
      title: String((value.contact && value.contact.title) || fallback.contact.title),
      text: String((value.contact && value.contact.text) || fallback.contact.text)
    }
  };
}

function fromLegacy(raw, lang) {
  if (lang === "sq") {
    return {
      businessName: raw.businessName || DEFAULT_CONTENT.sq.businessName,
      metaDescription: DEFAULT_CONTENT.sq.metaDescription,
      hero: { ...(raw.hero || DEFAULT_CONTENT.sq.hero) },
      about: { ...(raw.about || DEFAULT_CONTENT.sq.about) },
      menuTitle: raw.menuTitle || DEFAULT_CONTENT.sq.menuTitle,
      contact: {
        title: (raw.contact && raw.contact.title) || DEFAULT_CONTENT.sq.contact.title,
        text: (raw.contact && raw.contact.text) || DEFAULT_CONTENT.sq.contact.text
      }
    };
  }
  return DEFAULT_CONTENT.en;
}

function normalizeMenu(menu) {
  return (Array.isArray(menu) ? menu : DEFAULT_DATA.menu).map((item, idx) => {
    const rawName = item.name && typeof item.name === "object" ? item.name.sq : item.name;
    const rawSection = item.section && typeof item.section === "object" ? item.section.sq : (item.section || item.description);
    return {
      id: String(item.id || `m${idx + 1}`),
      type: item.type === "drink" ? "drink" : "food",
      name: {
        sq: String((item.name && item.name.sq) || rawName || `Artikull ${idx + 1}`),
        en: String((item.name && item.name.en) || translateMenuName(rawName || ""))
      },
      section: {
        sq: String((item.section && item.section.sq) || rawSection || "Te tjera"),
        en: String((item.section && item.section.en) || translateMenuSection(rawSection || "Te tjera"))
      },
      price: String(item.price || "0 ALL")
    };
  });
}

function normalizeReviews(reviews) {
  return (Array.isArray(reviews) ? reviews : DEFAULT_DATA.reviews)
    .map((review, idx) => {
      if (typeof review === "string") {
        return { author: `Guest ${idx + 1}`, rating: 5, date: "Google Maps", text: { sq: review, en: review } };
      }
      const textSq = review.text && typeof review.text === "object" ? review.text.sq : review.text;
      const textEn = review.text && typeof review.text === "object" ? review.text.en : review.text;
      return {
        author: String(review.author || `Guest ${idx + 1}`),
        rating: clampRating(review.rating),
        date: String(review.date || "Google Maps"),
        text: { sq: String(textSq || ""), en: String(textEn || textSq || "") }
      };
    })
    .filter((review) => review.text.sq || review.text.en);
}

function normalizeUsers(raw) {
  if (!Array.isArray(raw) || raw.length === 0) return DEFAULT_USERS;
  return raw.filter((user) => user && user.username && user.password && user.role);
}

function normalizeSiteData(raw) {
  const value = raw && typeof raw === "object" ? raw : {};
  const content = value.content
    ? {
        sq: normalizeContent(value.content.sq, DEFAULT_CONTENT.sq),
        en: normalizeContent(value.content.en, DEFAULT_CONTENT.en)
      }
    : {
        sq: normalizeContent(fromLegacy(value, "sq"), DEFAULT_CONTENT.sq),
        en: normalizeContent(fromLegacy(value, "en"), DEFAULT_CONTENT.en)
      };

  return {
    content,
    links: {
      ...DEFAULT_LINKS,
      ...(value.links || {}),
      phone: String((value.links && value.links.phone) || (value.contact && value.contact.phone) || DEFAULT_LINKS.phone),
      mapsUrl: String((value.links && value.links.mapsUrl) || (value.contact && value.contact.mapsUrl) || DEFAULT_LINKS.mapsUrl),
      mapEmbed: String((value.links && value.links.mapEmbed) || (value.contact && value.contact.mapEmbed) || DEFAULT_LINKS.mapEmbed),
      instagram: String((value.links && value.links.instagram) || (value.contact && value.contact.instagram) || DEFAULT_LINKS.instagram),
      youtube: String((value.links && value.links.youtube) || (value.contact && value.contact.youtube) || DEFAULT_LINKS.youtube),
      tiktok: String((value.links && value.links.tiktok) || (value.contact && value.contact.tiktok) || DEFAULT_LINKS.tiktok)
    },
    menu: normalizeMenu(value.menu),
    gallery: Array.isArray(value.gallery) && value.gallery.length ? value.gallery : [...DEFAULT_DATA.gallery],
    reviews: normalizeReviews(value.reviews)
  };
}

let siteData = normalizeSiteData(load(STORAGE_KEYS.data, null) || load(STORAGE_KEYS.legacyData, DEFAULT_DATA));
let users = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS));
let session = load(STORAGE_KEYS.session, null);
let currentLanguage = load(STORAGE_KEYS.language, "sq") === "en" ? "en" : "sq";
let menuFilter = "all";

const el = {
  metaDescription: document.querySelector('meta[name="description"]'),
  header: document.querySelector(".site-header"),
  brandName: document.getElementById("brandName"),
  footerName: document.getElementById("footerName"),
  navAboutLink: document.getElementById("navAboutLink"),
  navMenuLink: document.getElementById("navMenuLink"),
  navGalleryLink: document.getElementById("navGalleryLink"),
  navContactLink: document.getElementById("navContactLink"),
  manageBtn: document.getElementById("manageBtn"),
  loginBtn: document.getElementById("loginBtn"),
  logoutBtn: document.getElementById("logoutBtn"),
  menuToggle: document.getElementById("menuToggleBtn"),
  langSqBtn: document.getElementById("langSqBtn"),
  langEnBtn: document.getElementById("langEnBtn"),
  navLinks: document.querySelector(".nav-links"),
  heroSection: document.getElementById("heroSection"),
  heroKicker: document.getElementById("heroKicker"),
  heroTitle: document.getElementById("heroTitle"),
  heroLead: document.getElementById("heroLead"),
  heroMenuBtn: document.getElementById("heroMenuBtn"),
  mapsLink: document.getElementById("mapsLink"),
  aboutTag: document.getElementById("aboutTag"),
  aboutTitle: document.getElementById("aboutTitle"),
  aboutText: document.getElementById("aboutText"),
  hoursLabel: document.getElementById("hoursLabel"),
  hoursText: document.getElementById("hoursText"),
  addressLabel: document.getElementById("addressLabel"),
  addressText: document.getElementById("addressText"),
  addressLink: document.getElementById("addressLink"),
  menuTag: document.getElementById("menuTag"),
  menuTitle: document.getElementById("menuTitle"),
  filterAllBtn: document.getElementById("filterAllBtn"),
  filterFoodBtn: document.getElementById("filterFoodBtn"),
  filterDrinkBtn: document.getElementById("filterDrinkBtn"),
  menuGrid: document.getElementById("menuGrid"),
  galleryTag: document.getElementById("galleryTag"),
  galleryTitle: document.getElementById("galleryTitle"),
  galleryGrid: document.getElementById("galleryGrid"),
  reviewsTag: document.getElementById("reviewsTag"),
  reviewsTitle: document.getElementById("reviewsTitle"),
  allReviewsLink: document.getElementById("allReviewsLink"),
  reviewsGrid: document.getElementById("reviewsGrid"),
  contactTag: document.getElementById("contactTag"),
  contactTitle: document.getElementById("contactTitle"),
  contactText: document.getElementById("contactText"),
  footerRights: document.getElementById("footerRights"),
  phoneLink: document.getElementById("phoneLink"),
  instagramLink: document.getElementById("instagramLink"),
  youtubeLink: document.getElementById("youtubeLink"),
  tiktokLink: document.getElementById("tiktokLink"),
  mapEmbed: document.getElementById("mapEmbed"),
  year: document.getElementById("year"),
  sessionInfo: document.getElementById("sessionInfo"),
  controlPanel: document.getElementById("controlPanel"),
  panelTitle: document.getElementById("panelTitle"),
  panelClose: document.getElementById("panelClose"),
  editorLanguageInfo: document.getElementById("editorLanguageInfo"),
  menuEditorTitle: document.getElementById("menuEditorTitle"),
  menuEditor: document.getElementById("menuEditor"),
  saveMenuBtn: document.getElementById("saveMenuBtn"),
  addMenuItemBtn: document.getElementById("addMenuItemBtn"),
  generalEditorBlock: document.getElementById("generalEditorBlock"),
  generalEditorTitle: document.getElementById("generalEditorTitle"),
  labelBusinessName: document.getElementById("labelBusinessName"),
  labelHeroKicker: document.getElementById("labelHeroKicker"),
  labelHeroTitle: document.getElementById("labelHeroTitle"),
  labelHeroText: document.getElementById("labelHeroText"),
  labelAboutTitle: document.getElementById("labelAboutTitle"),
  labelAboutText: document.getElementById("labelAboutText"),
  labelMenuTitle: document.getElementById("labelMenuTitle"),
  labelHours: document.getElementById("labelHours"),
  labelAddress: document.getElementById("labelAddress"),
  labelContactTitle: document.getElementById("labelContactTitle"),
  labelContactText: document.getElementById("labelContactText"),
  labelPhone: document.getElementById("labelPhone"),
  labelMapsUrl: document.getElementById("labelMapsUrl"),
  labelMapEmbed: document.getElementById("labelMapEmbed"),
  labelHeroImage: document.getElementById("labelHeroImage"),
  editBusinessName: document.getElementById("editBusinessName"),
  editHeroKicker: document.getElementById("editHeroKicker"),
  editHeroTitle: document.getElementById("editHeroTitle"),
  editHeroLead: document.getElementById("editHeroLead"),
  editAboutTitle: document.getElementById("editAboutTitle"),
  editAboutText: document.getElementById("editAboutText"),
  editMenuTitle: document.getElementById("editMenuTitle"),
  editHours: document.getElementById("editHours"),
  editAddress: document.getElementById("editAddress"),
  editContactTitle: document.getElementById("editContactTitle"),
  editContactText: document.getElementById("editContactText"),
  editPhone: document.getElementById("editPhone"),
  editMapsUrl: document.getElementById("editMapsUrl"),
  editMapEmbed: document.getElementById("editMapEmbed"),
  editHeroImage: document.getElementById("editHeroImage"),
  saveGeneralBtn: document.getElementById("saveGeneralBtn"),
  galleryEditorBlock: document.getElementById("galleryEditorBlock"),
  galleryEditorTitle: document.getElementById("galleryEditorTitle"),
  labelGalleryImport: document.getElementById("labelGalleryImport"),
  labelGalleryUpload: document.getElementById("labelGalleryUpload"),
  galleryEditor: document.getElementById("galleryEditor"),
  saveGalleryBtn: document.getElementById("saveGalleryBtn"),
  addGalleryBtn: document.getElementById("addGalleryBtn"),
  galleryUrlsBulk: document.getElementById("galleryUrlsBulk"),
  importGalleryUrlsBtn: document.getElementById("importGalleryUrlsBtn"),
  galleryFileInput: document.getElementById("galleryFileInput"),
  reviewsEditorBlock: document.getElementById("reviewsEditorBlock"),
  reviewsEditorTitle: document.getElementById("reviewsEditorTitle"),
  reviewsEditor: document.getElementById("reviewsEditor"),
  saveReviewsBtn: document.getElementById("saveReviewsBtn"),
  addReviewBtn: document.getElementById("addReviewBtn"),
  jsonEditorBlock: document.getElementById("jsonEditorBlock"),
  jsonEditorTitle: document.getElementById("jsonEditorTitle"),
  jsonEditorHelp: document.getElementById("jsonEditorHelp"),
  jsonEditor: document.getElementById("jsonEditor"),
  applyJsonBtn: document.getElementById("applyJsonBtn"),
  refreshJsonBtn: document.getElementById("refreshJsonBtn"),
  downloadJsonBtn: document.getElementById("downloadJsonBtn"),
  usersBlock: document.getElementById("usersBlock"),
  usersTitle: document.getElementById("usersTitle"),
  usersList: document.getElementById("usersList"),
  newUsername: document.getElementById("newUsername"),
  newPassword: document.getElementById("newPassword"),
  newRole: document.getElementById("newRole"),
  addUserBtn: document.getElementById("addUserBtn"),
  passwordBlock: document.getElementById("passwordBlock"),
  passwordManagerTitle: document.getElementById("passwordManagerTitle"),
  labelOwnPassword: document.getElementById("labelOwnPassword"),
  labelOtherPassword: document.getElementById("labelOtherPassword"),
  selfNewPassword: document.getElementById("selfNewPassword"),
  changeSelfPasswordBtn: document.getElementById("changeSelfPasswordBtn"),
  passwordTargetUser: document.getElementById("passwordTargetUser"),
  targetNewPassword: document.getElementById("targetNewPassword"),
  changeUserPasswordBtn: document.getElementById("changeUserPasswordBtn"),
  loginModal: document.getElementById("loginModal"),
  loginTitle: document.getElementById("loginTitle"),
  loginUsernameLabel: document.getElementById("loginUsernameLabel"),
  loginPasswordLabel: document.getElementById("loginPasswordLabel"),
  loginUsername: document.getElementById("loginUsername"),
  loginPassword: document.getElementById("loginPassword"),
  submitLoginBtn: document.getElementById("submitLoginBtn"),
  cancelLoginBtn: document.getElementById("cancelLoginBtn"),
  loginError: document.getElementById("loginError"),
  filterButtons: [...document.querySelectorAll(".filter-btn")],
  revealElements: [...document.querySelectorAll(".reveal")]
};

function tr(key) {
  return UI[currentLanguage][key];
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function persistSite() {
  siteData = normalizeSiteData(siteData);
  save(STORAGE_KEYS.data, siteData);
}

function hasRole(role) {
  return !!session && session.role === role;
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "sq";
  save(STORAGE_KEYS.language, currentLanguage);
  renderAll();
}

function renderChrome() {
  const content = siteData.content[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = `${content.businessName} | Pub & Grill`;
  if (el.metaDescription) el.metaDescription.content = content.metaDescription;
  el.navAboutLink.textContent = tr("navAbout");
  el.navMenuLink.textContent = tr("navMenu");
  el.navGalleryLink.textContent = tr("navGallery");
  el.navContactLink.textContent = tr("navContact");
  el.manageBtn.textContent = tr("manage");
  el.loginBtn.textContent = tr("login");
  el.logoutBtn.textContent = tr("logout");
  el.heroMenuBtn.textContent = tr("heroMenu");
  el.mapsLink.textContent = tr("maps");
  el.aboutTag.textContent = tr("aboutTag");
  el.hoursLabel.textContent = tr("hours");
  el.addressLabel.textContent = tr("address");
  el.addressLink.textContent = tr("openLocation");
  el.menuTag.textContent = tr("menuTag");
  el.filterAllBtn.textContent = tr("filterAll");
  el.filterFoodBtn.textContent = tr("filterFood");
  el.filterDrinkBtn.textContent = tr("filterDrink");
  el.galleryTag.textContent = tr("galleryTag");
  el.galleryTitle.textContent = tr("galleryTitle");
  el.reviewsTag.textContent = tr("reviewsTag");
  el.reviewsTitle.textContent = tr("reviewsTitle");
  el.allReviewsLink.textContent = tr("reviewsLink");
  el.contactTag.textContent = tr("contactTag");
  el.footerRights.textContent = tr("footerRights");
  el.panelTitle.textContent = tr("panelTitle");
  el.panelClose.textContent = tr("panelClose");
  el.editorLanguageInfo.textContent = tr("editorLanguage");
  el.menuEditorTitle.textContent = tr("menuEditorTitle");
  el.saveMenuBtn.textContent = tr("saveMenu");
  el.addMenuItemBtn.textContent = tr("addItem");
  el.generalEditorTitle.textContent = tr("generalEditorTitle");
  el.labelBusinessName.textContent = tr("labelBusinessName");
  el.labelHeroKicker.textContent = tr("labelHeroKicker");
  el.labelHeroTitle.textContent = tr("labelHeroTitle");
  el.labelHeroText.textContent = tr("labelHeroText");
  el.labelAboutTitle.textContent = tr("labelAboutTitle");
  el.labelAboutText.textContent = tr("labelAboutText");
  el.labelMenuTitle.textContent = tr("labelMenuTitle");
  el.labelHours.textContent = tr("labelHours");
  el.labelAddress.textContent = tr("labelAddress");
  el.labelContactTitle.textContent = tr("labelContactTitle");
  el.labelContactText.textContent = tr("labelContactText");
  el.labelPhone.textContent = tr("labelPhone");
  el.labelMapsUrl.textContent = tr("labelMapsUrl");
  el.labelMapEmbed.textContent = tr("labelMapEmbed");
  el.labelHeroImage.textContent = tr("labelHeroImage");
  el.saveGeneralBtn.textContent = tr("saveGeneral");
  el.jsonEditorTitle.textContent = tr("jsonTitle");
  el.jsonEditorHelp.textContent = tr("jsonHelp");
  el.applyJsonBtn.textContent = tr("applyJson");
  el.refreshJsonBtn.textContent = tr("refreshJson");
  el.downloadJsonBtn.textContent = tr("downloadJson");
  el.galleryEditorTitle.textContent = tr("galleryEditorTitle");
  el.labelGalleryImport.textContent = tr("labelGalleryImport");
  el.importGalleryUrlsBtn.textContent = tr("importGallery");
  el.labelGalleryUpload.textContent = tr("labelGalleryUpload");
  el.saveGalleryBtn.textContent = tr("saveGallery");
  el.addGalleryBtn.textContent = tr("addGallery");
  el.reviewsEditorTitle.textContent = tr("reviewsEditorTitle");
  el.saveReviewsBtn.textContent = tr("saveReviews");
  el.addReviewBtn.textContent = tr("addReview");
  el.usersTitle.textContent = tr("usersTitle");
  el.addUserBtn.textContent = tr("addUser");
  el.passwordManagerTitle.textContent = tr("passwordManagerTitle");
  el.labelOwnPassword.textContent = tr("labelOwnPassword");
  el.changeSelfPasswordBtn.textContent = tr("changePassword");
  el.labelOtherPassword.textContent = tr("labelOtherPassword");
  el.changeUserPasswordBtn.textContent = tr("savePassword");
  el.loginTitle.textContent = tr("loginTitle");
  el.loginUsernameLabel.textContent = tr("username");
  el.loginPasswordLabel.textContent = tr("password");
  el.submitLoginBtn.textContent = tr("loginSubmit");
  el.cancelLoginBtn.textContent = tr("cancel");
  el.newUsername.placeholder = tr("username");
  el.newPassword.placeholder = tr("password");
  el.selfNewPassword.placeholder = tr("newPasswordPlaceholder");
  el.targetNewPassword.placeholder = tr("newPasswordPlaceholder");
  if (el.newRole.options[0]) el.newRole.options[0].textContent = tr("userRole");
  if (el.newRole.options[1]) el.newRole.options[1].textContent = tr("adminRole");
  el.mapEmbed.title = currentLanguage === "sq" ? "Lokacioni ne harte" : "Location on the map";
  el.langSqBtn.classList.toggle("active", currentLanguage === "sq");
  el.langEnBtn.classList.toggle("active", currentLanguage === "en");
}

function renderSite() {
  const content = siteData.content[currentLanguage];
  const links = siteData.links;
  el.brandName.textContent = content.businessName;
  el.footerName.textContent = content.businessName;
  el.heroKicker.textContent = content.hero.kicker;
  el.heroTitle.textContent = content.hero.title;
  el.heroLead.textContent = content.hero.lead;
  el.heroSection.style.background = `linear-gradient(to bottom, rgba(11, 10, 8, 0.3), rgba(9, 9, 9, 0.82)), url('${content.hero.image}') center/cover no-repeat`;
  el.aboutTitle.textContent = content.about.title;
  el.aboutText.textContent = content.about.text;
  el.hoursText.textContent = content.about.hours;
  el.addressText.textContent = content.about.address;
  el.menuTitle.textContent = content.menuTitle;
  el.contactTitle.textContent = content.contact.title;
  el.contactText.textContent = content.contact.text;
  el.mapsLink.href = links.mapsUrl;
  el.addressLink.href = links.mapsUrl;
  el.allReviewsLink.href = GOOGLE_REVIEWS_URL;
  el.phoneLink.textContent = links.phone;
  el.phoneLink.href = `tel:${links.phone.replace(/\s+/g, "")}`;
  el.instagramLink.href = links.instagram || "#";
  el.youtubeLink.href = links.youtube || "#";
  el.tiktokLink.href = links.tiktok || "#";
  el.mapEmbed.src = links.mapEmbed;
  el.year.textContent = new Date().getFullYear();
}

function getBadge(item) {
  const text = `${item.name.sq} ${item.name.en} ${item.section.sq} ${item.section.en}`.toLowerCase();
  if (text.includes("analcolik") || text.includes("non-alcoholic")) return { label: tr("badgeNa"), className: "strength-na" };
  if (text.includes("strong") || text.includes("e forte")) return { label: tr("badgeStrong"), className: "strength-strong" };
  if (text.includes("light") || text.includes("medium") || text.includes("e lehte")) return { label: tr("badgeLight"), className: "strength-light" };
  return null;
}

function renderMenuGrid() {
  const items = siteData.menu.filter((item) => menuFilter === "all" || item.type === menuFilter);
  if (!items.length) {
    el.menuGrid.innerHTML = `<article class="menu-section"><h3>${escapeHtml(tr("menuEmptyTitle"))}</h3><p class="menu-empty">${escapeHtml(tr("menuEmptyText"))}</p></article>`;
    return;
  }
  const groups = new Map();
  items.forEach((item) => {
    const section = item.section[currentLanguage] || item.section.sq;
    if (!groups.has(section)) groups.set(section, []);
    groups.get(section).push(item);
  });
  const legend = `<div class="menu-legend"><span class="strength-pill strength-na">${escapeHtml(tr("legendNa"))}</span><span class="strength-pill strength-light">${escapeHtml(tr("legendLight"))}</span><span class="strength-pill strength-strong">${escapeHtml(tr("legendStrong"))}</span></div>`;
  const html = [...groups.entries()].map(([section, group]) => {
    const rows = group.map((item) => {
      const badge = getBadge(item);
      return `<li class="menu-row"><div class="menu-row-main"><span class="menu-row-title">${escapeHtml(item.name[currentLanguage] || item.name.sq)}</span>${badge ? `<span class="strength-pill ${badge.className}">${escapeHtml(badge.label)}</span>` : ""}</div><span class="menu-row-price">${escapeHtml(item.price)}</span></li>`;
    }).join("");
    return `<article class="menu-section"><h3>${escapeHtml(section)}</h3><ul class="menu-list">${rows}</ul></article>`;
  }).join("");
  el.menuGrid.innerHTML = legend + html;
}

function renderGallery() {
  el.galleryGrid.innerHTML = siteData.gallery.map((src) => `<img src="${escapeAttr(src)}" alt="${escapeAttr(tr("galleryAlt"))}" />`).join("");
}

function renderReviews() {
  el.reviewsGrid.innerHTML = siteData.reviews.map((review) => {
    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const initials = review.author.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "G";
    return `<article class="review-card"><div class="review-head"><div class="review-avatar">${escapeHtml(initials)}</div><div class="review-meta"><h3>${escapeHtml(review.author)}</h3><p>${escapeHtml(review.date)}</p></div></div><div class="review-stars">${stars}</div><p class="review-text">"${escapeHtml(review.text[currentLanguage] || review.text.sq)}"</p></article>`;
  }).join("");
}

function renderMenuEditor() {
  const admin = hasRole("admin");
  el.menuEditor.innerHTML = siteData.menu.map((item, idx) => `<div class="menu-edit-row" data-index="${idx}"><input data-field="name" value="${escapeAttr(item.name[currentLanguage] || "")}" /><input data-field="section" value="${escapeAttr(item.section[currentLanguage] || "")}" /><input data-field="price" value="${escapeAttr(item.price)}" /><select data-field="type" ${admin ? "" : "disabled"}><option value="food" ${item.type === "food" ? "selected" : ""}>food</option><option value="drink" ${item.type === "drink" ? "selected" : ""}>drink</option></select><button class="btn btn-ghost btn-small delete-menu-item" data-id="${escapeAttr(item.id)}" ${admin ? "" : "hidden"}>X</button></div>`).join("");
  document.querySelectorAll(".delete-menu-item").forEach((button) => button.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.menu = siteData.menu.filter((item) => item.id !== button.dataset.id);
    persistSite();
    renderAll();
  }));
}

function renderGalleryEditor() {
  if (!hasRole("admin")) return;
  el.galleryEditor.innerHTML = siteData.gallery.map((url, idx) => `<div class="simple-edit-row" data-index="${idx}"><input data-field="url" value="${escapeAttr(url)}" /><button class="btn btn-ghost btn-small delete-gallery-item" data-index="${idx}">X</button></div>`).join("");
  document.querySelectorAll(".delete-gallery-item").forEach((button) => button.addEventListener("click", () => {
    siteData.gallery.splice(Number(button.dataset.index), 1);
    persistSite();
    renderAll();
  }));
}

function renderReviewsEditor() {
  if (!hasRole("admin")) return;
  el.reviewsEditor.innerHTML = siteData.reviews.map((review, idx) => `<div class="review-edit-row" data-index="${idx}"><input data-field="author" value="${escapeAttr(review.author)}" /><input data-field="rating" type="number" min="1" max="5" value="${escapeAttr(review.rating)}" /><input data-field="date" value="${escapeAttr(review.date)}" /><textarea data-field="text" rows="2">${escapeHtml(review.text[currentLanguage] || "")}</textarea><button class="btn btn-ghost btn-small delete-review-item" data-index="${idx}">X</button></div>`).join("");
  document.querySelectorAll(".delete-review-item").forEach((button) => button.addEventListener("click", () => {
    siteData.reviews.splice(Number(button.dataset.index), 1);
    persistSite();
    renderAll();
  }));
}

function renderUsers() {
  if (!hasRole("admin")) return;
  el.usersList.innerHTML = users.map((user) => `<div class="user-row"><span>${escapeHtml(user.username)} (${escapeHtml(user.role)})</span><button class="btn btn-ghost btn-small delete-user" data-username="${escapeAttr(user.username)}" ${user.username === "admin" ? "disabled" : ""}>X</button></div>`).join("");
  document.querySelectorAll(".delete-user").forEach((button) => button.addEventListener("click", () => {
    users = users.filter((user) => user.username !== button.dataset.username);
    save(STORAGE_KEYS.users, users);
    renderUsers();
  }));
  el.passwordTargetUser.innerHTML = users.map((user) => `<option value="${escapeAttr(user.username)}">${escapeHtml(user.username)} (${escapeHtml(user.role)})</option>`).join("");
}

function renderAdminEditors() {
  if (!hasRole("admin")) return;
  const content = siteData.content[currentLanguage];
  el.editBusinessName.value = content.businessName;
  el.editHeroKicker.value = content.hero.kicker;
  el.editHeroTitle.value = content.hero.title;
  el.editHeroLead.value = content.hero.lead;
  el.editAboutTitle.value = content.about.title;
  el.editAboutText.value = content.about.text;
  el.editMenuTitle.value = content.menuTitle;
  el.editHours.value = content.about.hours;
  el.editAddress.value = content.about.address;
  el.editContactTitle.value = content.contact.title;
  el.editContactText.value = content.contact.text;
  el.editPhone.value = siteData.links.phone;
  el.editMapsUrl.value = siteData.links.mapsUrl;
  el.editMapEmbed.value = siteData.links.mapEmbed;
  el.editHeroImage.value = content.hero.image;
  renderGalleryEditor();
  renderReviewsEditor();
  renderUsers();
  el.jsonEditor.value = JSON.stringify(siteData, null, 2);
}

function applySessionUI() {
  const logged = !!session;
  const admin = hasRole("admin");
  el.loginBtn.hidden = logged;
  el.logoutBtn.hidden = !logged;
  el.manageBtn.hidden = !logged;
  el.generalEditorBlock.hidden = !admin;
  el.galleryEditorBlock.hidden = !admin;
  el.reviewsEditorBlock.hidden = !admin;
  el.usersBlock.hidden = !admin;
  el.passwordBlock.hidden = !admin;
  el.jsonEditorBlock.hidden = !admin;
  el.addMenuItemBtn.hidden = !admin;
  el.sessionInfo.textContent = logged ? (currentLanguage === "sq" ? `I loguar si ${session.username} (${session.role}).` : `Logged in as ${session.username} (${session.role}).`) : tr("sessionLoggedOut");
}

function renderAll() {
  renderChrome();
  renderSite();
  renderMenuGrid();
  renderGallery();
  renderReviews();
  renderMenuEditor();
  applySessionUI();
  if (hasRole("admin")) renderAdminEditors();
}

function collectMenuEditor() {
  siteData.menu = [...el.menuEditor.querySelectorAll(".menu-edit-row")].map((row, idx) => {
    const item = siteData.menu[idx];
    return {
      ...item,
      name: { ...item.name, [currentLanguage]: row.querySelector("[data-field='name']").value.trim() || item.name[currentLanguage] },
      section: { ...item.section, [currentLanguage]: row.querySelector("[data-field='section']").value.trim() || item.section[currentLanguage] },
      price: row.querySelector("[data-field='price']").value.trim() || item.price,
      type: hasRole("admin") ? row.querySelector("[data-field='type']").value : item.type
    };
  });
}

function collectGalleryEditor() {
  siteData.gallery = [...el.galleryEditor.querySelectorAll(".simple-edit-row")].map((row) => row.querySelector("[data-field='url']").value.trim()).filter(Boolean);
}

function collectReviewsEditor() {
  siteData.reviews = [...el.reviewsEditor.querySelectorAll(".review-edit-row")].map((row, idx) => {
    const review = siteData.reviews[idx];
    return {
      author: row.querySelector("[data-field='author']").value.trim() || review.author,
      rating: clampRating(row.querySelector("[data-field='rating']").value),
      date: row.querySelector("[data-field='date']").value.trim() || review.date,
      text: { ...review.text, [currentLanguage]: row.querySelector("[data-field='text']").value.trim() || review.text[currentLanguage] }
    };
  }).filter((review) => review.text.sq || review.text.en);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("File read failed"));
    reader.readAsDataURL(file);
  });
}

function bindEvents() {
  window.addEventListener("scroll", () => el.header.classList.toggle("scrolled", window.scrollY > 20));
  el.menuToggle.addEventListener("click", () => el.navLinks.classList.toggle("open"));
  el.navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => el.navLinks.classList.remove("open")));
  el.langSqBtn.addEventListener("click", () => setLanguage("sq"));
  el.langEnBtn.addEventListener("click", () => setLanguage("en"));
  el.filterButtons.forEach((button) => button.addEventListener("click", () => {
    el.filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    menuFilter = button.dataset.filter;
    renderMenuGrid();
  }));
  if (typeof IntersectionObserver !== "undefined") {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.15 });
    el.revealElements.forEach((node) => observer.observe(node));
  }
  el.loginBtn.addEventListener("click", () => {
    el.loginError.textContent = "";
    el.loginModal.hidden = false;
  });
  el.cancelLoginBtn.addEventListener("click", () => { el.loginModal.hidden = true; });
  el.submitLoginBtn.addEventListener("click", () => {
    const user = users.find((entry) => entry.username === el.loginUsername.value.trim() && entry.password === el.loginPassword.value.trim());
    if (!user) {
      el.loginError.textContent = tr("invalidCredentials");
      return;
    }
    session = { username: user.username, role: user.role };
    save(STORAGE_KEYS.session, session);
    el.loginUsername.value = "";
    el.loginPassword.value = "";
    el.loginModal.hidden = true;
    renderAll();
  });
  el.logoutBtn.addEventListener("click", () => {
    session = null;
    localStorage.removeItem(STORAGE_KEYS.session);
    el.controlPanel.hidden = true;
    renderAll();
  });
  el.manageBtn.addEventListener("click", () => { el.controlPanel.hidden = !el.controlPanel.hidden; });
  el.panelClose.addEventListener("click", () => { el.controlPanel.hidden = true; });
  el.saveMenuBtn.addEventListener("click", () => {
    if (!session) return;
    collectMenuEditor();
    persistSite();
    renderAll();
    alert(tr("menuSaved"));
  });
  el.addMenuItemBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.menu.push({ id: `m${Date.now()}`, type: "food", name: { sq: "Artikull i ri", en: "New item" }, section: { sq: "Te tjera", en: "Other" }, price: "0 ALL" });
    persistSite();
    renderAll();
  });
  el.saveGeneralBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.content[currentLanguage] = normalizeContent({
      businessName: el.editBusinessName.value.trim(),
      metaDescription: siteData.content[currentLanguage].metaDescription,
      hero: { kicker: el.editHeroKicker.value.trim(), title: el.editHeroTitle.value.trim(), lead: el.editHeroLead.value.trim(), image: el.editHeroImage.value.trim() },
      about: { title: el.editAboutTitle.value.trim(), text: el.editAboutText.value.trim(), hours: el.editHours.value.trim(), address: el.editAddress.value.trim() },
      menuTitle: el.editMenuTitle.value.trim(),
      contact: { title: el.editContactTitle.value.trim(), text: el.editContactText.value.trim() }
    }, DEFAULT_CONTENT[currentLanguage]);
    siteData.links.phone = el.editPhone.value.trim() || siteData.links.phone;
    siteData.links.mapsUrl = el.editMapsUrl.value.trim() || siteData.links.mapsUrl;
    siteData.links.mapEmbed = el.editMapEmbed.value.trim() || siteData.links.mapEmbed;
    persistSite();
    renderAll();
    alert(tr("generalSaved"));
  });
  el.saveGalleryBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    collectGalleryEditor();
    persistSite();
    renderAll();
    alert(tr("gallerySaved"));
  });
  el.addGalleryBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.gallery.push("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80");
    persistSite();
    renderAll();
  });
  el.importGalleryUrlsBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const urls = (el.galleryUrlsBulk.value || "").split(/\r?\n/).map((line) => line.trim()).filter((line) => line.startsWith("http://") || line.startsWith("https://"));
    if (!urls.length) {
      alert(tr("validUrls"));
      return;
    }
    siteData.gallery = [...new Set([...siteData.gallery, ...urls])];
    el.galleryUrlsBulk.value = "";
    persistSite();
    renderAll();
  });
  el.galleryFileInput.addEventListener("change", async () => {
    if (!hasRole("admin")) return;
    const files = [...(el.galleryFileInput.files || [])];
    if (!files.length) return;
    siteData.gallery.push(...await Promise.all(files.map(fileToDataUrl)));
    el.galleryFileInput.value = "";
    persistSite();
    renderAll();
  });
  el.saveReviewsBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    collectReviewsEditor();
    persistSite();
    renderAll();
    alert(tr("reviewsSaved"));
  });
  el.addReviewBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.reviews.push({ author: currentLanguage === "sq" ? "Klient i ri" : "New guest", rating: 5, date: "Google Maps", text: { sq: "Review i ri.", en: "New review." } });
    persistSite();
    renderAll();
  });
  el.applyJsonBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    try {
      siteData = normalizeSiteData(JSON.parse(el.jsonEditor.value));
      persistSite();
      renderAll();
      alert(tr("jsonSaved"));
    } catch {
      alert(tr("jsonInvalid"));
    }
  });
  el.refreshJsonBtn.addEventListener("click", () => { if (hasRole("admin")) el.jsonEditor.value = JSON.stringify(siteData, null, 2); });
  el.downloadJsonBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const blob = new Blob([JSON.stringify(siteData, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "hendon-site-data.json";
    link.click();
    URL.revokeObjectURL(link.href);
  });
  el.addUserBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const username = el.newUsername.value.trim();
    const password = el.newPassword.value.trim();
    if (!username || !password) {
      alert(tr("fillUsernamePassword"));
      return;
    }
    if (users.some((user) => user.username === username)) {
      alert(tr("usernameExists"));
      return;
    }
    users.push({ username, password, role: el.newRole.value });
    save(STORAGE_KEYS.users, users);
    el.newUsername.value = "";
    el.newPassword.value = "";
    renderUsers();
  });
  el.changeSelfPasswordBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const newPassword = el.selfNewPassword.value.trim();
    if (!newPassword) {
      alert(tr("newPasswordRequired"));
      return;
    }
    users = users.map((user) => user.username === session.username ? { ...user, password: newPassword } : user);
    save(STORAGE_KEYS.users, users);
    el.selfNewPassword.value = "";
    renderUsers();
    alert(tr("selfPasswordChanged"));
  });
  el.changeUserPasswordBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const target = el.passwordTargetUser.value;
    const newPassword = el.targetNewPassword.value.trim();
    if (!target || !newPassword) {
      alert(tr("chooseUserAndPassword"));
      return;
    }
    users = users.map((user) => user.username === target ? { ...user, password: newPassword } : user);
    save(STORAGE_KEYS.users, users);
    el.targetNewPassword.value = "";
    renderUsers();
  });
}

persistSite();
renderAll();
bindEvents();
