import { MenuItem } from "../models/menu.interface";
import { Restaurant } from "../models/restaurant.interface";

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

export const DEMO_RESTAURANT: Restaurant = {
    name: 'YAMAS Taverna Greca',
    logoUrl: 'assets/images/placeholder.webp',
    address: 'Via Nazionale delle Puglie 69, San Vitaliano NA',
    phone: '+39 081 344 50 57',
    email: 'info@yamastaverna.it',
    navLinks: [
        { text: 'Prenota', href: '#prenota' },
        { text: 'Scopri il Menu', href: '#menu' },
        { text: 'Chi Siamo', href: '#chi-siamo' }
    ],
    footerLinks: [
        { text: 'Privacy Policy', href: '#privacy' },
        { text: 'Terms of Service', href: '#terms' }
    ],
    rapidActions: [
        { name: 'Chiama', type: 'phone' },
        { name: 'Scrivi Email', type: 'email' },
        { name: 'Indicazioni', type: 'directions' },
        { name: 'Prenota', type: 'reserve' }
    ],
    description: `Benvenuti allo YAMAS – Taverna Greca.
  Autentica cucina greca nel cuore di San Vitaliano NA.`,
    menuItems: DEMO_MENU_ITEMS
};
