import { MenuItem } from './menu.interface';

/**
 * Demo menu items for YAMAS Taverna Greca

export const DEMO_MENU_ITEMS: MenuItem[] = [
    {
        id: 1,
        name: 'Antipasto Yamas',
        description: 'Feta DOP, olive Kalamata, polpette miste e dolmades.',
        price: 12.0,
        imageUrl: 'assets/images/placeholder.webp',
        isVegan: false,
        isSpicy: false,
        allergens: ['dairy', 'gluten', 'eggs']
    },
    {
        id: 2,
        name: 'Moussaka',
        description: 'Strati di melanzane, patate, carne macinata di vitello e besciamella.',
        price: 14.0,
        imageUrl: 'assets/images/placeholder.webp',
        isVegan: false,
        isSpicy: false,
        allergens: ['dairy', 'gluten']
    },
    {
        id: 3,
        name: 'Pita Gyros',
        description: 'Carne di maiale, patatine, pomodoro, cipolla e salsa tzatziki in pita.',
        price: 11.0,
        imageUrl: 'assets/images/placeholder.webp',
        isVegan: false,
        isSpicy: false,
        allergens: ['gluten', 'dairy']
    },
    {
        id: 4,
        name: 'Piatto Yamas',
        description: 'Carne di maiale a fette, 2 spiedini di carne, patatine, verdure e salsa tzatziki.',
        price: 16.0,
        imageUrl: 'assets/images/placeholder.webp',
        isVegan: false,
        isSpicy: false,
        allergens: ['gluten', 'dairy']
    }
];
 */

export const DEMO_MENU_ITEMS: MenuItem[] = [
    { id: 1, name: "Antipasto Misto x2", description: "STUZZICHERIA", price: 10 },
    { id: 2, name: "Tirokeftes", description: "STUZZICHERIA", price: 5, allergens: ["milk", "gluten"] },
    { id: 3, name: "Kolokithokeftes", description: "STUZZICHERIA", price: 5, allergens: ["gluten"] },
    { id: 4, name: "Melitzanokeftes", description: "STUZZICHERIA", price: 5, allergens: ["gluten"] },
    { id: 5, name: "Keftes", description: "STUZZICHERIA", price: 5, allergens: ["gluten"] },
    { id: 6, name: "Bourekaki", description: "STUZZICHERIA", price: 5, allergens: ["milk", "gluten"] },
    { id: 7, name: "Dolmades", description: "STUZZICHERIA", price: 5, isVegan: true },
    { id: 8, name: "Feta", description: "STUZZICHERIA", price: 6, allergens: ["milk"] },
    { id: 9, name: "Feta al cartoccio", description: "STUZZICHERIA", price: 6.5, allergens: ["milk"] },
    { id: 10, name: "Saganaki", description: "STUZZICHERIA", price: 6.5, allergens: ["milk"] },
    { id: 11, name: "Souvlaki", description: "STUZZICHERIA", price: 3 },
    { id: 12, name: "Dakos", description: "STUZZICHERIA", price: 5, allergens: ["gluten"] },
    { id: 13, name: "Eliès", description: "STUZZICHERIA", price: 5, isVegan: true },
    { id: 14, name: "Patàtes Tiganitès", description: "STUZZICHERIA", price: 4, isVegan: true },
    { id: 15, name: "TIROPITAKIA", description: "STUZZICHERIA", price: 5, allergens: ["milk", "gluten"] },
    { id: 16, name: "SPANAKOPITAKIA", description: "STUZZICHERIA", price: 5, allergens: ["milk", "gluten"] },
    { id: 17, name: "PIPERIA", description: "STUZZICHERIA", price: 5.5, isVegan: true },
    { id: 18, name: "REVITHOKEFTES", description: "STUZZICHERIA", price: 5, isVegan: true, allergens: ["gluten"] },

    { id: 19, name: "Yogurt greco", description: "SALSE", price: 4.5, allergens: ["milk"] },
    { id: 20, name: "Tsatziki", description: "SALSE", price: 4.5, allergens: ["milk"] },
    { id: 21, name: "Tirokafteri", description: "SALSE", price: 4.5, allergens: ["milk"], isSpicy: true },

    { id: 22, name: "Horiatiki", description: "INSALATE", price: 7, allergens: ["milk"] },
    { id: 23, name: "Agurodomata", description: "INSALATE", price: 6, isVegan: true },

    { id: 24, name: "Pita YAMAS", description: "PITE CON CARNE", price: 7.5, allergens: ["gluten"] },
    { id: 25, name: "Pita Gyros", description: "PITE CON CARNE", price: 6.5, allergens: ["gluten"] },
    { id: 26, name: "Pita Souvlaki", description: "PITE CON CARNE", price: 6.5, allergens: ["gluten"] },
    { id: 27, name: "Pita Pollo", description: "PITE CON CARNE", price: 6.5, allergens: ["gluten"] },
    { id: 28, name: "Pita Bifteki", description: "PITE CON CARNE", price: 6.5, allergens: ["gluten"] },
    { id: 29, name: "PITA LOUKANIKO", description: "PITE CON CARNE", price: 7, allergens: ["gluten"] },

    { id: 30, name: "Pita Bifteki vegetariana", description: "PITE VEGETARIANE", price: 6.5, allergens: ["gluten"] },
    { id: 31, name: "Pita Feta", description: "PITE VEGETARIANE", price: 6.5, allergens: ["gluten", "milk"] },
    { id: 32, name: "Pita Saganaki", description: "PITE VEGETARIANE", price: 6.5, allergens: ["gluten", "milk"] },
    { id: 33, name: "Pita Dolmades", description: "PITE VEGETARIANE", price: 6, allergens: ["gluten"] },
    { id: 34, name: "Pita Patatine", description: "PITE VEGETARIANE", price: 5, allergens: ["gluten"], isVegan: true },

    { id: 35, name: "Yamas", description: "PIATTI CON CARNE E VEGETARIANI", price: 13 },
    { id: 36, name: "Gyros", description: "PIATTI CON CARNE E VEGETARIANI", price: 11 },
    { id: 37, name: "Souvlaki", description: "PIATTI CON CARNE E VEGETARIANI", price: 11 },
    { id: 38, name: "Kotopulo", description: "PIATTI CON CARNE E VEGETARIANI", price: 11 },
    { id: 39, name: "Pollo Bacon", description: "PIATTI CON CARNE E VEGETARIANI", price: 11 },
    { id: 40, name: "Bifteki", description: "PIATTI CON CARNE E VEGETARIANI", price: 11 },
    { id: 41, name: "Moussakà", description: "PIATTI CON CARNE E VEGETARIANI", price: 9, allergens: ["milk"] },
    { id: 42, name: "Yamas vegetariano", description: "PIATTI CON CARNE E VEGETARIANI", price: 7.5, isVegan: true },
    { id: 43, name: "Bifteki vegetariano", description: "PIATTI CON CARNE E VEGETARIANI", price: 8.5 },
    { id: 44, name: "LOUKANIKO", description: "PIATTI CON CARNE E VEGETARIANI", price: 11.5 },
    { id: 45, name: "MOUSSAKA' VEGETARIANO", description: "PIATTI CON CARNE E VEGETARIANI", price: 9, allergens: ["milk"] },

    { id: 46, name: "Feta (aggiunta)", description: "PRODOTTI DA AGGIUNGERE", price: 1, allergens: ["milk"] },
    { id: 47, name: "Saganaki (aggiunta)", description: "PRODOTTI DA AGGIUNGERE", price: 1.5, allergens: ["milk"] },
    { id: 48, name: "Pita (aggiunta)", description: "PRODOTTI DA AGGIUNGERE", price: 0.5, allergens: ["gluten"] },

    { id: 49, name: "Nemea - LAFKIOTI", description: "VINI", price: 12 },
    { id: 50, name: "Retzina Malamatina", description: "VINI", price: 6.5 },
    { id: 51, name: "Sfuso Greco (0,5L)", description: "VINI", price: 6 },
    { id: 52, name: "Sfuso Greco (0,25L)", description: "VINI", price: 3 },
    { id: 53, name: "Queen of Hearts - NICO LAZARIDI", description: "VINI", price: 12 },
    { id: 54, name: "Kretikos - BOUTARI", description: "VINI", price: 12 },

    { id: 55, name: "Mythos 0,50cl", description: "BIRRE", price: 6 },
    { id: 56, name: "Mythos 0,33cl", description: "BIRRE", price: 4 },
    { id: 57, name: "Heineken 0,66cl", description: "BIRRE", price: 4.5 },
    { id: 58, name: "Heineken 0,33cl", description: "BIRRE", price: 2.5 },
    { id: 59, name: "Nastro Azzurro 0,66cl", description: "BIRRE", price: 4.5 },
    { id: 60, name: "Nastro Azzurro 0,33cl", description: "BIRRE", price: 2.5 },
    { id: 61, name: "Beck's 0,33cl", description: "BIRRE", price: 2.5 },
    { id: 62, name: "Ceres 0,33cl", description: "BIRRE", price: 3.5 },
    { id: 63, name: "Tennent's 0,33cl", description: "BIRRE", price: 3.5 },
    { id: 64, name: "Vergina rossa", description: "BIRRE", price: 4 },
    { id: 65, name: "Fix Hellas", description: "BIRRE", price: 3.5 },

    { id: 66, name: "Coca Cola Zero 0,33cl", description: "BEVANDE", price: 2 },
    { id: 67, name: "Coca Cola 0,33cl", description: "BEVANDE", price: 2 },
    { id: 68, name: "Fanta 0,33cl", description: "BEVANDE", price: 2 },
    { id: 69, name: "Sprite 0,33cl", description: "BEVANDE", price: 2 },
    { id: 70, name: "Acqua 0,50cl", description: "BEVANDE", price: 1.5 },
    { id: 71, name: "Caffè", description: "BEVANDE", price: 1.5 },

    { id: 72, name: "Yogurt e Miele", description: "DOLCI", price: 5, allergens: ["milk"] },
    { id: 73, name: "Torta YAMAS", description: "DOLCI", price: 5, allergens: ["milk", "gluten"] },
    { id: 74, name: "BAKLAVA'", description: "DOLCI", price: 6, allergens: ["gluten", "nuts"] },
    { id: 75, name: "KATAIFI", description: "DOLCI", price: 6, allergens: ["gluten", "nuts"] },

    { id: 76, name: "Ouzo 12 Loukatos", description: "LIQUORI", price: 4 },
    { id: 77, name: "Raki", description: "LIQUORI", price: 4 },
    { id: 78, name: "Samos", description: "LIQUORI", price: 4 }
];

/**
 * Demo restaurant info for YAMAS Taverna Greca
 */
export const DEMO_RESTAURANT = {
    name: 'YAMAS Taverna Greca',
    logoUrl: 'assets/images/placeholder.webp',
    address: 'Via Nazionale delle Puglie 69, San Vitaliano NA',
    phone: '+39 081 344 50 57',
    email: 'info@yamastaverna.it',
    footerLinks: [
        { text: 'Privacy Policy', href: '#privacy' },
        { text: 'Terms of Service', href: '#terms' }
    ],
    navLinks: [
        { text: 'Prenota', href: '#prenota' },
        { text: 'Scopri il Menu', href: '#menu' },
        { text: 'Chi Siamo', href: '#chi-siamo' }
    ],
    rapidActions: [
        { name: 'Chiama', type: 'phone' },
        { name: 'Scrivi Email', type: 'email' },
        { name: 'Indicazioni', type: 'directions' },
        { name: 'Prenota', type: 'reserve' }
    ]
};
