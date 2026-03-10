(function () {
  function buildHendonMenu() {
    const items = [];
    const add = (type, section_sq, section_en, name_sq, name_en, price) => {
      items.push({
        id: `m${items.length + 1}`,
        type,
        name_sq,
        name_en,
        description_sq: section_sq,
        description_en: section_en,
        price
      });
    };

    // ================= DRINKS =================
    add("drink", "KAFE", "COFFEE", "Kafe", "Coffee", "120 ALL");
    add("drink", "KAFE", "COFFEE", "Kafe e ftohte", "Iced Coffee", "150 ALL");
    add("drink", "KAFE", "COFFEE", "Makiato", "Macchiato", "130 ALL");
    add("drink", "KAFE", "COFFEE", "Makiato e ftohte", "Iced Macchiato", "150 ALL");
    add("drink", "KAFE", "COFFEE", "Cappuccino", "Cappuccino", "180 ALL");
    add("drink", "KAFE", "COFFEE", "Cappuccino (bustine)", "Cappuccino (pack)", "180 ALL");
    add("drink", "KAFE", "COFFEE", "Cappuccino e ftohte", "Iced Cappuccino", "250 ALL");
    add("drink", "KAFE", "COFFEE", "Cokollate e ngrohte", "Hot Chocolate", "200 ALL");
    add("drink", "KAFE", "COFFEE", "Cokollate e ftohte", "Iced Chocolate", "250 ALL");
    add("drink", "KAFE", "COFFEE", "Kakao e ngrohte", "Hot Cocoa", "200 ALL");
    add("drink", "KAFE", "COFFEE", "Kakao e ftohte", "Iced Cocoa", "250 ALL");
    add("drink", "KAFE", "COFFEE", "Salep", "Salep", "150 ALL");
    add("drink", "KAFE", "COFFEE", "Caj (bustine)", "Tea (bag)", "120 ALL");
    add("drink", "KAFE", "COFFEE", "Caj bio", "Organic Tea", "250 ALL");
    add("drink", "KAFE", "COFFEE", "Frape", "Frappe", "250 ALL");

    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Uje Lajthiza", "Hazelnut Water", "100 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Uje pa gaz (M250)", "Still Water (M250)", "150 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Uje me gaz (M250)", "Sparkling Water (M250)", "150 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Coca Cola", "Coca Cola", "200 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Lemon Soda", "Lemon Soda", "200 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Oran Soda", "Orange Soda", "200 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Ice Tea pjeshke", "Peach Iced Tea", "200 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Ice Tea limon", "Lemon Iced Tea", "200 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Red Bull", "Red Bull", "400 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Rose Lemonade", "Rose Lemonade", "400 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Britvic", "Britvic", "200 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Tonic Fentimans", "Fentimans Tonic", "400 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Grodino", "Grodino", "200 ALL");
    add("drink", "PIJE TE FRESKTA", "FRESH DRINKS", "Bitter", "Bitter", "180 ALL");

    add("drink", "APERITIV", "APERITIV", "Aperol Spritz", "Aperol Spritz", "500 ALL");
    add("drink", "APERITIV", "APERITIV", "Campari Spritz", "Campari Spritz", "500 ALL");
    add("drink", "APERITIV", "APERITIV", "Hugo", "Hugo", "500 ALL");

    // ================= FOOD =================
    add("food", "MENGJESI", "BREAKFAST", "Classic Benedict", "Classic Benedict", "500 ALL");
    add("food", "MENGJESI", "BREAKFAST", "Omlete normale", "Regular Omelette", "250 ALL");
    add("food", "MENGJESI", "BREAKFAST", "Egg Poached", "Poached Egg", "300 ALL");
    add("food", "MENGJESI", "BREAKFAST", "Sunny Side Up", "Sunny Side Up", "250 ALL");
    add("food", "MENGJESI", "BREAKFAST", "Ham & Cheese Sandwich", "Ham & Cheese Sandwich", "150 ALL");
    add("food", "MENGJESI", "BREAKFAST", "Ham, Egg & Cheese Sandwich", "Ham, Egg & Cheese Sandwich", "170 ALL");
    add("food", "MENGJESI", "BREAKFAST", "Hash Browns", "Hash Browns", "150 ALL");
    add("food", "MENGJESI", "BREAKFAST", "French Toast", "French Toast", "300 ALL");
    add("food", "MENGJESI", "BREAKFAST", "Petulla", "Pancakes", "200 ALL");

    add("food", "MASDITE / SNACKS", "LUNCH / SNACKS", "Mini Burger", "Mini Burger", "450 ALL");
    add("food", "MASDITE / SNACKS", "LUNCH / SNACKS", "Chicken Wings", "Chicken Wings", "700 ALL");
    add("food", "MASDITE / SNACKS", "LUNCH / SNACKS", "Chicken Fingers", "Chicken Fingers", "650 ALL");
    add("food", "MASDITE / SNACKS", "LUNCH / SNACKS", "Onion Rings", "Onion Rings", "350 ALL");
    add("food", "MASDITE / SNACKS", "LUNCH / SNACKS", "Kroketa", "Croquettes", "350 ALL");
    add("food", "MASDITE / SNACKS", "LUNCH / SNACKS", "Patate fritel", "French Fries", "300 ALL");

    return items;
  }

  window.HENDON_MENU_TITLE = 'Hendon Pub - MENU';
  window.HENDON_MENU = buildHendonMenu();
})();
