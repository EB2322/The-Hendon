(function () {
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
  window.HENDON_MENU_TITLE = 'Hendon Pub - MENU';
  window.HENDON_MENU = buildHendonMenu();
})();

// script.js

// Funksioni për të ndryshuar gjuhën e faqes
let currentLang = 'sq'; // default shqip

function setLanguage(lang) {
  currentLang = lang;
  renderMenu(lang);
  renderTexts(lang);
}

// ==================== MENU RENDER ====================
function renderMenu(lang) {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  // pastro grid
  menuGrid.innerHTML = '';

  // rendit sipas seksionit
  const sections = [...new Set(window.HENDON_MENU.map(item => lang === 'sq' ? item.description_sq : item.description_en))];

  sections.forEach(section => {
    // titulli i seksionit
    const sectionEl = document.createElement('div');
    sectionEl.classList.add('menu-section');

    const h3 = document.createElement('h3');
    h3.textContent = section;
    sectionEl.appendChild(h3);

    const itemsList = document.createElement('div');
    itemsList.classList.add('menu-items');

    window.HENDON_MENU
      .filter(item => (lang === 'sq' ? item.description_sq : item.description_en) === section)
      .forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('menu-item');

        const nameEl = document.createElement('p');
        nameEl.classList.add('menu-item-name');
        nameEl.textContent = lang === 'sq' ? item.name_sq : item.name_en;

        const priceEl = document.createElement('span');
        priceEl.classList.add('menu-item-price');
        priceEl.textContent = item.price;

        itemEl.appendChild(nameEl);
        itemEl.appendChild(priceEl);
        itemsList.appendChild(itemEl);
      });

    sectionEl.appendChild(itemsList);
    menuGrid.appendChild(sectionEl);
  });
}

// ==================== TEXTS RENDER ====================
function renderTexts(lang) {
  // hero
  document.getElementById('heroKicker').textContent = lang === 'sq' ? 'Pub & Grill' : 'Pub & Grill';
  document.getElementById('heroTitle').textContent = lang === 'sq' ? 'Shija e Nates ne Zemer te Qytetit' : 'The Taste of the Night in the Heart of the City';
  document.getElementById('heroLead').textContent = lang === 'sq' ? 'Atmosfere autentike, kuzhine tradicionale dhe kokteje te kuruara per cdo mbremje.' : 'Authentic atmosphere, traditional cuisine, and carefully crafted cocktails every night.';

  // about
  document.getElementById('aboutTitle').textContent = lang === 'sq' ? 'Pub me Stil Modern' : 'Modern Style Pub';
  document.getElementById('aboutText').textContent = lang === 'sq' ? 'Ne ofrojme eksperiencen me te mire te pub-it ne qytet.' : 'We offer the best pub experience in town.';

  // menu title
  document.getElementById('menuTitle').textContent = lang === 'sq' ? 'Te Preferuarat' : 'Favorites';

  // contact
  document.getElementById('contactTitle').textContent = lang === 'sq' ? 'Rezervo Tavolinen Tende' : 'Reserve Your Table';
  document.getElementById('contactText').textContent = lang === 'sq' ? 'Na kontaktoni per rezervime ose informacione.' : 'Contact us for reservations or info.';

  // footer
  document.getElementById('footerName').textContent = lang === 'sq' ? 'The Hendon Pub' : 'The Hendon Pub';
}

// ==================== LANGUAGE SWITCH BUTTONS ====================
document.addEventListener('DOMContentLoaded', () => {
  // krijo butona thjesht per test
  const langSwitch = document.createElement('div');
  langSwitch.innerHTML = `
    <button id="btn-sq">Shqip</button>
    <button id="btn-en">English</button>
  `;
  document.body.prepend(langSwitch);

  document.getElementById('btn-sq').addEventListener('click', () => setLanguage('sq'));
  document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

  renderMenu(currentLang);
  renderTexts(currentLang);
});
