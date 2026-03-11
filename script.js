const STORAGE_KEYS = {
  data: "hendon_site_data",
  users: "hendon_users",
  session: "hendon_session",
  migration_20260309_hours_phone: "hendon_migration_20260309_hours_phone",
  migration_20260309_full_menu: "hendon_migration_20260309_full_menu",
  migration_20260309_gallery_custom: "hendon_migration_20260309_gallery_custom",
  migration_20260309_maps_fix: "hendon_migration_20260309_maps_fix"
};
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/The+Hendon+Pub/@41.3225198,19.7957727,17z/data=!4m8!3m7!1s0x1350310040968bf3:0x3a48075119e30851!8m2!3d41.3223019!4d19.7954807!9m1!1b1!16s%2Fg%2F11xmqhv6hp!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D";
const CUSTOM_GALLERY_IMAGES = [
  "assets/gallery/hendon-1.jpg",
  "assets/gallery/hendon-2.jpg",
  "assets/gallery/hendon-3.jpg",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepyUZiELVVQXSMkm5d2Tn6WwukRbW_-BY73xVW4hBDQQb4ChZjsEdD0PKNck5OFrD9D3Pe_YDZi6XQVq98991VKg6RDuKCoY5TDC7biI0ZzppLa6DFxSrAo2jPQa253r8fMh-9YML5_wIhJ=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-3giaC14HStnt1fvo9ZezAz94adyqVy-cszqnRqk60WzSKz0cy78d-d5jP9i2tSAGf47evyaLekhpcxF8FdsIB-MmhpQ-7g56hhFdo4T7EaAmJg3d93N9hm7cLCffIJrfuwuzigliS582=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqJMw12MV9aWmJ2VW3daS4eGRo9gVL18c75n25mpBiSb2TuaSmQKFetrYrW106lpTRBcIW8zQtcJ4RWh5V1RVMXYgIZStQwu_k-A_5Fi8aWiuXTd_4pHa5vopZ9Vlq95qYFWWrK1rbFHU4_=w203-h360-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerS_LTIP0pXi3czG8BA8EYcbGrg5L9YXY2GgkJ4RkHW1WwXLlr7AWBgpnNaEQDgZNY5Ng8RUiPw1hh6N45oxIe-Boo3oEPpNRS97RyxaOhLxF7ps4lFpbZn0DYcmfC3wJ2e1gMfxcr-psQ=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerJ2urK20HjBQF-sfEziJzyp5fILkGEWRYjHRm1kNo30i1AI-YCAF2tBeVaPlurMMg8bqJ8s38JRxNqHXjvkzdbOGJzKqfd8dnDOmjL3Exw5608A42VciZbLYzsvjVO7LxPbuqpnJg2PHk=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqMZV5zhcjPtPeivIiy9-4w12Rj7N4BwylMtTtiz51x8Hlyvfq6HoDue0Mw4HrejBiPseleX8GOjrrHN6g2pB2pgSZ8QKeV5V5R19eUbOHSR6PIbK7uQVfraan1rfHqsAjJX3juvG0XkBT0=w203-h270-k-no"
];

const DEFAULT_DATA = {
  businessName: "The Hendon Pub",
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
  contact: {
    title: "Rezervo Tavolinen Tende",
    text: "Per rezervime ose pyetje, na kontakto cdo dite.",
    phone: "+355698757893",
    mapsUrl: "https://www.google.com/maps/place/The+Hendon+Pub/@41.3225198,19.7957727,17z/data=!4m6!3m5!1s0x1350310040968bf3:0x3a48075119e30851!8m2!3d41.3223019!4d19.7954807!16s%2Fg%2F11xmqhv6hp!17m2!4m1!1e3!18m1!1e1?entry=ttu",
    mapEmbed: "https://maps.google.com/maps?q=41.3223019,19.7954807&z=17&output=embed",
    instagram: "https://www.instagram.com/hendonpub?igsh=bmF3d2xnOW52MnNr",
    youtube: "https://www.youtube.com/@HendonPub",
    tiktok: "https://www.tiktok.com/@the.hendon.pub"
  },
  menuTitle: (typeof window !== "undefined" && window.HENDON_MENU_TITLE) ? window.HENDON_MENU_TITLE : "Hendon Pub - MENU",
  menu: (typeof window !== "undefined" && Array.isArray(window.HENDON_MENU) && window.HENDON_MENU.length > 0) ? window.HENDON_MENU : buildHendonMenu(),
  gallery: CUSTOM_GALLERY_IMAGES,
  reviews: [
    {
      author: "Klient Google",
      rating: 5,
      date: "Google Maps",
      text: "Ambienti super dhe ushqimi shume i mire. Do rikthehem patjeter."
    },
    {
      author: "Klient Google",
      rating: 5,
      date: "Google Maps",
      text: "Sherbim korrekt, cmime te mira dhe atmosfere e ngrohte."
    },
    {
      author: "Klient Google",
      rating: 5,
      date: "Google Maps",
      text: "Vendi ideal per darke me shoqeri dhe kokteje fantastike."
    }
  ]
};

function buildHendonMenu() {
  const items = [];
  const add = (type, section, name, price) => {
    items.push({
      id: `m${items.length + 1}`,
      type,
      name,
      description: section,
      price
    });
  };

  add("drink", "COFFEE", "Kafe", "120 ALL");
  add("drink", "COFFEE", "Kafe e ftohte", "150 ALL");
  add("drink", "COFFEE", "Makiato", "130 ALL");
  add("drink", "COFFEE", "Makiato e ftohte", "150 ALL");
  add("drink", "COFFEE", "Cappuccino", "180 ALL");
  add("drink", "COFFEE", "Cappuccino (bustine)", "180 ALL");
  add("drink", "COFFEE", "Cappuccino e ftohte", "250 ALL");
  add("drink", "COFFEE", "Cokollate e ngrohte", "200 ALL");
  add("drink", "COFFEE", "Cokollate e ftohte", "250 ALL");
  add("drink", "COFFEE", "Kakao e ngrohte", "200 ALL");
  add("drink", "COFFEE", "Kakao e ftohte", "250 ALL");
  add("drink", "COFFEE", "Salep", "150 ALL");
  add("drink", "COFFEE", "Caj (bustine)", "120 ALL");
  add("drink", "COFFEE", "Caj bio", "250 ALL");
  add("drink", "COFFEE", "Frape", "250 ALL");

  add("drink", "FRESH DRINKS", "Uje Lajthiza", "100 ALL");
  add("drink", "FRESH DRINKS", "Uje pa gaz (M250)", "150 ALL");
  add("drink", "FRESH DRINKS", "Uje me gaz (M250)", "150 ALL");
  add("drink", "FRESH DRINKS", "Coca Cola", "200 ALL");
  add("drink", "FRESH DRINKS", "Lemon Soda", "200 ALL");
  add("drink", "FRESH DRINKS", "Oran Soda", "200 ALL");
  add("drink", "FRESH DRINKS", "Ice Tea pjeshke", "200 ALL");
  add("drink", "FRESH DRINKS", "Ice Tea limon", "200 ALL");
  add("drink", "FRESH DRINKS", "Red Bull", "400 ALL");
  add("drink", "FRESH DRINKS", "Rose Lemonade", "400 ALL");
  add("drink", "FRESH DRINKS", "Britvic", "200 ALL");
  add("drink", "FRESH DRINKS", "Tonic Fentimans", "400 ALL");
  add("drink", "FRESH DRINKS", "Grodino", "200 ALL");
  add("drink", "FRESH DRINKS", "Bitter", "180 ALL");

  add("drink", "APERITIV", "Aperol Spritz", "500 ALL");
  add("drink", "APERITIV", "Campari Spritz", "500 ALL");
  add("drink", "APERITIV", "Hugo", "500 ALL");

  add("drink", "COCKTAILS", "Vesper", "700 ALL");
  add("drink", "COCKTAILS", "London Mule", "700 ALL");
  add("drink", "COCKTAILS", "Negroni", "700 ALL");
  add("drink", "COCKTAILS", "Gimlet", "700 ALL");
  add("drink", "COCKTAILS", "Espresso Martini", "700 ALL");
  add("drink", "COCKTAILS", "Bramble", "700 ALL");
  add("drink", "COCKTAILS", "Churchill", "700 ALL");
  add("drink", "COCKTAILS", "House Cocktail", "800 ALL");
  add("drink", "COCKTAILS", "Analcolik", "600 ALL");
  add("drink", "COCKTAILS", "Bartender Recipe", "800 / 900 / 1000 ALL");

  add("food", "MENGJESI", "Classic Benedict", "500 ALL");
  add("food", "MENGJESI", "Omlete normale", "250 ALL");
  add("food", "MENGJESI", "Egg Poached", "300 ALL");
  add("food", "MENGJESI", "Sunny Side Up", "250 ALL");
  add("food", "MENGJESI", "Ham & Cheese Sandwich", "150 ALL");
  add("food", "MENGJESI", "Ham, Egg & Cheese Sandwich", "170 ALL");
  add("food", "MENGJESI", "Hash Browns", "150 ALL");
  add("food", "MENGJESI", "French Toast", "300 ALL");
  add("food", "MENGJESI", "Petulla", "200 ALL");

  add("food", "MASDITE / SNACKS", "Mini Burger", "450 ALL");
  add("food", "MASDITE / SNACKS", "Chicken Wings", "700 ALL");
  add("food", "MASDITE / SNACKS", "Chicken Fingers", "650 ALL");
  add("food", "MASDITE / SNACKS", "Onion Rings", "350 ALL");
  add("food", "MASDITE / SNACKS", "Kroketa", "350 ALL");
  add("food", "MASDITE / SNACKS", "Patate fritel", "300 ALL");

  add("food", "SPECIALS / TO EAT", "Antipast e ngrohte", "1200 - 2200 ALL");
  add("food", "SPECIALS / TO EAT", "Bruskete ancuge", "600 ALL");
  add("food", "SPECIALS / TO EAT", "Bruskete klasike", "400 ALL");
  add("food", "SPECIALS / TO EAT", "Bruskete mix", "600 ALL");
  add("food", "SPECIALS / TO EAT", "Tacos Beef", "750 ALL");
  add("food", "SPECIALS / TO EAT", "Tacos Chicken", "500 ALL");
  add("food", "SPECIALS / TO EAT", "Salcice artizanale", "800 ALL");
  add("food", "SPECIALS / TO EAT", "Patate Amerikane me krem tartufi", "450 ALL");
  add("food", "SPECIALS / TO EAT", "Fish & Chips", "850 ALL");
  add("food", "SPECIALS / TO EAT", "Schnitzel pule ose vici", "800 ALL");
  add("food", "SPECIALS / TO EAT", "French Fries", "350 ALL");

  add("drink", "LEGJENDA E FORCES", "Light", "~8-12%");
  add("drink", "LEGJENDA E FORCES", "Medium", "~12-18%");
  add("drink", "LEGJENDA E FORCES", "Strong", "~18-25%");
  add("drink", "LEGJENDA E FORCES", "Very strong", "25%+");

  const ask = "Pyet kamarierin";
  add("drink", "COCKTAILS TE SUGJERUARA", "Aperol Spritz - Aperol/Prosecco/Soda (Light)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Campari Spritz - Campari/Prosecco/Soda (Light)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Hugo - Prosecco/Elderflower/Mint (Light)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Americano - Campari/Sweet Vermouth/Soda (Light)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Garibaldi - Campari/Portokall (Light)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Kir Royale - Creme de Cassis/Prosecco (Light)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Bellini - Prosecco/Pjeshke (Light)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Negroni - Gin/Campari/Sweet Vermouth (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Gimlet - Gin/Lime/Syrup (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Bramble - Gin/Lemon/Blackberry (Medium-Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Tom Collins - Gin/Lemon/Soda (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "French 75 - Gin/Lemon/Prosecco (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Clover Club - Gin/Raspberry/Lemon (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Bee's Knees - Gin/Honey/Lemon (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Aviation - Gin/Violet/Maraschino (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Southside - Gin/Mint/Lime (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Gin Basil Smash - Gin/Basil/Lemon (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Martinez - Gin/Sweet Vermouth (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Espresso Martini - Vodka/Espresso/Coffee liqueur (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Cosmopolitan - Vodka/Triple sec/Cranberry/Lime (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Moscow Mule - Vodka/Ginger beer/Lime (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Vodka Martini - Vodka/Dry Vermouth (Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Bloody Mary - Vodka/Tomato/Spices (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "White Russian - Vodka/Coffee liqueur/Cream (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Black Russian - Vodka/Coffee liqueur (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Lemon Drop Martini - Vodka/Lemon/Sugar (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Sex on the Beach - Vodka/Peach/Cranberry (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Pornstar Martini - Vanilla Vodka/Passionfruit (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Mojito - Rum/Mint/Lime/Soda (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Daiquiri - Rum/Lime/Syrup (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Cuba Libre - Rum/Cola/Lime (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Pina Colada - Rum/Coconut/Pineapple (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Mai Tai - Rum/Orange liqueur/Lime (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Dark 'n' Stormy - Dark Rum/Ginger beer (Medium-Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Hurricane - Rum/Fruit mix (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Planter's Punch - Rum/Citrus/Spices (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Zombie - Multi-rum/Tiki mix (Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Margarita - Tequila/Triple sec/Lime (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Tommy's Margarita - Tequila/Lime/Agave (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Paloma - Tequila/Grapefruit soda (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Tequila Sunrise - Tequila/Orange/Grenadine (Medium)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Spicy Margarita - Tequila/Lime/Chili (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Mezcal Margarita - Mezcal/Lime/Triple sec (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Oaxaca Old Fashioned - Mezcal + Whiskey/Bitters (Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Mezcal Negroni - Mezcal/Campari/Vermouth (Strong-Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Old Fashioned - Bourbon/Bitters/Sugar (Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Whiskey Sour - Whiskey/Lemon/Syrup (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Manhattan - Whiskey/Sweet Vermouth (Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Boulevardier - Whiskey/Campari/Vermouth (Strong-Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Mint Julep - Bourbon/Mint (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Penicillin - Whiskey/Honey/Ginger (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Godfather - Whiskey/Amaretto (Strong-Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Rusty Nail - Whiskey/Drambuie (Strong-Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Irish Coffee - Whiskey/Coffee/Cream (Medium-Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Sidecar - Cognac/Triple sec/Lemon (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Brandy Alexander - Brandy/Cacao/Cream (Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "French Connection - Cognac/Amaretto (Strong-Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Between the Sheets - Rum/Cognac/Triple sec (Strong-Very strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "House Cocktail - Signature (Medium-Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Churchill - Signature (Medium-Strong)", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Bartender's Choice - sipas kerkeses", ask);
  add("drink", "COCKTAILS TE SUGJERUARA", "Smoked Negroni - opsionale (Strong-Very strong)", ask);

  add("drink", "SHOTS & SHOOTERS", "Vodka Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Tequila Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Whiskey Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Rum Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Gin Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Sambuca", ask);
  add("drink", "SHOTS & SHOOTERS", "Jagermeister", ask);
  add("drink", "SHOTS & SHOOTERS", "Fireball", ask);
  add("drink", "SHOTS & SHOOTERS", "Absinthe", ask);
  add("drink", "SHOTS & SHOOTERS", "Kamikaze", ask);
  add("drink", "SHOTS & SHOOTERS", "Lemon Drop Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Green Tea Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Mexican Candy Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Mini Margarita Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Mini Daiquiri Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "B-52", ask);
  add("drink", "SHOTS & SHOOTERS", "Baby Guinness", ask);
  add("drink", "SHOTS & SHOOTERS", "Nutty Irishman Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Chocolate Cake Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Espresso Shot (liqueur)", ask);
  add("drink", "SHOTS & SHOOTERS", "Jagerbomb", ask);
  add("drink", "SHOTS & SHOOTERS", "Skittle Bomb", ask);
  add("drink", "SHOTS & SHOOTERS", "Tequila Boom", ask);
  add("drink", "SHOTS & SHOOTERS", "Sambuca Bomb", ask);
  add("drink", "SHOTS & SHOOTERS", "Peach Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Strawberry Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Coffee Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Cinnamon Shot", ask);
  add("drink", "SHOTS & SHOOTERS", "Honey Shot", ask);

  return items;
}
const DEFAULT_USERS = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" }
];

let siteData = normalizeSiteData(load(STORAGE_KEYS.data, DEFAULT_DATA));
let users = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS));
let session = load(STORAGE_KEYS.session, null);
let menuFilter = "all";

applyRequestedHoursAndPhoneMigration();
applyFullMenuMigration();
applyGalleryCustomMigration();
applyMapsFixMigration();

if (!Array.isArray(siteData.menu) || siteData.menu.length === 0) {
  siteData.menuTitle = (typeof window !== "undefined" && window.HENDON_MENU_TITLE) ? window.HENDON_MENU_TITLE : "Hendon Pub - MENU";
  siteData.menu = (typeof window !== "undefined" && Array.isArray(window.HENDON_MENU) && window.HENDON_MENU.length > 0)
    ? window.HENDON_MENU
    : buildHendonMenu();
  save(STORAGE_KEYS.data, siteData);
}

const el = {
  header: document.querySelector(".site-header"),
  brandName: document.getElementById("brandName"),
  footerName: document.getElementById("footerName"),
  heroSection: document.getElementById("heroSection"),
  heroKicker: document.getElementById("heroKicker"),
  heroTitle: document.getElementById("heroTitle"),
  heroLead: document.getElementById("heroLead"),
  mapsLink: document.getElementById("mapsLink"),
  aboutTitle: document.getElementById("aboutTitle"),
  aboutText: document.getElementById("aboutText"),
  hoursText: document.getElementById("hoursText"),
  addressText: document.getElementById("addressText"),
  addressLink: document.getElementById("addressLink"),
  menuTitle: document.getElementById("menuTitle"),
  menuGrid: document.getElementById("menuGrid"),
  galleryGrid: document.getElementById("galleryGrid"),
  reviewsGrid: document.getElementById("reviewsGrid"),
  allReviewsLink: document.getElementById("allReviewsLink"),
  contactTitle: document.getElementById("contactTitle"),
  contactText: document.getElementById("contactText"),
  phoneLink: document.getElementById("phoneLink"),
  instagramLink: document.getElementById("instagramLink"),
  youtubeLink: document.getElementById("youtubeLink"),
  tiktokLink: document.getElementById("tiktokLink"),
  mapEmbed: document.getElementById("mapEmbed"),
  year: document.getElementById("year"),
  sessionInfo: document.getElementById("sessionInfo"),
  loginBtn: document.getElementById("loginBtn"),
  logoutBtn: document.getElementById("logoutBtn"),
  manageBtn: document.getElementById("manageBtn"),
  controlPanel: document.getElementById("controlPanel"),
  panelClose: document.getElementById("panelClose"),
  menuEditor: document.getElementById("menuEditor"),
  saveMenuBtn: document.getElementById("saveMenuBtn"),
  addMenuItemBtn: document.getElementById("addMenuItemBtn"),
  generalEditorBlock: document.getElementById("generalEditorBlock"),
  usersBlock: document.getElementById("usersBlock"),
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
  reviewsEditorBlock: document.getElementById("reviewsEditorBlock"),
  galleryEditor: document.getElementById("galleryEditor"),
  reviewsEditor: document.getElementById("reviewsEditor"),
  saveGalleryBtn: document.getElementById("saveGalleryBtn"),
  addGalleryBtn: document.getElementById("addGalleryBtn"),
  galleryUrlsBulk: document.getElementById("galleryUrlsBulk"),
  importGalleryUrlsBtn: document.getElementById("importGalleryUrlsBtn"),
  galleryFileInput: document.getElementById("galleryFileInput"),
  saveReviewsBtn: document.getElementById("saveReviewsBtn"),
  addReviewBtn: document.getElementById("addReviewBtn"),
  usersList: document.getElementById("usersList"),
  passwordBlock: document.getElementById("passwordBlock"),
  newUsername: document.getElementById("newUsername"),
  newPassword: document.getElementById("newPassword"),
  newRole: document.getElementById("newRole"),
  addUserBtn: document.getElementById("addUserBtn"),
  selfNewPassword: document.getElementById("selfNewPassword"),
  changeSelfPasswordBtn: document.getElementById("changeSelfPasswordBtn"),
  passwordTargetUser: document.getElementById("passwordTargetUser"),
  targetNewPassword: document.getElementById("targetNewPassword"),
  changeUserPasswordBtn: document.getElementById("changeUserPasswordBtn"),
  loginModal: document.getElementById("loginModal"),
  loginUsername: document.getElementById("loginUsername"),
  loginPassword: document.getElementById("loginPassword"),
  submitLoginBtn: document.getElementById("submitLoginBtn"),
  cancelLoginBtn: document.getElementById("cancelLoginBtn"),
  loginError: document.getElementById("loginError"),
  filterButtons: [...document.querySelectorAll(".filter-btn")],
  menuToggle: document.querySelector(".menu-toggle"),
  navLinks: document.querySelector(".nav-links"),
  revealElements: [...document.querySelectorAll(".reveal")]
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

function normalizeSiteData(raw) {
  const data = raw && typeof raw === "object" ? raw : {};
  return {
    ...DEFAULT_DATA,
    ...data,
    hero: { ...DEFAULT_DATA.hero, ...(data.hero || {}) },
    about: { ...DEFAULT_DATA.about, ...(data.about || {}) },
    contact: { ...DEFAULT_DATA.contact, ...(data.contact || {}) },
    menu: (Array.isArray(data.menu) && data.menu.length > 0) ? data.menu : DEFAULT_DATA.menu,
    gallery: Array.isArray(data.gallery) ? data.gallery : DEFAULT_DATA.gallery,
    reviews: normalizeReviews(Array.isArray(data.reviews) ? data.reviews : DEFAULT_DATA.reviews)
  };
}

function normalizeUsers(raw) {
  if (!Array.isArray(raw) || raw.length === 0) return DEFAULT_USERS;
  return raw.filter((u) => u && u.username && u.password && u.role);
}

function normalizeReviews(reviews) {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return [...DEFAULT_DATA.reviews];
  }

  return reviews
    .map((review, idx) => {
      if (typeof review === "string") {
        return {
          author: "Klient Google",
          rating: 5,
          date: "Google Maps",
          text: review.trim()
        };
      }
      if (!review || typeof review !== "object") return null;
      return {
        author: String(review.author || `Klient ${idx + 1}`).trim(),
        rating: clampRating(review.rating),
        date: String(review.date || "Google Maps").trim(),
        text: String(review.text || "").trim()
      };
    })
    .filter((review) => review && review.text);
}

function clampRating(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 5;
  return Math.max(1, Math.min(5, Math.round(n)));
}

function applyRequestedHoursAndPhoneMigration() {
  if (localStorage.getItem(STORAGE_KEYS.migration_20260309_hours_phone)) return;
  siteData.about.hours = "E Hene - E Diele: 07:00 - 00:00";
  siteData.contact.phone = "+355698757893";
  save(STORAGE_KEYS.data, siteData);
  localStorage.setItem(STORAGE_KEYS.migration_20260309_hours_phone, "1");
}

function applyFullMenuMigration() {
  if (localStorage.getItem(STORAGE_KEYS.migration_20260309_full_menu)) return;
  siteData.menuTitle = "Hendon Pub - MENU";
  siteData.menu = (typeof window !== "undefined" && Array.isArray(window.HENDON_MENU) && window.HENDON_MENU.length > 0)
    ? window.HENDON_MENU
    : buildHendonMenu();
  save(STORAGE_KEYS.data, siteData);
  localStorage.setItem(STORAGE_KEYS.migration_20260309_full_menu, "1");
}

function applyGalleryCustomMigration() {
  const marker = localStorage.getItem(STORAGE_KEYS.migration_20260309_gallery_custom);
  const current = Array.isArray(siteData.gallery) ? siteData.gallery : [];
  const needsSync =
    !marker ||
    CUSTOM_GALLERY_IMAGES.some((img) => !current.includes(img)) ||
    current.length < CUSTOM_GALLERY_IMAGES.length;

  if (!needsSync) return;
  siteData.gallery = [...CUSTOM_GALLERY_IMAGES];
  save(STORAGE_KEYS.data, siteData);
  localStorage.setItem(STORAGE_KEYS.migration_20260309_gallery_custom, "1");
}

function applyMapsFixMigration() {
  if (localStorage.getItem(STORAGE_KEYS.migration_20260309_maps_fix)) return;
  siteData.contact.mapsUrl = "https://www.google.com/maps/place/The+Hendon+Pub/@41.3225198,19.7957727,17z/data=!4m6!3m5!1s0x1350310040968bf3:0x3a48075119e30851!8m2!3d41.3223019!4d19.7954807!16s%2Fg%2F11xmqhv6hp!17m2!4m1!1e3!18m1!1e1?entry=ttu";
  siteData.contact.mapEmbed = "https://maps.google.com/maps?q=41.3223019,19.7954807&z=17&output=embed";
  save(STORAGE_KEYS.data, siteData);
  localStorage.setItem(STORAGE_KEYS.migration_20260309_maps_fix, "1");
}

function renderSite() {
  document.title = `${siteData.businessName} | Pub & Grill`;
  el.brandName.textContent = siteData.businessName;
  el.footerName.textContent = siteData.businessName;

  el.heroKicker.textContent = siteData.hero.kicker;
  el.heroTitle.textContent = siteData.hero.title;
  el.heroLead.textContent = siteData.hero.lead;
  el.heroSection.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.78)), url('${siteData.hero.image}') center/cover no-repeat`;

  el.mapsLink.href = siteData.contact.mapsUrl;
  el.addressLink.href = siteData.contact.mapsUrl;
  if (el.allReviewsLink) {
    el.allReviewsLink.href = GOOGLE_REVIEWS_URL;
  }

  el.aboutTitle.textContent = siteData.about.title;
  el.aboutText.textContent = siteData.about.text;
  el.hoursText.textContent = siteData.about.hours;
  el.addressText.textContent = siteData.about.address;

  el.menuTitle.textContent = siteData.menuTitle;
  renderMenuGrid();
  renderGallery();
  renderReviews();

  el.contactTitle.textContent = siteData.contact.title;
  el.contactText.textContent = siteData.contact.text;
  el.phoneLink.textContent = siteData.contact.phone;
  el.phoneLink.href = `tel:${siteData.contact.phone.replace(/\s+/g, "")}`;
  if (el.instagramLink) el.instagramLink.href = siteData.contact.instagram || "#";
  if (el.youtubeLink) el.youtubeLink.href = siteData.contact.youtube || "#";
  if (el.tiktokLink) el.tiktokLink.href = siteData.contact.tiktok || "#";
  el.mapEmbed.src = siteData.contact.mapEmbed;

  el.year.textContent = new Date().getFullYear();
}

function renderMenuGrid() {
  if (!Array.isArray(siteData.menu) || siteData.menu.length === 0) {
    siteData.menu = (typeof window !== "undefined" && Array.isArray(window.HENDON_MENU) && window.HENDON_MENU.length > 0)
      ? window.HENDON_MENU
      : buildHendonMenu();
    siteData.menuTitle = (typeof window !== "undefined" && window.HENDON_MENU_TITLE) ? window.HENDON_MENU_TITLE : "Hendon Pub - MENU";
    save(STORAGE_KEYS.data, siteData);
  }

  const activeFilter = ["all", "food", "drink"].includes(menuFilter) ? menuFilter : "all";
  const items = siteData.menu.filter((item) => activeFilter === "all" || item.type === activeFilter);

  if (items.length === 0) {
    el.menuGrid.innerHTML = "<article class='menu-section'><h3>Menu bosh</h3><p class='menu-empty'>Nuk ka artikuj per kete filter.</p></article>";
    return;
  }

  const groups = new Map();
  items.forEach((item) => {
    const section = (item.description || "Te tjera").trim();
    if (!groups.has(section)) groups.set(section, []);
    groups.get(section).push(item);
  });

  const legendHtml = `
    <div class="menu-legend">
      <span class="strength-pill strength-na">Jeshile: Jo alkolike</span>
      <span class="strength-pill strength-light">E verdhe: Te lehta</span>
      <span class="strength-pill strength-strong">E kuqe: Te forta</span>
    </div>
  `;

  const sectionsHtml = [...groups.entries()]
    .map(([section, sectionItems]) => {
      const rows = sectionItems
        .map((item) => {
          const badge = getStrengthBadge(item);
          return `<li class="menu-row">
            <div class="menu-row-main">
              <span class="menu-row-title">${escapeHtml(item.name)}</span>
              ${badge ? `<span class="strength-pill ${badge.className}">${escapeHtml(badge.label)}</span>` : ""}
            </div>
            <span class="menu-row-price">${escapeHtml(item.price)}</span>
          </li>`;
        })
        .join("");

      return `<article class="menu-section">
        <h3>${escapeHtml(section)}</h3>
        <ul class="menu-list">${rows}</ul>
      </article>`;
    })
    .join("");

  el.menuGrid.innerHTML = `${legendHtml}${sectionsHtml}`;
}

function getStrengthBadge(item) {
  const text = `${item.name} ${item.description}`.toLowerCase();
  if (text.includes("analcolik") || text.includes("non alcoholic") || text.includes("jo alkol")) {
    return { label: "Jo alkolike", className: "strength-na" };
  }
  if (text.includes("very strong") || text.includes("strong")) {
    return { label: "E forte", className: "strength-strong" };
  }
  if (text.includes("medium") || text.includes("light")) {
    return { label: "E lehte", className: "strength-light" };
  }
  return null;
}

function renderGallery() {
  el.galleryGrid.innerHTML = siteData.gallery
    .map((src) => `<img src="${src}" alt="Foto e ambientit" />`)
    .join("");
}

function renderReviews() {
  const reviews = normalizeReviews(siteData.reviews);
  siteData.reviews = reviews;
  el.reviewsGrid.innerHTML = reviews
    .map((review) => {
      const rating = clampRating(review.rating);
      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
      const initials = review.author
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase() || "K";
      return `<article class="review-card">
        <div class="review-head">
          <div class="review-avatar">${escapeHtml(initials)}</div>
          <div class="review-meta">
            <h3>${escapeHtml(review.author)}</h3>
            <p>${escapeHtml(review.date)}</p>
          </div>
        </div>
        <div class="review-stars" aria-label="${rating} nga 5 yje">${stars}</div>
        <p class="review-text">"${escapeHtml(review.text)}"</p>
      </article>`;
    })
    .join("");
}

function renderMenuEditor() {
  const isAdmin = hasRole("admin");
  el.menuEditor.innerHTML = siteData.menu
    .map(
      (item, idx) => `
        <div class="menu-edit-row" data-index="${idx}">
          <input data-field="name" value="${escapeAttr(item.name)}" />
          <input data-field="description" value="${escapeAttr(item.description)}" />
          <input data-field="price" value="${escapeAttr(item.price)}" />
          <select data-field="type" ${isAdmin ? "" : "disabled"}>
            <option value="food" ${item.type === "food" ? "selected" : ""}>food</option>
            <option value="drink" ${item.type === "drink" ? "selected" : ""}>drink</option>
          </select>
          <button class="btn btn-ghost btn-small delete-menu-item" data-id="${item.id}" ${isAdmin ? "" : "hidden"}>Hiq</button>
        </div>
      `
    )
    .join("");

  document.querySelectorAll(".delete-menu-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!hasRole("admin")) return;
      const id = btn.dataset.id;
      siteData.menu = siteData.menu.filter((x) => x.id !== id);
      persistSite();
      renderMenuEditor();
      renderMenuGrid();
      syncJsonEditor();
    });
  });
}

function collectMenuFromEditor() {
  const rows = [...el.menuEditor.querySelectorAll(".menu-edit-row")];
  const updated = rows.map((row, idx) => {
    const current = siteData.menu[idx];
    const name = row.querySelector("[data-field='name']").value.trim();
    const description = row.querySelector("[data-field='description']").value.trim();
    const price = row.querySelector("[data-field='price']").value.trim();
    const type = row.querySelector("[data-field='type']").value;
    return {
      ...current,
      name,
      description,
      price,
      type: hasRole("admin") ? type : current.type
    };
  });
  siteData.menu = updated;
}

function renderAdminEditors() {
  if (!hasRole("admin")) return;
  el.editBusinessName.value = siteData.businessName;
  el.editHeroKicker.value = siteData.hero.kicker;
  el.editHeroTitle.value = siteData.hero.title;
  el.editHeroLead.value = siteData.hero.lead;
  el.editAboutTitle.value = siteData.about.title;
  el.editAboutText.value = siteData.about.text;
  el.editMenuTitle.value = siteData.menuTitle;
  el.editHours.value = siteData.about.hours;
  el.editAddress.value = siteData.about.address;
  el.editContactTitle.value = siteData.contact.title;
  el.editContactText.value = siteData.contact.text;
  el.editPhone.value = siteData.contact.phone;
  el.editMapsUrl.value = siteData.contact.mapsUrl;
  el.editMapEmbed.value = siteData.contact.mapEmbed;
  el.editHeroImage.value = siteData.hero.image;
  renderGalleryEditor();
  renderReviewsEditor();
  syncJsonEditor();
  renderUsers();
}

function renderGalleryEditor() {
  if (!hasRole("admin")) return;
  el.galleryEditor.innerHTML = siteData.gallery
    .map(
      (url, idx) => `
        <div class="simple-edit-row" data-index="${idx}">
          <input data-field="url" value="${escapeAttr(url)}" />
          <button class="btn btn-ghost btn-small delete-gallery-item" data-index="${idx}">Hiq</button>
        </div>
      `
    )
    .join("");

  document.querySelectorAll(".delete-gallery-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.index);
      siteData.gallery.splice(idx, 1);
      persistSite();
      renderGallery();
      renderGalleryEditor();
      syncJsonEditor();
    });
  });
}

function renderReviewsEditor() {
  if (!hasRole("admin")) return;
  el.reviewsEditor.innerHTML = normalizeReviews(siteData.reviews)
    .map(
      (review, idx) => `
        <div class="review-edit-row" data-index="${idx}">
          <input data-field="author" placeholder="Autori" value="${escapeAttr(review.author)}" />
          <input data-field="rating" type="number" min="1" max="5" placeholder="Yje (1-5)" value="${escapeAttr(review.rating)}" />
          <input data-field="date" placeholder="Data" value="${escapeAttr(review.date)}" />
          <textarea data-field="text" rows="2">${escapeHtml(review.text)}</textarea>
          <button class="btn btn-ghost btn-small delete-review-item" data-index="${idx}">Hiq</button>
        </div>
      `
    )
    .join("");

  document.querySelectorAll(".delete-review-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.index);
      siteData.reviews.splice(idx, 1);
      persistSite();
      renderReviews();
      renderReviewsEditor();
      syncJsonEditor();
    });
  });
}

function collectGalleryFromEditor() {
  if (!hasRole("admin")) return;
  const rows = [...el.galleryEditor.querySelectorAll(".simple-edit-row")];
  siteData.gallery = rows
    .map((row) => row.querySelector("[data-field='url']").value.trim())
    .filter(Boolean);
}

function collectReviewsFromEditor() {
  if (!hasRole("admin")) return;
  const rows = [...el.reviewsEditor.querySelectorAll(".review-edit-row")];
  siteData.reviews = rows
    .map((row, idx) => {
      const author = row.querySelector("[data-field='author']").value.trim() || `Klient ${idx + 1}`;
      const rating = clampRating(row.querySelector("[data-field='rating']").value);
      const date = row.querySelector("[data-field='date']").value.trim() || "Google Maps";
      const text = row.querySelector("[data-field='text']").value.trim();
      return { author, rating, date, text };
    })
    .filter((review) => review.text);
}

function renderUsers() {
  if (!hasRole("admin")) return;
  el.usersList.innerHTML = users
    .map(
      (u) => `<div class="user-row">
        <span>${escapeHtml(u.username)} (${u.role})</span>
        <button class="btn btn-ghost btn-small delete-user" data-username="${u.username}" ${u.username === "admin" ? "disabled" : ""}>Hiq</button>
      </div>`
    )
    .join("");

  document.querySelectorAll(".delete-user").forEach((btn) => {
    btn.addEventListener("click", () => {
      const username = btn.dataset.username;
      users = users.filter((u) => u.username !== username);
      save(STORAGE_KEYS.users, users);
      renderUsers();
    });
  });

  renderPasswordTargets();
}

function renderPasswordTargets() {
  if (!hasRole("admin")) return;
  el.passwordTargetUser.innerHTML = users
    .map((u) => `<option value="${escapeAttr(u.username)}">${escapeHtml(u.username)} (${escapeHtml(u.role)})</option>`)
    .join("");
}

function syncJsonEditor() {
  return;
}

function persistSite() {
  siteData = normalizeSiteData(siteData);
  save(STORAGE_KEYS.data, siteData);
}

function hasRole(role) {
  return !!session && session.role === role;
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    el.header.classList.toggle("scrolled", window.scrollY > 20);
  });

  el.menuToggle.addEventListener("click", () => {
    el.navLinks.classList.toggle("open");
  });

  el.navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => el.navLinks.classList.remove("open"));
  });

  el.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      el.filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      menuFilter = button.dataset.filter;
      renderMenuGrid();
    });
  });

  if (typeof IntersectionObserver !== "undefined") {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    el.revealElements.forEach((node) => observer.observe(node));
  } else {
    el.revealElements.forEach((node) => node.classList.add("visible"));
  }

  el.loginBtn.addEventListener("click", () => {
    el.loginError.textContent = "";
    el.loginModal.hidden = false;
  });

  el.cancelLoginBtn.addEventListener("click", () => {
    el.loginModal.hidden = true;
  });

  el.submitLoginBtn.addEventListener("click", () => {
    const username = el.loginUsername.value.trim();
    const password = el.loginPassword.value.trim();
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
      el.loginError.textContent = "Kredencialet nuk jane te sakta.";
      return;
    }

    session = { username: user.username, role: user.role };
    save(STORAGE_KEYS.session, session);
    el.loginUsername.value = "";
    el.loginPassword.value = "";
    el.loginModal.hidden = true;
    applySessionUI();
  });

  el.logoutBtn.addEventListener("click", () => {
    session = null;
    localStorage.removeItem(STORAGE_KEYS.session);
    el.controlPanel.hidden = true;
    applySessionUI();
  });

  el.manageBtn.addEventListener("click", () => {
    el.controlPanel.hidden = !el.controlPanel.hidden;
  });

  el.panelClose.addEventListener("click", () => {
    el.controlPanel.hidden = true;
  });

  el.saveMenuBtn.addEventListener("click", () => {
    if (!session) return;
    collectMenuFromEditor();
    persistSite();
    renderMenuGrid();
    syncJsonEditor();
    alert("Menu u ruajt.");
  });

  el.addMenuItemBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.menu.push({
      id: `m${Date.now()}`,
      type: "food",
      name: "Artikull i ri",
      description: "Pershkrim",
      price: "0.00 EUR"
    });
    persistSite();
    renderMenuEditor();
    renderMenuGrid();
    syncJsonEditor();
  });

  el.saveGeneralBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.businessName = el.editBusinessName.value.trim();
    siteData.hero.kicker = el.editHeroKicker.value.trim();
    siteData.hero.title = el.editHeroTitle.value.trim();
    siteData.hero.lead = el.editHeroLead.value.trim();
    siteData.about.title = el.editAboutTitle.value.trim();
    siteData.about.text = el.editAboutText.value.trim();
    siteData.menuTitle = el.editMenuTitle.value.trim();
    siteData.about.hours = el.editHours.value.trim();
    siteData.about.address = el.editAddress.value.trim();
    siteData.contact.title = el.editContactTitle.value.trim();
    siteData.contact.text = el.editContactText.value.trim();
    siteData.contact.phone = el.editPhone.value.trim();
    siteData.contact.mapsUrl = el.editMapsUrl.value.trim();
    siteData.contact.mapEmbed = el.editMapEmbed.value.trim();
    siteData.hero.image = el.editHeroImage.value.trim();
    persistSite();
    renderSite();
    renderGallery();
    renderReviews();
    syncJsonEditor();
    alert("General u ruajt.");
  });

  el.saveGalleryBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    collectGalleryFromEditor();
    persistSite();
    renderGallery();
    syncJsonEditor();
    alert("Galeria u ruajt.");
  });

  el.addGalleryBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.gallery.push("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80");
    persistSite();
    renderGallery();
    renderGalleryEditor();
    syncJsonEditor();
  });

  el.importGalleryUrlsBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const raw = el.galleryUrlsBulk.value || "";
    const urls = raw
      .split(/\r?\n/)
      .map((x) => x.trim())
      .filter((x) => x.startsWith("http://") || x.startsWith("https://"));
    if (urls.length === 0) {
      alert("Vendos URL valide, nje per rresht.");
      return;
    }
    const existing = new Set(siteData.gallery);
    urls.forEach((u) => existing.add(u));
    siteData.gallery = [...existing];
    persistSite();
    renderGallery();
    renderGalleryEditor();
    syncJsonEditor();
    el.galleryUrlsBulk.value = "";
    alert(`${urls.length} URL u importuan ne galeri.`);
  });

  el.galleryFileInput.addEventListener("change", async () => {
    if (!hasRole("admin")) return;
    const files = [...(el.galleryFileInput.files || [])];
    if (files.length === 0) return;
    const dataUrls = await Promise.all(files.map(fileToDataUrl));
    siteData.gallery.push(...dataUrls);
    persistSite();
    renderGallery();
    renderGalleryEditor();
    syncJsonEditor();
    el.galleryFileInput.value = "";
    alert(`${files.length} foto u shtuan ne galeri.`);
  });

  el.saveReviewsBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    collectReviewsFromEditor();
    persistSite();
    renderReviews();
    syncJsonEditor();
    alert("Reviews u ruajten.");
  });

  el.addReviewBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.reviews.push({
      author: "Klient i ri",
      rating: 5,
      date: "Google Maps",
      text: "Review i ri."
    });
    persistSite();
    renderReviews();
    renderReviewsEditor();
    syncJsonEditor();
  });

  el.addUserBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const username = el.newUsername.value.trim();
    const password = el.newPassword.value.trim();
    const role = el.newRole.value;

    if (!username || !password) {
      alert("Ploteso username dhe password.");
      return;
    }
    if (users.some((u) => u.username === username)) {
      alert("Ky username ekziston.");
      return;
    }

    users.push({ username, password, role });
    save(STORAGE_KEYS.users, users);
    el.newUsername.value = "";
    el.newPassword.value = "";
    renderUsers();
  });

  el.changeSelfPasswordBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const newPassword = el.selfNewPassword.value.trim();
    if (!newPassword) {
      alert("Vendos password-in e ri.");
      return;
    }
    users = users.map((u) =>
      u.username === session.username ? { ...u, password: newPassword } : u
    );
    save(STORAGE_KEYS.users, users);
    el.selfNewPassword.value = "";
    renderUsers();
    alert("Password-i yt u ndryshua.");
  });

  el.changeUserPasswordBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    const targetUsername = el.passwordTargetUser.value;
    const newPassword = el.targetNewPassword.value.trim();
    if (!targetUsername || !newPassword) {
      alert("Zgjidh user dhe vendos password-in e ri.");
      return;
    }
    users = users.map((u) =>
      u.username === targetUsername ? { ...u, password: newPassword } : u
    );
    save(STORAGE_KEYS.users, users);
    el.targetNewPassword.value = "";
    renderUsers();
    alert(`Password-i per ${targetUsername} u ndryshua.`);
  });

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
  el.addMenuItemBtn.hidden = !admin;

  if (!logged) {
    el.sessionInfo.textContent = "Nuk je i loguar.";
    return;
  }

  el.sessionInfo.textContent = `I loguar si ${session.username} (${session.role}).`;
  renderMenuEditor();

  if (admin) {
    renderAdminEditors();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Nuk u lexua file."));
    reader.readAsDataURL(file);
  });
}

renderSite();
renderMenuEditor();
applySessionUI();
bindEvents();

