const STORAGE_KEYS = {
  data: "hendon_site_data_v2",
  legacyData: "hendon_site_data",
  users: "hendon_users",
  session: "hendon_session",
  language: "hendon_language",
  invoices: "hendon_invoices_v1"
};

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/The+Hendon+Pub/@41.3225198,19.7957727,17z/data=!4m8!3m7!1s0x1350310040968bf3:0x3a48075119e30851!8m2!3d41.3223019!4d19.7954807!9m1!1b1!16s%2Fg%2F11xmqhv6hp!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D";
const HENDON_GALLERY_LOGO = "assets/gallery/the-hendon-pub.jpg?v=20260311";
const CUSTOM_GALLERY_IMAGES = [
  HENDON_GALLERY_LOGO,
  "assets/gallery/hendon-1.jpg",
  "assets/gallery/hendon-2.jpg",
  "assets/gallery/hendon-3.jpg",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepyUZiELVVQXSMkm5d2Tn6WwukRbW_-BY73xVW4hBDQQb4ChZjsEdD0PKNck5OFrD9D3Pe_YDZi6XQVq98991VKg6RDuKCoY5TDC7biI0ZzppLa6DFxSrAo2jPQa253r8fMh-9YML5_wIhJ=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-3giaC14HStnt1fvo9ZezAz94adyqVy-cszqnRqk60WzSKz0cy78d-d5jP9i2tSAGf47evyaLekhpcxF8FdsIB-MmhpQ-7g56hhFdo4T7EaAmJg3d93N9hm7cLCffIJrfuwuzigliS582=w203-h270-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqJMw12MV9aWmJ2VW3daS4eGRo9gVL18c75n25mpBiSb2TuaSmQKFetrYrW106lpTRBcIW8zQtcJ4RWh5V1RVMXYgIZStQwu_k-A_5Fi8aWiuXTd_4pHa5vopZ9Vlq95qYFWWrK1rbFHU4_=w203-h360-k-no"
];

const ROLE_KEYS = ["admin", "waiter", "bar", "kitchen"];
const STATION_BY_TYPE = {
  food: "kitchen",
  drink: "bar"
};
const NON_ORDERABLE_SECTIONS = ["LEGJENDA E FORCES", "STRENGTH GUIDE"];
const STAFF_TOOLS_ENABLED = true;
const API_POLL_INTERVAL_MS = 5000;
const INACTIVITY_LOGOUT_MS = 60 * 1000;

const UI = {
  sq: {
    navAbout: "Rreth Nesh", navMenu: "Menu", navGallery: "Galeri", navContact: "Kontakt",
    manage: "Menaxho", login: "Hyr", logout: "Dil", heroMenu: "Shiko Menune", maps: "Na Gjej ne Maps",
    aboutTag: "Rreth Nesh", hours: "Orari", address: "Adresa", openLocation: "Hap lokacionin",
    menuTag: "Menu", filterAll: "Te Gjitha", filterFood: "Ushqim", filterDrink: "Pije",
    galleryTag: "Galeri", galleryTitle: "Atmosfera", reviewsTag: "Vleresime", reviewsTitle: "Cfare Thone Klientet",
    reviewsLink: "Shiko te gjitha ne Google", contactTag: "Kontakt",
    footerRights: "Te gjitha te drejtat e rezervuara.", panelTitle: "Paneli i Stafit", panelClose: "Mbyll",
    editorLanguage: "Po editon gjuhen: Shqip", menuEditorTitle: "Menu Editor (vetem admin)", saveMenu: "Ruaj Menune", addItem: "Shto Artikull",
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
    waiterRole: "kamarier", barRole: "banakier", kitchenRole: "kuzhine", adminRole: "admin", newPasswordPlaceholder: "password i ri",
    loginTitle: "Hyr", username: "Username", password: "Password", loginSubmit: "Hyr", cancel: "Anulo",
    invalidCredentials: "Kredencialet nuk jane te sakta.", sessionLoggedOut: "Nuk je i loguar.", publicSiteMode: "Faqja publike eshte vetem per klientet. Menaxhimi eshte aktiv vetem lokalisht.",
    menuEmptyTitle: "Menu bosh", menuEmptyText: "Nuk ka artikuj per kete filter.",
    legendNa: "Jeshile: Jo alkolike", legendLight: "E verdhe: Te lehta", legendStrong: "E kuqe: Te forta",
    badgeNa: "Jo alkolike", badgeLight: "E lehte", badgeStrong: "E forte", galleryAlt: "Foto e ambientit", askWaiter: "Pyet kamarierin",
    menuSaved: "Menu u ruajt.", generalSaved: "General u ruajt.", gallerySaved: "Galeria u ruajt.", reviewsSaved: "Reviews u ruajten.",
    jsonSaved: "JSON u ruajt me sukses.", jsonInvalid: "JSON nuk eshte valid.", validUrls: "Vendos URL valide, nje per rresht.",
    fillUsernamePassword: "Ploteso username dhe password.", usernameExists: "Ky username ekziston.",
    newPasswordRequired: "Vendos password-in e ri.", chooseUserAndPassword: "Zgjidh user dhe vendos password-in e ri.",
    selfPasswordChanged: "Password-i yt u ndryshua.",
    orderPanelTitle: "Porosite e Kamarierit", orderPanelHelp: "Krijo faturen dhe sistemi e dergon automatikisht te banaku ose kuzhina sipas artikujve.",
    orderTablePlaceholder: "Tavolina", orderCustomerPlaceholder: "Klienti", orderNoteLabel: "Shenime per porosine",
    orderNotePlaceholder: "Pa qepe, me pak akull...", orderSearchLabel: "Kerko ne menu", orderSearchPlaceholder: "Kafe, negroni, burger...",
    addToOrder: "Shto", orderTotal: "Totali", submitOrder: "Dergo Faturen", clearOrder: "Pastro", waiterHistoryTitle: "Faturat e mia",
    emptyOrder: "Nuk ke shtuar ende artikuj ne fature.", emptyWaiterOrders: "Nuk ka ende fatura nga ky profil.", orderNeedsItems: "Shto te pakten nje artikull ne porosi.",
    orderSubmitted: "Fatura u dergua me sukses.", orderTableLabel: "Tavolina", orderCustomerLabel: "Klienti", orderCreated: "Krijuar", orderStatus: "Statusi",
    barBoardTitle: "Banaku", barBoardHelp: "Ketu shfaqen faturat me pije qe presin te pergatiten.", kitchenBoardTitle: "Kuzhina",
    kitchenBoardHelp: "Ketu shfaqen faturat me ushqim qe presin te pergatiten.", emptyBarBoard: "Nuk ka pije ne pritje.", emptyKitchenBoard: "Nuk ka ushqime ne pritje.",
    markReady: "Sheno gati", readyLabel: "Gati", pendingLabel: "Ne pritje", partialLabel: "Pjeserisht gati", naLabel: "Pa artikuj",
    stationBar: "Banak", stationKitchen: "Kuzhine", analyticsTitle: "Xhiro dhe Historik", dailyRevenue: "Xhiro ditore",
    weeklyRevenue: "Xhiro javore", monthlyRevenue: "Xhiro mujore", invoiceHistoryTitle: "Historiku i faturave", noInvoices: "Nuk ka ende fatura te regjistruara.",
    invoiceNumber: "Fatura", invoiceItems: "Artikuj", lineTotal: "Totali i rreshtit", deleteUserLabel: "Fshi", noMenuMatches: "Nuk u gjet asnje artikull ne menu.",
    priceLabel: "Cmimi", quantityLabel: "Sasia", myRoleLabel: "Roli", untitledCustomer: "Pa emer", allCategories: "Te gjitha"
  },
  en: {
    navAbout: "About", navMenu: "Menu", navGallery: "Gallery", navContact: "Contact",
    manage: "Manage", login: "Login", logout: "Logout", heroMenu: "View Menu", maps: "Find Us on Maps",
    aboutTag: "About", hours: "Opening Hours", address: "Address", openLocation: "Open location",
    menuTag: "Menu", filterAll: "All", filterFood: "Food", filterDrink: "Drinks",
    galleryTag: "Gallery", galleryTitle: "Atmosphere", reviewsTag: "Reviews", reviewsTitle: "What Guests Say",
    reviewsLink: "See all on Google", contactTag: "Contact",
    footerRights: "All rights reserved.", panelTitle: "Staff Panel", panelClose: "Close",
    editorLanguage: "Editing language: English", menuEditorTitle: "Menu Editor (admin only)", saveMenu: "Save Menu", addItem: "Add Item",
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
    waiterRole: "waiter", barRole: "bartender", kitchenRole: "kitchen", adminRole: "admin", newPasswordPlaceholder: "new password",
    loginTitle: "Login", username: "Username", password: "Password", loginSubmit: "Login", cancel: "Cancel",
    invalidCredentials: "The credentials are not correct.", sessionLoggedOut: "You are not logged in.", publicSiteMode: "The public site is customer-facing only. Staff management is available locally.",
    menuEmptyTitle: "Empty menu", menuEmptyText: "There are no items for this filter.",
    legendNa: "Green: Non-alcoholic", legendLight: "Yellow: Light", legendStrong: "Red: Strong",
    badgeNa: "Non-alcoholic", badgeLight: "Light", badgeStrong: "Strong", galleryAlt: "Venue photo", askWaiter: "Ask the waiter",
    menuSaved: "Menu saved.", generalSaved: "General content saved.", gallerySaved: "Gallery saved.", reviewsSaved: "Reviews saved.",
    jsonSaved: "JSON saved successfully.", jsonInvalid: "The JSON is not valid.", validUrls: "Enter valid URLs, one per line.",
    fillUsernamePassword: "Enter both username and password.", usernameExists: "This username already exists.",
    newPasswordRequired: "Enter the new password.", chooseUserAndPassword: "Choose a user and enter the new password.",
    selfPasswordChanged: "Your password was changed.",
    orderPanelTitle: "Waiter Orders", orderPanelHelp: "Create the invoice and the system routes it automatically to the bar or kitchen based on the items.",
    orderTablePlaceholder: "Table", orderCustomerPlaceholder: "Customer", orderNoteLabel: "Order notes",
    orderNotePlaceholder: "No onions, less ice...", orderSearchLabel: "Search the menu", orderSearchPlaceholder: "Coffee, negroni, burger...",
    addToOrder: "Add", orderTotal: "Total", submitOrder: "Send Invoice", clearOrder: "Clear", waiterHistoryTitle: "My invoices",
    emptyOrder: "No items have been added yet.", emptyWaiterOrders: "There are no invoices for this staff account yet.", orderNeedsItems: "Add at least one item to the order.",
    orderSubmitted: "Invoice sent successfully.", orderTableLabel: "Table", orderCustomerLabel: "Customer", orderCreated: "Created", orderStatus: "Status",
    barBoardTitle: "Bar", barBoardHelp: "Here you can see the drink tickets waiting to be prepared.", kitchenBoardTitle: "Kitchen",
    kitchenBoardHelp: "Here you can see the food tickets waiting to be prepared.", emptyBarBoard: "No drink tickets are waiting.", emptyKitchenBoard: "No food tickets are waiting.",
    markReady: "Mark Ready", readyLabel: "Ready", pendingLabel: "Pending", partialLabel: "Partially ready", naLabel: "No items",
    stationBar: "Bar", stationKitchen: "Kitchen", analyticsTitle: "Revenue and History", dailyRevenue: "Daily revenue",
    weeklyRevenue: "Weekly revenue", monthlyRevenue: "Monthly revenue", invoiceHistoryTitle: "Invoice history", noInvoices: "No invoices have been recorded yet.",
    invoiceNumber: "Invoice", invoiceItems: "Items", lineTotal: "Line total", deleteUserLabel: "Delete", noMenuMatches: "No menu items matched your search.",
    priceLabel: "Price", quantityLabel: "Qty", myRoleLabel: "Role", untitledCustomer: "Walk-in", allCategories: "All"
  }
};

const DEFAULT_USERS = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "kamarier", password: "kamarier123", role: "waiter" },
  { username: "banak", password: "banak123", role: "bar" },
  { username: "kuzhine", password: "kuzhine123", role: "kitchen" }
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

function normalizeRole(role) {
  const value = String(role || "").trim().toLowerCase();
  if (value === "user") return "waiter";
  if (value === "bartender" || value === "banakier") return "bar";
  if (value === "chef" || value === "cook" || value === "kuzhine") return "kitchen";
  return ROLE_KEYS.includes(value) ? value : "waiter";
}

function extractPriceValue(price) {
  const text = String(price || "");
  if (text.includes("%")) return 0;
  const match = text.match(/\d+(?:[.,]\d+)?/);
  if (!match) return 0;
  const parsed = Number(match[0].replace(",", "."));
  return Number.isFinite(parsed) ? parsed : 0;
}

function isOrderableMenuItem(item) {
  const sectionSq = String((item.section && item.section.sq) || "").toUpperCase();
  const sectionEn = String((item.section && item.section.en) || "").toUpperCase();
  return !NON_ORDERABLE_SECTIONS.some((section) => sectionSq.includes(section) || sectionEn.includes(section));
}

function getItemStation(item) {
  return STATION_BY_TYPE[item.type] || "kitchen";
}

function normalizeInvoiceItem(item, idx = 0) {
  const qty = Math.max(1, Number(item.qty) || 1);
  const unitPrice = Number(item.unitPrice);
  const safeUnitPrice = Number.isFinite(unitPrice) ? unitPrice : extractPriceValue(item.priceLabel || item.price);
  const nameSq = String((item.name && item.name.sq) || item.nameSq || item.name || `Artikull ${idx + 1}`);
  const nameEn = String((item.name && item.name.en) || item.nameEn || translateMenuName(nameSq) || nameSq);
  const sectionSq = String((item.section && item.section.sq) || item.sectionSq || item.section || "Te tjera");
  const sectionEn = String((item.section && item.section.en) || item.sectionEn || translateMenuSection(sectionSq) || sectionSq);
  const type = item.type === "drink" ? "drink" : "food";
  return {
    id: String(item.id || `li-${Date.now()}-${idx}`),
    menuId: String(item.menuId || item.id || ""),
    type,
    station: item.station === "bar" || item.station === "kitchen" ? item.station : getItemStation({ type }),
    name: { sq: nameSq, en: nameEn },
    section: { sq: sectionSq, en: sectionEn },
    qty,
    unitPrice: safeUnitPrice,
    priceLabel: String(item.priceLabel || item.price || `${safeUnitPrice} ALL`),
    totalPrice: Math.round(qty * safeUnitPrice)
  };
}

function buildStationStatus(items, rawStatus = {}) {
  const status = {};
  ["bar", "kitchen"].forEach((station) => {
    const hasItems = items.some((item) => item.station === station);
    if (!hasItems) {
      status[station] = "na";
      return;
    }
    status[station] = rawStatus[station] === "ready" ? "ready" : "pending";
  });
  return status;
}

function normalizeUsers(raw) {
  if (!Array.isArray(raw) || raw.length === 0) return [...DEFAULT_USERS];
  const seen = new Set();
  const normalized = raw
    .filter((user) => user && user.username && user.password)
    .map((user) => ({
      username: String(user.username).trim(),
      password: String(user.password),
      role: normalizeRole(user.role)
    }))
    .filter((user) => user.username && !seen.has(user.username) && (seen.add(user.username), true));
  DEFAULT_USERS.forEach((user) => {
    if (!normalized.some((entry) => entry.username === user.username)) normalized.push({ ...user });
  });
  if (!normalized.some((user) => user.role === "admin")) normalized.unshift({ ...DEFAULT_USERS[0] });
  return normalized.length ? normalized : [...DEFAULT_USERS];
}

function normalizeUserSummaries(raw) {
  if (!Array.isArray(raw)) return [];
  const seen = new Set();
  return raw
    .filter((user) => user && user.username)
    .map((user) => ({
      username: String(user.username).trim(),
      role: normalizeRole(user.role)
    }))
    .filter((user) => user.username && !seen.has(user.username) && (seen.add(user.username), true));
}

function normalizeSession(raw) {
  if (!STAFF_TOOLS_ENABLED || !raw || !raw.username) return null;
  return {
    username: String(raw.username),
    role: normalizeRole(raw.role)
  };
}

function normalizeInvoices(raw) {
  return (Array.isArray(raw) ? raw : [])
    .map((invoice, idx) => {
      const items = (Array.isArray(invoice.items) ? invoice.items : []).map(normalizeInvoiceItem);
      const createdDate = new Date(invoice.createdAt || invoice.created_at || Date.now());
      const createdAt = Number.isNaN(createdDate.getTime()) ? new Date().toISOString() : createdDate.toISOString();
      const stationStatus = buildStationStatus(items, invoice.stationStatus || invoice.station_status || {});
      return {
        id: String(invoice.id || `INV-${idx + 1}`),
        number: String(invoice.number || invoice.id || `INV-${idx + 1}`),
        createdAt,
        waiter: String(invoice.waiter || invoice.username || "staff"),
        table: String(invoice.table || ""),
        customer: String(invoice.customer || ""),
        note: String(invoice.note || ""),
        items,
        total: items.reduce((sum, item) => sum + item.totalPrice, 0),
        stationStatus
      };
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

function createEmptyOrderDraft() {
  return {
    table: "",
    customer: "",
    note: "",
    search: "",
    category: "all",
    items: []
  };
}

function normalizeSiteData(raw) {
  const value = raw && typeof raw === "object" ? raw : {};
  const gallery = Array.isArray(value.gallery) && value.gallery.length ? value.gallery : [...DEFAULT_DATA.gallery];
  const normalizedGallery = gallery.includes(HENDON_GALLERY_LOGO)
    ? gallery
    : [HENDON_GALLERY_LOGO, ...gallery];
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
    gallery: normalizedGallery,
    reviews: normalizeReviews(value.reviews)
  };
}

let siteData = normalizeSiteData(DEFAULT_DATA);
let users = [];
let invoices = [];
let session = null;
let currentLanguage = load(STORAGE_KEYS.language, "sq") === "en" ? "en" : "sq";
let menuFilter = "all";
let menuCategory = "all";
let orderDraft = createEmptyOrderDraft();
let syncTimer = null;
let backendAvailable = null;
let inactivityTimer = null;

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
  menuCategoryBar: document.getElementById("menuCategoryBar"),
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
  orderBlock: document.getElementById("orderBlock"),
  orderPanelTitle: document.getElementById("orderPanelTitle"),
  orderPanelHelp: document.getElementById("orderPanelHelp"),
  orderTableInput: document.getElementById("orderTableInput"),
  orderCustomerInput: document.getElementById("orderCustomerInput"),
  orderNoteLabel: document.getElementById("orderNoteLabel"),
  orderNoteInput: document.getElementById("orderNoteInput"),
  orderSearchLabel: document.getElementById("orderSearchLabel"),
  orderSearchInput: document.getElementById("orderSearchInput"),
  orderCategoryBar: document.getElementById("orderCategoryBar"),
  orderCatalog: document.getElementById("orderCatalog"),
  orderCart: document.getElementById("orderCart"),
  orderTotalLabel: document.getElementById("orderTotalLabel"),
  orderTotalValue: document.getElementById("orderTotalValue"),
  submitOrderBtn: document.getElementById("submitOrderBtn"),
  clearOrderBtn: document.getElementById("clearOrderBtn"),
  waiterHistoryTitle: document.getElementById("waiterHistoryTitle"),
  waiterOrders: document.getElementById("waiterOrders"),
  barBoardBlock: document.getElementById("barBoardBlock"),
  barBoardTitle: document.getElementById("barBoardTitle"),
  barBoardHelp: document.getElementById("barBoardHelp"),
  barBoard: document.getElementById("barBoard"),
  kitchenBoardBlock: document.getElementById("kitchenBoardBlock"),
  kitchenBoardTitle: document.getElementById("kitchenBoardTitle"),
  kitchenBoardHelp: document.getElementById("kitchenBoardHelp"),
  kitchenBoard: document.getElementById("kitchenBoard"),
  analyticsBlock: document.getElementById("analyticsBlock"),
  analyticsTitle: document.getElementById("analyticsTitle"),
  dailyRevenueLabel: document.getElementById("dailyRevenueLabel"),
  dailyRevenueValue: document.getElementById("dailyRevenueValue"),
  weeklyRevenueLabel: document.getElementById("weeklyRevenueLabel"),
  weeklyRevenueValue: document.getElementById("weeklyRevenueValue"),
  monthlyRevenueLabel: document.getElementById("monthlyRevenueLabel"),
  monthlyRevenueValue: document.getElementById("monthlyRevenueValue"),
  invoiceHistoryTitle: document.getElementById("invoiceHistoryTitle"),
  invoiceHistory: document.getElementById("invoiceHistory"),
  menuEditorBlock: document.getElementById("menuEditorBlock"),
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
  toggleLoginPasswordBtn: document.getElementById("toggleLoginPasswordBtn"),
  submitLoginBtn: document.getElementById("submitLoginBtn"),
  cancelLoginBtn: document.getElementById("cancelLoginBtn"),
  loginError: document.getElementById("loginError"),
  filterButtons: [...document.querySelectorAll(".filter-btn")],
  revealElements: [...document.querySelectorAll(".reveal")]
};

function tr(key) {
  return UI[currentLanguage][key];
}

function updatePasswordToggleLabel() {
  if (!el.toggleLoginPasswordBtn) return;
  const visible = el.loginPassword.type === "text";
  el.toggleLoginPasswordBtn.textContent = visible ? "Hide" : "Show";
  el.toggleLoginPasswordBtn.setAttribute("aria-label", visible ? "Fsheh passwordin" : "Shfaq passwordin");
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#96;");
}

function clearSyncTimer() {
  if (syncTimer) {
    clearInterval(syncTimer);
    syncTimer = null;
  }
}

function clearInactivityTimer() {
  if (inactivityTimer) {
    clearTimeout(inactivityTimer);
    inactivityTimer = null;
  }
}

async function performLogout(options = {}) {
  const { render = true, notify = false } = options;
  if (backendAvailable !== false) {
    try {
      await apiRequest("/api/auth/logout", {
        method: "POST",
        suppressAuthReset: true
      });
    } catch {
      // Clear local session state even if the logout request fails.
    }
  }
  clearAuthenticatedState();
  if (render) renderAll();
  if (notify) {
    el.sessionInfo.textContent = currentLanguage === "sq"
      ? "Sesioni u mbyll pas 1 minute pa aktivitet."
      : "You were logged out after 1 minute of inactivity.";
  }
}

function resetInactivityTimer() {
  clearInactivityTimer();
  if (!session) return;
  inactivityTimer = window.setTimeout(() => {
    performLogout({ render: true, notify: true });
  }, INACTIVITY_LOGOUT_MS);
}

function initializeLocalState() {
  siteData = normalizeSiteData(load(STORAGE_KEYS.data, null) || load(STORAGE_KEYS.legacyData, DEFAULT_DATA));
  users = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS));
  invoices = normalizeInvoices(load(STORAGE_KEYS.invoices, []));
  session = normalizeSession(load(STORAGE_KEYS.session, null));
}

function persistUsers() {
  const storableUsers = normalizeUsers(users);
  save(STORAGE_KEYS.users, storableUsers);
  users = storableUsers.map((user) => ({ username: user.username, role: user.role }));
}

function persistSession() {
  if (session) {
    save(STORAGE_KEYS.session, session);
  } else {
    localStorage.removeItem(STORAGE_KEYS.session);
  }
}

function clearAuthenticatedState() {
  session = null;
  users = [];
  invoices = [];
  orderDraft = createEmptyOrderDraft();
  clearSyncTimer();
  clearInactivityTimer();
  if (backendAvailable === false) {
    persistSession();
  }
  if (el.controlPanel) el.controlPanel.hidden = true;
}

function isBackendFallbackError(error) {
  return error && (error.code === "BACKEND_UNAVAILABLE" || error.code === "NETWORK_UNAVAILABLE");
}

async function apiRequest(path, options = {}) {
  const { method = "GET", body, suppressAuthReset = false } = options;
  const requestOptions = {
    method,
    credentials: "include",
    headers: {}
  };
  if (body !== undefined) {
    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.body = JSON.stringify(body);
  }
  let response;
  try {
    response = await fetch(path, requestOptions);
  } catch {
    const error = new Error("Nuk u lidh me serverin.");
    error.code = "NETWORK_UNAVAILABLE";
    throw error;
  }
  let payload = {};
  const responseText = await response.text();
  if (responseText) {
    try {
      payload = JSON.parse(responseText);
    } catch {
      payload = {};
    }
  }
  if (!response.ok) {
    if (response.status === 401 && !suppressAuthReset) {
      clearAuthenticatedState();
      renderAll();
    }
    const error = new Error(payload.error || `Request failed (${response.status}).`);
    error.code = response.status === 404 || response.status === 405 || response.status === 501 ? "BACKEND_UNAVAILABLE" : `HTTP_${response.status}`;
    throw error;
  }
  return payload;
}

function applyBootstrap(payload, options = {}) {
  const { preserveDraft = true } = options;
  const previousUsername = session ? session.username : "";
  const nextSession = normalizeSession(payload.session);
  siteData = normalizeSiteData(payload.siteData || DEFAULT_DATA);
  users = normalizeUserSummaries(payload.users || []);
  invoices = normalizeInvoices(payload.invoices || []);
  session = nextSession;
  if (!session) users = [];
  if (!preserveDraft || !session || previousUsername !== (session ? session.username : "")) {
    orderDraft = createEmptyOrderDraft();
  }
}

function updateSyncTimer() {
  clearSyncTimer();
  if (!session) return;
  syncTimer = window.setInterval(() => {
    refreshInvoicesFromServer().catch(() => {});
  }, API_POLL_INTERVAL_MS);
  resetInactivityTimer();
}

function renderOperationalPanels() {
  applySessionUI();
  if (canCreateOrders()) {
    renderOrderCatalog();
    renderOrderCart();
    renderWaiterOrders();
  }
  if (canViewStation("bar")) renderStationBoard("bar");
  if (canViewStation("kitchen")) renderStationBoard("kitchen");
  if (hasRole("admin")) renderAnalytics();
}

async function refreshBootstrap(options = {}) {
  const { render = true, preserveDraft = true } = options;
  try {
    const payload = await apiRequest("/api/bootstrap", { suppressAuthReset: true });
    backendAvailable = true;
    applyBootstrap(payload, { preserveDraft });
    updateSyncTimer();
    if (render) renderAll();
  } catch (error) {
    if (!isBackendFallbackError(error)) throw error;
    backendAvailable = false;
    initializeLocalState();
    clearSyncTimer();
    if (render) renderAll();
  }
}

async function refreshInvoicesFromServer() {
  if (!session || backendAvailable === false) return;
  try {
    const payload = await apiRequest("/api/invoices");
    backendAvailable = true;
    invoices = normalizeInvoices(payload.invoices || []);
    renderOperationalPanels();
  } catch (error) {
    if (isBackendFallbackError(error)) {
      backendAvailable = false;
      initializeLocalState();
      renderOperationalPanels();
      return;
    }
    if (error.message !== tr("sessionLoggedOut")) {
      console.error(error);
    }
  }
}

async function saveSiteDataToServer(successKey) {
  siteData = normalizeSiteData(siteData);
  if (backendAvailable === false) {
    save(STORAGE_KEYS.data, siteData);
    renderAll();
    if (successKey) alert(tr(successKey));
    return;
  }
  await apiRequest("/api/site-data", {
    method: "PUT",
    body: { siteData }
  });
  backendAvailable = true;
  await refreshBootstrap({ render: true, preserveDraft: true });
  if (successKey) alert(tr(successKey));
}

function persistSite() {
  siteData = normalizeSiteData(siteData);
  if (backendAvailable === false) save(STORAGE_KEYS.data, siteData);
}

function persistInvoices() {
  invoices = normalizeInvoices(invoices);
  if (backendAvailable === false) save(STORAGE_KEYS.invoices, invoices);
}

function hasRole(role) {
  return STAFF_TOOLS_ENABLED && !!session && session.role === role;
}

function canCreateOrders() {
  return hasRole("waiter");
}

function canViewStation(station) {
  return hasRole("admin") || (station === "bar" && hasRole("bar")) || (station === "kitchen" && hasRole("kitchen"));
}

function getRoleLabel(role) {
  const normalized = normalizeRole(role);
  const keyMap = {
    waiter: "waiterRole",
    bar: "barRole",
    kitchen: "kitchenRole",
    admin: "adminRole"
  };
  return tr(keyMap[normalized] || "waiterRole");
}

function formatCurrency(value) {
  const amount = Math.round(Number(value) || 0);
  return `${amount.toLocaleString(currentLanguage === "sq" ? "sq-AL" : "en-US")} ALL`;
}

function formatDateTime(value) {
  const date = new Date(value);
  const locale = currentLanguage === "sq" ? "sq-AL" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short"
  }).format(date);
}

function getInvoiceProgress(invoice) {
  const states = Object.values(invoice.stationStatus || {}).filter((value) => value !== "na");
  if (!states.length) return "na";
  if (states.every((value) => value === "ready")) return "ready";
  if (states.some((value) => value === "ready")) return "partial";
  return "pending";
}

function getStatusLabel(status) {
  if (status === "ready") return tr("readyLabel");
  if (status === "partial") return tr("partialLabel");
  if (status === "na") return tr("naLabel");
  return tr("pendingLabel");
}

function getDayBounds(date = new Date()) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { start, end };
}

function getWeekBounds(date = new Date()) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  start.setDate(start.getDate() + diff);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  return { start, end };
}

function getMonthBounds(date = new Date()) {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  return { start, end };
}

function calculateRevenueForRange(start, end) {
  return invoices
    .filter((invoice) => {
      const timestamp = new Date(invoice.createdAt).getTime();
      return timestamp >= start.getTime() && timestamp < end.getTime();
    })
    .reduce((sum, invoice) => sum + invoice.total, 0);
}

function buildInvoiceNumber(date = new Date()) {
  const sameDayCount = invoices.filter((invoice) => {
    const current = new Date(invoice.createdAt);
    return current.getFullYear() === date.getFullYear() && current.getMonth() === date.getMonth() && current.getDate() === date.getDate();
  }).length + 1;
  const prefix = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  return `INV-${prefix}-${String(sameDayCount).padStart(3, "0")}`;
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
  el.orderPanelTitle.textContent = tr("orderPanelTitle");
  el.orderPanelHelp.textContent = tr("orderPanelHelp");
  el.orderTableInput.placeholder = tr("orderTablePlaceholder");
  el.orderCustomerInput.placeholder = tr("orderCustomerPlaceholder");
  el.orderNoteLabel.textContent = tr("orderNoteLabel");
  el.orderNoteInput.placeholder = tr("orderNotePlaceholder");
  el.orderSearchLabel.textContent = tr("orderSearchLabel");
  el.orderSearchInput.placeholder = tr("orderSearchPlaceholder");
  el.orderTotalLabel.textContent = tr("orderTotal");
  el.submitOrderBtn.textContent = tr("submitOrder");
  el.clearOrderBtn.textContent = tr("clearOrder");
  el.waiterHistoryTitle.textContent = tr("waiterHistoryTitle");
  el.barBoardTitle.textContent = tr("barBoardTitle");
  el.barBoardHelp.textContent = tr("barBoardHelp");
  el.kitchenBoardTitle.textContent = tr("kitchenBoardTitle");
  el.kitchenBoardHelp.textContent = tr("kitchenBoardHelp");
  el.analyticsTitle.textContent = tr("analyticsTitle");
  el.dailyRevenueLabel.textContent = tr("dailyRevenue");
  el.weeklyRevenueLabel.textContent = tr("weeklyRevenue");
  el.monthlyRevenueLabel.textContent = tr("monthlyRevenue");
  el.invoiceHistoryTitle.textContent = tr("invoiceHistoryTitle");
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
  if (el.newRole.options[0]) el.newRole.options[0].textContent = tr("waiterRole");
  if (el.newRole.options[1]) el.newRole.options[1].textContent = tr("barRole");
  if (el.newRole.options[2]) el.newRole.options[2].textContent = tr("kitchenRole");
  if (el.newRole.options[3]) el.newRole.options[3].textContent = tr("adminRole");
  el.mapEmbed.title = currentLanguage === "sq" ? "Lokacioni ne harte" : "Location on the map";
  el.langSqBtn.classList.toggle("active", currentLanguage === "sq");
  el.langEnBtn.classList.toggle("active", currentLanguage === "en");
}

function ensureBrandLogos() {
  const logoLink = document.querySelector(".logo");
  if (logoLink && !logoLink.querySelector(".logo-mark")) {
    const headerLogo = document.createElement("img");
    headerLogo.className = "logo-mark";
    logoLink.prepend(headerLogo);
  }

  document.querySelectorAll(".logo-mark").forEach((img) => {
    img.src = HENDON_GALLERY_LOGO;
    img.alt = "The Hendon Pub logo";
  });
}

function renderSite() {
  const content = siteData.content[currentLanguage];
  const links = siteData.links;
  ensureBrandLogos();
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

function localizePrice(price) {
  const value = String(price || "").trim();
  if (value.toLowerCase() === "pyet kamarierin" || value.toLowerCase() === "ask the waiter") {
    return tr("askWaiter");
  }
  return value;
}

function getVisibleMenuItems() {
  return siteData.menu.filter((item) => menuFilter === "all" || item.type === menuFilter);
}

function renderMenuCategoryBar() {
  const items = getVisibleMenuItems();
  const categories = [...new Set(items.map((item) => item.section[currentLanguage] || item.section.sq).filter(Boolean))];
  if (!categories.length) {
    el.menuCategoryBar.innerHTML = "";
    return;
  }
  if (menuCategory !== "all" && !categories.includes(menuCategory)) {
    menuCategory = "all";
  }
  el.menuCategoryBar.innerHTML = [
    `<button class="menu-category-btn ${menuCategory === "all" ? "active" : ""}" data-category="all" type="button">${escapeHtml(tr("allCategories"))}</button>`,
    ...categories.map((category) => `<button class="menu-category-btn ${menuCategory === category ? "active" : ""}" data-category="${escapeAttr(category)}" type="button">${escapeHtml(category)}</button>`)
  ].join("");
}

function renderMenuGrid() {
  const items = getVisibleMenuItems().filter((item) => menuCategory === "all" || (item.section[currentLanguage] || item.section.sq) === menuCategory);
  renderMenuCategoryBar();
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
      return `<li class="menu-row"><div class="menu-row-main"><span class="menu-row-title">${escapeHtml(item.name[currentLanguage] || item.name.sq)}</span>${badge ? `<span class="strength-pill ${badge.className}">${escapeHtml(badge.label)}</span>` : ""}</div><span class="menu-row-price">${escapeHtml(localizePrice(item.price))}</span></li>`;
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

function getStationLabel(station) {
  return station === "bar" ? tr("stationBar") : tr("stationKitchen");
}

function buildStatusChip(status) {
  return `<span class="status-chip status-${escapeAttr(status)}">${escapeHtml(getStatusLabel(status))}</span>`;
}

function buildStationSummary(invoice) {
  return `
    <div class="station-inline">
      <span>${escapeHtml(tr("stationBar"))}</span>
      ${buildStatusChip(invoice.stationStatus.bar)}
      <span>${escapeHtml(tr("stationKitchen"))}</span>
      ${buildStatusChip(invoice.stationStatus.kitchen)}
    </div>
  `;
}

function renderOrderCatalog() {
  if (!canCreateOrders()) return;
  el.orderTableInput.value = orderDraft.table;
  el.orderCustomerInput.value = orderDraft.customer;
  el.orderNoteInput.value = orderDraft.note;
  el.orderSearchInput.value = orderDraft.search;

  const categories = [...new Set(siteData.menu
    .filter((item) => isOrderableMenuItem(item))
    .map((item) => item.section[currentLanguage] || item.section.sq))];
  if (orderDraft.category !== "all" && !categories.includes(orderDraft.category)) {
    orderDraft.category = "all";
  }
  el.orderCategoryBar.innerHTML = [
    `<button class="order-category-btn ${orderDraft.category === "all" ? "active" : ""}" data-category="all" type="button">${escapeHtml(tr("allCategories"))}</button>`,
    ...categories.map((category) => `<button class="order-category-btn ${orderDraft.category === category ? "active" : ""}" data-category="${escapeAttr(category)}" type="button">${escapeHtml(category)}</button>`)
  ].join("");

  const query = orderDraft.search.trim().toLowerCase();
  const items = siteData.menu.filter((item) => {
    if (!isOrderableMenuItem(item)) return false;
    const section = item.section[currentLanguage] || item.section.sq;
    if (orderDraft.category !== "all" && section !== orderDraft.category) return false;
    if (!query) return true;
    const haystack = `${item.name.sq} ${item.name.en} ${item.section.sq} ${item.section.en}`.toLowerCase();
    return haystack.includes(query);
  });

  if (!items.length) {
    el.orderCatalog.innerHTML = `<p class="empty-state">${escapeHtml(tr("noMenuMatches"))}</p>`;
    return;
  }

  const groups = new Map();
  items.forEach((item) => {
    const section = item.section[currentLanguage] || item.section.sq;
    if (!groups.has(section)) groups.set(section, []);
    groups.get(section).push(item);
  });

  el.orderCatalog.innerHTML = [...groups.entries()].map(([section, group]) => `
    <div class="catalog-group">
      <h5>${escapeHtml(section)}</h5>
      ${group.map((item) => `
        <div class="catalog-row">
          <div>
            <p class="catalog-item-name">${escapeHtml(item.name[currentLanguage] || item.name.sq)}</p>
            <p class="ticket-meta">${escapeHtml(getStationLabel(getItemStation(item)))}</p>
          </div>
          <span class="catalog-price">${escapeHtml(localizePrice(item.price))}</span>
          <button class="btn btn-primary btn-small add-order-item" data-id="${escapeAttr(item.id)}">${escapeHtml(tr("addToOrder"))}</button>
        </div>
      `).join("")}
    </div>
  `).join("");
}

function renderOrderCart() {
  if (!canCreateOrders()) return;
  if (!orderDraft.items.length) {
    el.orderCart.innerHTML = `<p class="empty-state">${escapeHtml(tr("emptyOrder"))}</p>`;
    el.orderTotalValue.textContent = formatCurrency(0);
    return;
  }
  const total = orderDraft.items.reduce((sum, item) => sum + item.totalPrice, 0);
  el.orderTotalValue.textContent = formatCurrency(total);
  el.orderCart.innerHTML = orderDraft.items.map((item) => `
    <div class="cart-row" data-id="${escapeAttr(item.id)}">
      <div>
        <p class="cart-item-name">${escapeHtml(item.name[currentLanguage] || item.name.sq)}</p>
        <p class="ticket-meta">${escapeHtml(getStationLabel(item.station))} | ${escapeHtml(formatCurrency(item.totalPrice))}</p>
      </div>
      <div class="cart-controls">
        <button class="qty-btn update-cart-item" data-id="${escapeAttr(item.id)}" data-action="decrease">-</button>
        <span class="qty-value">${escapeHtml(item.qty)}</span>
        <button class="qty-btn update-cart-item" data-id="${escapeAttr(item.id)}" data-action="increase">+</button>
      </div>
      <input class="cart-price-input" data-id="${escapeAttr(item.id)}" type="number" min="0" step="1" value="${escapeAttr(item.unitPrice)}" />
      <button class="btn btn-ghost btn-small update-cart-item" data-id="${escapeAttr(item.id)}" data-action="remove">X</button>
    </div>
  `).join("");
}

function renderWaiterOrders() {
  if (!canCreateOrders()) return;
  const ownInvoices = invoices.filter((invoice) => !session || invoice.waiter === session.username).slice(0, 8);
  if (!ownInvoices.length) {
    el.waiterOrders.innerHTML = `<p class="empty-state">${escapeHtml(tr("emptyWaiterOrders"))}</p>`;
    return;
  }
  el.waiterOrders.innerHTML = ownInvoices.map((invoice) => `
    <article class="invoice-card">
      <div class="invoice-head">
        <div>
          <strong>${escapeHtml(invoice.number)}</strong>
          <p class="invoice-meta">${escapeHtml(tr("orderCreated"))}: ${escapeHtml(formatDateTime(invoice.createdAt))}</p>
        </div>
        ${buildStatusChip(getInvoiceProgress(invoice))}
      </div>
      <p class="invoice-meta">${escapeHtml(tr("orderTableLabel"))}: ${escapeHtml(invoice.table || "-")} | ${escapeHtml(tr("orderCustomerLabel"))}: ${escapeHtml(invoice.customer || tr("untitledCustomer"))}</p>
      ${buildStationSummary(invoice)}
      <p class="invoice-total">${escapeHtml(formatCurrency(invoice.total))}</p>
    </article>
  `).join("");
}

function renderStationBoard(station) {
  const target = station === "bar" ? el.barBoard : el.kitchenBoard;
  const emptyKey = station === "bar" ? "emptyBarBoard" : "emptyKitchenBoard";
  if (!canViewStation(station)) return;
  const stationInvoices = invoices.filter((invoice) => invoice.stationStatus[station] !== "na");
  if (!stationInvoices.length) {
    target.innerHTML = `<p class="empty-state">${escapeHtml(tr(emptyKey))}</p>`;
    return;
  }
  target.innerHTML = stationInvoices.map((invoice) => {
    const items = invoice.items.filter((item) => item.station === station);
    const status = invoice.stationStatus[station];
    return `
      <article class="ticket-card">
        <div class="ticket-head">
          <div>
            <strong>${escapeHtml(invoice.number)}</strong>
            <p class="ticket-meta">${escapeHtml(formatDateTime(invoice.createdAt))}</p>
          </div>
          ${buildStatusChip(status)}
        </div>
        <p class="ticket-meta">${escapeHtml(tr("orderTableLabel"))}: ${escapeHtml(invoice.table || "-")} | ${escapeHtml(tr("orderCustomerLabel"))}: ${escapeHtml(invoice.customer || tr("untitledCustomer"))}</p>
        <p class="ticket-meta">${escapeHtml(getRoleLabel("waiter"))}: ${escapeHtml(invoice.waiter)}</p>
        <ul class="ticket-items">
          ${items.map((item) => `<li><span>${escapeHtml(`${item.qty}x ${item.name[currentLanguage] || item.name.sq}`)}</span><strong>${escapeHtml(formatCurrency(item.totalPrice))}</strong></li>`).join("")}
        </ul>
        ${invoice.note ? `<p class="ticket-meta">${escapeHtml(invoice.note)}</p>` : ""}
        <div class="panel-actions">
          <button class="btn btn-primary btn-small station-ready-btn" data-id="${escapeAttr(invoice.id)}" data-station="${escapeAttr(station)}" ${status === "ready" ? "disabled" : ""}>${escapeHtml(tr("markReady"))}</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderAnalytics() {
  if (!hasRole("admin")) return;
  const day = getDayBounds();
  const week = getWeekBounds();
  const month = getMonthBounds();
  el.dailyRevenueValue.textContent = formatCurrency(calculateRevenueForRange(day.start, day.end));
  el.weeklyRevenueValue.textContent = formatCurrency(calculateRevenueForRange(week.start, week.end));
  el.monthlyRevenueValue.textContent = formatCurrency(calculateRevenueForRange(month.start, month.end));
  if (!invoices.length) {
    el.invoiceHistory.innerHTML = `<p class="empty-state">${escapeHtml(tr("noInvoices"))}</p>`;
    return;
  }
  el.invoiceHistory.innerHTML = invoices.map((invoice) => `
    <article class="invoice-card">
      <div class="invoice-head">
        <div>
          <strong>${escapeHtml(invoice.number)}</strong>
          <p class="invoice-meta">${escapeHtml(formatDateTime(invoice.createdAt))}</p>
        </div>
        ${buildStatusChip(getInvoiceProgress(invoice))}
      </div>
      <p class="invoice-meta">${escapeHtml(tr("orderTableLabel"))}: ${escapeHtml(invoice.table || "-")} | ${escapeHtml(tr("orderCustomerLabel"))}: ${escapeHtml(invoice.customer || tr("untitledCustomer"))}</p>
      <p class="invoice-meta">${escapeHtml(getRoleLabel("waiter"))}: ${escapeHtml(invoice.waiter)}</p>
      <ul class="invoice-items">
        ${invoice.items.map((item) => `<li><span>${escapeHtml(`${item.qty}x ${item.name[currentLanguage] || item.name.sq}`)}</span><strong>${escapeHtml(formatCurrency(item.totalPrice))}</strong></li>`).join("")}
      </ul>
      ${buildStationSummary(invoice)}
      ${invoice.note ? `<p class="invoice-meta">${escapeHtml(invoice.note)}</p>` : ""}
      <p class="invoice-total">${escapeHtml(formatCurrency(invoice.total))}</p>
    </article>
  `).join("");
}

function renderMenuEditor() {
  if (!hasRole("admin")) {
    el.menuEditor.innerHTML = "";
    return;
  }
  el.menuEditor.innerHTML = siteData.menu.map((item, idx) => `<div class="menu-edit-row" data-index="${idx}"><input data-field="name" value="${escapeAttr(item.name[currentLanguage] || "")}" /><input data-field="section" value="${escapeAttr(item.section[currentLanguage] || "")}" /><input data-field="price" value="${escapeAttr(item.price)}" /><select data-field="type"><option value="food" ${item.type === "food" ? "selected" : ""}>food</option><option value="drink" ${item.type === "drink" ? "selected" : ""}>drink</option></select><button class="btn btn-ghost btn-small delete-menu-item" data-id="${escapeAttr(item.id)}">X</button></div>`).join("");
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
  el.usersList.innerHTML = users.map((user) => `<div class="user-row"><span>${escapeHtml(user.username)} (${escapeHtml(getRoleLabel(user.role))})</span><button class="btn btn-ghost btn-small delete-user" data-username="${escapeAttr(user.username)}" ${user.username === "admin" ? "disabled" : ""}>${escapeHtml(tr("deleteUserLabel"))}</button></div>`).join("");
  document.querySelectorAll(".delete-user").forEach((button) => button.addEventListener("click", async () => {
    if (!hasRole("admin")) return;
    if (backendAvailable === false) {
      users = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS)).filter((user) => user.username !== button.dataset.username);
      persistUsers();
      renderAll();
      return;
    }
    try {
      await apiRequest(`/api/users/${encodeURIComponent(button.dataset.username)}`, {
        method: "DELETE"
      });
      await refreshBootstrap({ render: true, preserveDraft: true });
    } catch (error) {
      alert(error.message);
    }
  }));
  el.passwordTargetUser.innerHTML = users.map((user) => `<option value="${escapeAttr(user.username)}">${escapeHtml(user.username)} (${escapeHtml(getRoleLabel(user.role))})</option>`).join("");
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
  renderAnalytics();
}

function syncDraftItem(item) {
  const qty = Math.max(1, Number(item.qty) || 1);
  const unitPrice = Math.max(0, Number(item.unitPrice) || 0);
  return {
    ...item,
    qty,
    unitPrice,
    totalPrice: Math.round(qty * unitPrice)
  };
}

function addMenuItemToDraft(menuId) {
  const menuItem = siteData.menu.find((item) => item.id === menuId);
  if (!menuItem || !isOrderableMenuItem(menuItem)) return;
  const existing = orderDraft.items.find((item) => item.menuId === menuId);
  if (existing) {
    existing.qty += 1;
    orderDraft.items = orderDraft.items.map((item) => item.id === existing.id ? syncDraftItem(item) : item);
    return;
  }
  orderDraft.items.push(syncDraftItem({
    id: `draft-${Date.now()}-${orderDraft.items.length + 1}`,
    menuId: menuItem.id,
    type: menuItem.type,
    station: getItemStation(menuItem),
    name: { ...menuItem.name },
    section: { ...menuItem.section },
    qty: 1,
    unitPrice: extractPriceValue(menuItem.price),
    priceLabel: menuItem.price
  }));
}

function updateDraftItem(itemId, action, nextValue) {
  if (action === "remove") {
    orderDraft.items = orderDraft.items.filter((item) => item.id !== itemId);
    return;
  }
  orderDraft.items = orderDraft.items.map((item) => {
    if (item.id !== itemId) return item;
    if (action === "increase") return syncDraftItem({ ...item, qty: item.qty + 1 });
    if (action === "decrease") return syncDraftItem({ ...item, qty: Math.max(1, item.qty - 1) });
    if (action === "price") return syncDraftItem({ ...item, unitPrice: nextValue });
    return item;
  });
}

async function submitCurrentOrder() {
  if (!canCreateOrders()) return;
  if (!orderDraft.items.length) {
    alert(tr("orderNeedsItems"));
    return;
  }
  if (backendAvailable === false) {
    const createdAt = new Date();
    const number = buildInvoiceNumber(createdAt);
    const items = orderDraft.items.map((item, idx) => normalizeInvoiceItem({
      ...item,
      id: `${number}-L${idx + 1}`
    }, idx));
    invoices.unshift({
      id: `${number}-${createdAt.getTime()}`,
      number,
      createdAt: createdAt.toISOString(),
      waiter: session ? session.username : "staff",
      table: orderDraft.table.trim(),
      customer: orderDraft.customer.trim(),
      note: orderDraft.note.trim(),
      items,
      total: items.reduce((sum, item) => sum + item.totalPrice, 0),
      stationStatus: buildStationStatus(items)
    });
    persistInvoices();
    orderDraft = createEmptyOrderDraft();
    renderAll();
    alert(tr("orderSubmitted"));
    return;
  }
  try {
    await apiRequest("/api/invoices", {
      method: "POST",
      body: {
        table: orderDraft.table.trim(),
        customer: orderDraft.customer.trim(),
        note: orderDraft.note.trim(),
        items: orderDraft.items
      }
    });
    orderDraft = createEmptyOrderDraft();
    await refreshBootstrap({ render: true, preserveDraft: false });
    alert(tr("orderSubmitted"));
  } catch (error) {
    alert(error.message);
  }
}

async function markStationReady(invoiceId, station) {
  if (!canViewStation(station)) return;
  if (backendAvailable === false) {
    invoices = invoices.map((invoice) => {
      if (invoice.id !== invoiceId) return invoice;
      return {
        ...invoice,
        stationStatus: {
          ...invoice.stationStatus,
          [station]: invoice.stationStatus[station] === "na" ? "na" : "ready"
        }
      };
    });
    persistInvoices();
    renderAll();
    return;
  }
  try {
    await apiRequest(`/api/invoices/${encodeURIComponent(invoiceId)}/stations/${encodeURIComponent(station)}/ready`, {
      method: "POST"
    });
    await refreshInvoicesFromServer();
  } catch (error) {
    alert(error.message);
  }
}

function applySessionUI() {
  if (!STAFF_TOOLS_ENABLED) {
    el.loginBtn.hidden = true;
    el.logoutBtn.hidden = true;
    el.manageBtn.hidden = true;
    el.orderBlock.hidden = true;
    el.barBoardBlock.hidden = true;
    el.kitchenBoardBlock.hidden = true;
    el.analyticsBlock.hidden = true;
    el.menuEditorBlock.hidden = true;
    el.generalEditorBlock.hidden = true;
    el.galleryEditorBlock.hidden = true;
    el.reviewsEditorBlock.hidden = true;
    el.usersBlock.hidden = true;
    el.passwordBlock.hidden = true;
    el.jsonEditorBlock.hidden = true;
    el.addMenuItemBtn.hidden = true;
    el.controlPanel.hidden = true;
    el.loginModal.hidden = true;
    el.sessionInfo.textContent = tr("publicSiteMode");
    return;
  }

  const logged = !!session;
  const admin = hasRole("admin");
  const orderAccess = canCreateOrders();
  const barAccess = canViewStation("bar");
  const kitchenAccess = canViewStation("kitchen");
  el.loginBtn.hidden = logged;
  el.logoutBtn.hidden = !logged;
  el.manageBtn.hidden = !logged;
  el.orderBlock.hidden = !orderAccess;
  el.barBoardBlock.hidden = !barAccess;
  el.kitchenBoardBlock.hidden = !kitchenAccess;
  el.analyticsBlock.hidden = !admin;
  el.menuEditorBlock.hidden = !admin;
  el.generalEditorBlock.hidden = !admin;
  el.galleryEditorBlock.hidden = !admin;
  el.reviewsEditorBlock.hidden = !admin;
  el.usersBlock.hidden = !admin;
  el.passwordBlock.hidden = !admin;
  el.jsonEditorBlock.hidden = !admin;
  el.addMenuItemBtn.hidden = !admin;
  el.sessionInfo.textContent = logged ? (currentLanguage === "sq" ? `I loguar si ${session.username} (${getRoleLabel(session.role)}).` : `Logged in as ${session.username} (${getRoleLabel(session.role)}).`) : tr("sessionLoggedOut");
}

function renderAll() {
  renderChrome();
  renderSite();
  renderMenuGrid();
  renderGallery();
  renderReviews();
  applySessionUI();
  if (canCreateOrders()) {
    renderOrderCatalog();
    renderOrderCart();
    renderWaiterOrders();
  }
  if (canViewStation("bar")) renderStationBoard("bar");
  if (canViewStation("kitchen")) renderStationBoard("kitchen");
  renderMenuEditor();
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

async function handleLoginSubmit() {
  if (!STAFF_TOOLS_ENABLED) return;
  if (backendAvailable === false) {
    const user = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS)).find((entry) => entry.username === el.loginUsername.value.trim() && entry.password === el.loginPassword.value.trim());
    if (!user) {
      el.loginError.textContent = tr("invalidCredentials");
      return;
    }
    initializeLocalState();
    session = { username: user.username, role: user.role };
    persistSession();
    users = normalizeUserSummaries(load(STORAGE_KEYS.users, DEFAULT_USERS));
    orderDraft = createEmptyOrderDraft();
    resetInactivityTimer();
    el.loginUsername.value = "";
    el.loginPassword.value = "";
    el.loginError.textContent = "";
    el.loginModal.hidden = true;
    renderAll();
    return;
  }
  try {
    const payload = await apiRequest("/api/auth/login", {
      method: "POST",
      body: {
        username: el.loginUsername.value.trim(),
        password: el.loginPassword.value.trim()
      },
      suppressAuthReset: true
    });
    applyBootstrap(payload, { preserveDraft: false });
    updateSyncTimer();
    el.loginUsername.value = "";
    el.loginPassword.value = "";
    el.loginError.textContent = "";
    el.loginModal.hidden = true;
    renderAll();
  } catch (error) {
    el.loginError.textContent = error.message || tr("invalidCredentials");
  }
}

function bindEvents() {
  window.addEventListener("scroll", () => el.header.classList.toggle("scrolled", window.scrollY > 20));
  ["click", "keydown", "mousemove", "scroll", "touchstart"].forEach((eventName) => {
    document.addEventListener(eventName, () => {
      if (!session) return;
      resetInactivityTimer();
    }, { passive: true });
  });
  el.menuToggle.addEventListener("click", () => el.navLinks.classList.toggle("open"));
  el.navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => el.navLinks.classList.remove("open")));
  el.langSqBtn.addEventListener("click", () => setLanguage("sq"));
  el.langEnBtn.addEventListener("click", () => setLanguage("en"));
  el.filterButtons.forEach((button) => button.addEventListener("click", () => {
    el.filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    menuFilter = button.dataset.filter;
    menuCategory = "all";
    renderMenuGrid();
  }));
  el.menuCategoryBar.addEventListener("click", (event) => {
    const button = event.target.closest(".menu-category-btn");
    if (!button) return;
    menuCategory = button.dataset.category || "all";
    renderMenuGrid();
  });
  if (typeof IntersectionObserver !== "undefined") {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.15 });
    el.revealElements.forEach((node) => observer.observe(node));
  }
  el.loginBtn.addEventListener("click", () => {
    if (!STAFF_TOOLS_ENABLED) return;
    el.loginError.textContent = "";
    el.loginPassword.type = "password";
    updatePasswordToggleLabel();
    el.loginModal.hidden = false;
  });
  el.toggleLoginPasswordBtn.addEventListener("click", () => {
    el.loginPassword.type = el.loginPassword.type === "password" ? "text" : "password";
    updatePasswordToggleLabel();
  });
  el.cancelLoginBtn.addEventListener("click", () => { el.loginModal.hidden = true; });
  el.submitLoginBtn.addEventListener("click", handleLoginSubmit);
  el.loginUsername.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLoginSubmit();
    }
  });
  el.loginPassword.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLoginSubmit();
    }
  });
  el.orderTableInput.addEventListener("input", () => { orderDraft.table = el.orderTableInput.value; });
  el.orderCustomerInput.addEventListener("input", () => { orderDraft.customer = el.orderCustomerInput.value; });
  el.orderNoteInput.addEventListener("input", () => { orderDraft.note = el.orderNoteInput.value; });
  el.orderSearchInput.addEventListener("input", () => {
    orderDraft.search = el.orderSearchInput.value;
    renderOrderCatalog();
  });
  el.orderCategoryBar.addEventListener("click", (event) => {
    const button = event.target.closest(".order-category-btn");
    if (!button) return;
    orderDraft.category = button.dataset.category || "all";
    renderOrderCatalog();
  });
  el.orderCatalog.addEventListener("click", (event) => {
    const button = event.target.closest(".add-order-item");
    if (!button) return;
    addMenuItemToDraft(button.dataset.id);
    renderOrderCart();
  });
  el.orderCart.addEventListener("click", (event) => {
    const button = event.target.closest(".update-cart-item");
    if (!button) return;
    updateDraftItem(button.dataset.id, button.dataset.action);
    renderOrderCart();
  });
  el.orderCart.addEventListener("input", (event) => {
    const input = event.target.closest(".cart-price-input");
    if (!input) return;
    updateDraftItem(input.dataset.id, "price", input.value);
    renderOrderCart();
  });
  el.submitOrderBtn.addEventListener("click", submitCurrentOrder);
  el.clearOrderBtn.addEventListener("click", () => {
    orderDraft = createEmptyOrderDraft();
    renderOrderCatalog();
    renderOrderCart();
  });
  [el.barBoard, el.kitchenBoard].forEach((board) => board.addEventListener("click", (event) => {
    const button = event.target.closest(".station-ready-btn");
    if (!button) return;
    markStationReady(button.dataset.id, button.dataset.station);
  }));
  el.logoutBtn.addEventListener("click", async () => {
    if (!STAFF_TOOLS_ENABLED) return;
    await performLogout({ render: true, notify: false });
  });
  el.manageBtn.addEventListener("click", () => {
    if (!STAFF_TOOLS_ENABLED) return;
    el.controlPanel.hidden = !el.controlPanel.hidden;
  });
  el.panelClose.addEventListener("click", () => { el.controlPanel.hidden = true; });
  el.saveMenuBtn.addEventListener("click", async () => {
    if (!hasRole("admin")) return;
    try {
      collectMenuEditor();
      persistSite();
      await saveSiteDataToServer("menuSaved");
    } catch (error) {
      alert(error.message);
    }
  });
  el.addMenuItemBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.menu.push({ id: `m${Date.now()}`, type: "food", name: { sq: "Artikull i ri", en: "New item" }, section: { sq: "Te tjera", en: "Other" }, price: "0 ALL" });
    persistSite();
    renderAll();
  });
  el.saveGeneralBtn.addEventListener("click", async () => {
    if (!hasRole("admin")) return;
    try {
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
      await saveSiteDataToServer("generalSaved");
    } catch (error) {
      alert(error.message);
    }
  });
  el.saveGalleryBtn.addEventListener("click", async () => {
    if (!hasRole("admin")) return;
    try {
      collectGalleryEditor();
      persistSite();
      await saveSiteDataToServer("gallerySaved");
    } catch (error) {
      alert(error.message);
    }
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
  el.saveReviewsBtn.addEventListener("click", async () => {
    if (!hasRole("admin")) return;
    try {
      collectReviewsEditor();
      persistSite();
      await saveSiteDataToServer("reviewsSaved");
    } catch (error) {
      alert(error.message);
    }
  });
  el.addReviewBtn.addEventListener("click", () => {
    if (!hasRole("admin")) return;
    siteData.reviews.push({ author: currentLanguage === "sq" ? "Klient i ri" : "New guest", rating: 5, date: "Google Maps", text: { sq: "Review i ri.", en: "New review." } });
    persistSite();
    renderAll();
  });
  el.applyJsonBtn.addEventListener("click", async () => {
    if (!hasRole("admin")) return;
    try {
      siteData = normalizeSiteData(JSON.parse(el.jsonEditor.value));
      persistSite();
      await saveSiteDataToServer("jsonSaved");
    } catch (error) {
      alert(error.message || tr("jsonInvalid"));
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
  el.addUserBtn.addEventListener("click", async () => {
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
    if (backendAvailable === false) {
      const storedUsers = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS));
      storedUsers.push({ username, password, role: el.newRole.value });
      users = storedUsers;
      persistUsers();
      el.newUsername.value = "";
      el.newPassword.value = "";
      renderAll();
      return;
    }
    try {
      await apiRequest("/api/users", {
        method: "POST",
        body: { username, password, role: el.newRole.value }
      });
      el.newUsername.value = "";
      el.newPassword.value = "";
      await refreshBootstrap({ render: true, preserveDraft: true });
    } catch (error) {
      alert(error.message);
    }
  });
  el.changeSelfPasswordBtn.addEventListener("click", async () => {
    if (!session) return;
    const newPassword = el.selfNewPassword.value.trim();
    if (!newPassword) {
      alert(tr("newPasswordRequired"));
      return;
    }
    if (backendAvailable === false) {
      const storedUsers = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS)).map((user) => user.username === session.username ? { ...user, password: newPassword } : user);
      users = storedUsers;
      persistUsers();
      el.selfNewPassword.value = "";
      renderAll();
      alert(tr("selfPasswordChanged"));
      return;
    }
    try {
      await apiRequest("/api/users/password", {
        method: "PATCH",
        body: { newPassword }
      });
      el.selfNewPassword.value = "";
      await refreshBootstrap({ render: true, preserveDraft: true });
      alert(tr("selfPasswordChanged"));
    } catch (error) {
      alert(error.message);
    }
  });
  el.changeUserPasswordBtn.addEventListener("click", async () => {
    if (!hasRole("admin")) return;
    const target = el.passwordTargetUser.value;
    const newPassword = el.targetNewPassword.value.trim();
    if (!target || !newPassword) {
      alert(tr("chooseUserAndPassword"));
      return;
    }
    if (backendAvailable === false) {
      const storedUsers = normalizeUsers(load(STORAGE_KEYS.users, DEFAULT_USERS)).map((user) => user.username === target ? { ...user, password: newPassword } : user);
      users = storedUsers;
      persistUsers();
      el.targetNewPassword.value = "";
      renderAll();
      return;
    }
    try {
      await apiRequest("/api/users/password", {
        method: "PATCH",
        body: { username: target, newPassword }
      });
      el.targetNewPassword.value = "";
      await refreshBootstrap({ render: true, preserveDraft: true });
    } catch (error) {
      alert(error.message);
    }
  });
}

renderAll();
bindEvents();
updatePasswordToggleLabel();
refreshBootstrap({ render: true, preserveDraft: false }).catch((error) => {
  el.sessionInfo.textContent = error.message;
});
