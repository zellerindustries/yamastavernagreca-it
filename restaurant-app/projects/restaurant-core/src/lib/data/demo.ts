import { Menu } from "../models/menu.interface";
import { Restaurant } from "../models/restaurant.interface";

const BASE = 'https://restaurant-menu-pics.s3.eu-south-1.amazonaws.com/';

export const DEMO_MENU: Menu = {
    id: 'menu-1',
    name: 'YAMAS Taverna Greca Menu',
    categories: [
        {
            id: 'cat-1', name: 'Stuzzicheria', order: 1, items: [
                { id: 1, name: "Antipasto Misto x2", description: "tsatziki, 2 dolmades, feta, olive, 6 crocchette miste", price: 10, imageUrl: `${BASE}antipasto.webp` },
                { id: 2, name: "Tirokeftes", description: "crocchette di feta leggermente piccante", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}tirokeftes.webp` },
                { id: 3, name: "Kolokithokeftes", description: "crocchette di zucchine", price: 5, allergens: ["gluten"], imageUrl: `${BASE}kolokithokeftes.webp` },
                { id: 4, name: "Melitzanokeftes", description: "crocchette di melanzane", price: 5, allergens: ["gluten"], imageUrl: `${BASE}melitzanokeftes.webp` },
                { id: 5, name: "di pollo o manzo", description: "Stuzzicheria", price: 5, allergens: ["gluten"], imageUrl: `${BASE}keftes.webp` },
                { id: 6, name: "Bourekaki", description: "involtino di formaggio \"kasseri\" e bacon", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}bourekaki.webp` },
                { id: 7, name: "Dolmades", description: "foglie di vite ripiene di riso", price: 5, isVegan: true, imageUrl: `${BASE}dolmades.webp` },
                { id: 8, name: "Feta", description: "formaggio greco fresco", price: 6, allergens: ["milk"], imageUrl: `${BASE}feta.webp` },
                { id: 9, name: "Feta al cartoccio", description: "formaggio greco al cartoccio", price: 6.5, allergens: ["milk"], imageUrl: `${BASE}feta-cartoccio.webp` },
                { id: 10, name: "Saganaki", description: "formaggio dolce impanato alla piastra", price: 6.5, allergens: ["milk"], imageUrl: `${BASE}saganaki.webp` },
                { id: 11, name: "Souvlaki", description: "pollo / maiale / pollo - bacon", price: 3, imageUrl: `${BASE}souvlaki.webp` },
                { id: 12, name: "Dakos", description: "fresella feta, pomodoro, olive, origano", price: 5, allergens: ["gluten"], imageUrl: `${BASE}dakos.webp` },
                { id: 13, name: "Eliès", description: "olive greche Kalamata", price: 5, isVegan: true, imageUrl: `${BASE}elies.webp` },
                { id: 14, name: "Patàtes Tiganitès", description: "patatine fritte", price: 4, isVegan: true, imageUrl: `${BASE}patates.webp` },
                { id: 15, name: "TIROPITAKIA", description: "Pasta sfoglia con feta", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}tiropitakia.webp` },
                { id: 16, name: "SPANAKOPITAKIA", description: "Pasta sfoglia con spinaci", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}spanakopitakia.webp` },
                { id: 17, name: "PIPERIA", description: "Peperone ripieno di feta", price: 5.5, isVegan: true, imageUrl: `${BASE}piperia.webp` },
                { id: 18, name: "REVITHOKEFTES", description: "Crocchette di ceci", price: 5, isVegan: true, allergens: ["gluten"], imageUrl: `${BASE}revithokeftes.webp` }
            ]
        },
        {
            id: 'cat-2', name: 'Salse', order: 2, items: [
                { id: 19, name: "Yogurt greco", description: "yogurt greco", price: 4.5, allergens: ["milk"], imageUrl: `${BASE}yogurt.webp` },
                { id: 20, name: "Tsatziki", description: "yogurt greco aromatico", price: 4.5, allergens: ["milk"], imageUrl: `${BASE}tsatziki.webp` },
                { id: 21, name: "Tirokafteri", description: "yogurt greco, feta, peperoncino, lime", price: 4.5, allergens: ["milk"], isSpicy: true, imageUrl: `${BASE}tirokafteri.webp` }
            ]
        },
        {
            id: 'cat-3', name: 'Insalate', order: 3, items: [
                { id: 22, name: "Horiatiki", description: "Insalata greca pomodori, cetriolo, peperoni, cipolle, feta, olive greche", price: 7, allergens: ["milk"], imageUrl: `${BASE}horiatiki.webp` },
                { id: 23, name: "Agurodomata", description: "pomodoro, cetriolo, olive greche", price: 6, isVegan: true, imageUrl: `${BASE}agurodomata.webp` }
            ]
        },
        {
            id: 'cat-4', name: 'Pite con Carne', order: 4, items: [
                { id: 24, name: "Pita YAMAS", description: "gyros, tsatziki / tirokafteri / yogurt, cipolle, peperoni, pomodori, patatine, feta", price: 7.5, allergens: ["gluten"], imageUrl: `${BASE}pita-yamas.webp` },
                { id: 25, name: "Pita Gyros", description: "carne maiale, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-gyros.webp` },
                { id: 26, name: "Pita Souvlaki", description: "spiedino maiale fresco, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-souvlaki.webp` },
                { id: 27, name: "Pita Pollo", description: "spiedino di pollo fresco, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-pollo.webp` },
                { id: 28, name: "Pita Bifteki", description: "polpetta vitello, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-bifteki.webp` },
                { id: 29, name: "PITA LOUKANIKO", description: "Salsiccia greca - tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 7, allergens: ["gluten"], imageUrl: `${BASE}pita-loukaniko.webp` }
            ]
        },
        {
            id: 'cat-5', name: 'Pite Vegetariana', order: 5, items: [
                { id: 30, name: "Pita Bifteki vegetariana", description: "polpetta mix di verdure, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-bifteki-veg.webp` },
                { id: 31, name: "Pita Feta", description: "feta, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten", "milk"], imageUrl: `${BASE}pita-feta.webp` },
                { id: 32, name: "Pita Saganaki", description: "saganaki, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten", "milk"], imageUrl: `${BASE}pita-saganaki.webp` },
                { id: 33, name: "Pita Dolmades", description: "dolmades, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 6, allergens: ["gluten"], imageUrl: `${BASE}pita-dolmades.webp` },
                { id: 34, name: "Pita Patatine", description: "tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 5, allergens: ["gluten"], isVegan: true, imageUrl: `${BASE}pita-patatine.webp` }
            ]
        },
        {
            id: 'cat-6', name: 'Piatti con Carne e Vegetariani', order: 6, items: [
                { id: 35, name: "Yamas", description: "Gyros + 2 spiedini, tsatziki / tirokafteri / yogurt, cipolle, peperoni, pomodori, patatine, feta", price: 13, imageUrl: `${BASE}yamas.webp` },
                { id: 36, name: "Gyros", description: "carne di maiale, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}gyros.webp` },
                { id: 37, name: "Souvlaki", description: "3 spiedini di maiale, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}souvlaki.webp` },
                { id: 38, name: "Kotopulo", description: "2 spiedini di pollo, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}kotopulo.webp` },
                { id: 39, name: "Pollo Bacon", description: "2 spiedini pollo / bacon, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}pollo-bacon.webp` },
                { id: 40, name: "Bifteki", description: "2 polpette di vitello, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}bifteki.webp` },
                { id: 41, name: "Moussakà", description: "sformato di melanzane, patate, carne trita, besciamella", price: 9, allergens: ["milk"], imageUrl: `${BASE}moussaka.webp` },
                { id: 42, name: "Yamas vegetariano", description: "dolmades, feta, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 7.5, isVegan: true, imageUrl: `${BASE}yamas-veg.webp` },
                { id: 43, name: "Bifteki vegetariano", description: "2 polpette mix verdure, tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 8.5, imageUrl: `${BASE}bifteki-veg.webp` },
                { id: 44, name: "LOUKANIKO", description: "2 Salsiccie greche - tsatziki / tirokafteri / yogurt, cipolle, pomodori, patatine", price: 11.5, imageUrl: `${BASE}loukaniko.webp` },
                { id: 45, name: "MOUSSAKA' VEGETARIANO", description: "Sformato di melanzane, patate, macinato vegan, besciamella vegan", price: 9, allergens: ["milk"], imageUrl: `${BASE}moussaka-veg.webp` }
            ]
        },
        {
            id: 'cat-7', name: 'Prodotti da Aggiungere', order: 7, items: [
                { id: 46, name: "Feta (aggiunta)", description: "", price: 1, allergens: ["milk"], imageUrl: `${BASE}feta-aggiunta.webp` },
                { id: 47, name: "Saganaki (aggiunta)", description: "Formaggio dolce sulla piastra", price: 1.5, allergens: ["milk"], imageUrl: `${BASE}saganaki-aggiunta.webp` },
                { id: 48, name: "Pita (aggiunta)", description: "Pane greco", price: 0.5, allergens: ["gluten"], imageUrl: `${BASE}pita-aggiunta.webp` }
            ]
        },
        {
            id: 'cat-8', name: 'Vini', order: 8, items: [
                { id: 49, name: "Nemea - LAFKIOTI", description: "vino rosso in bottiglia 0,75cl", price: 12, imageUrl: `${BASE}nemea.webp` },
                { id: 50, name: "Retzina Malamatina", description: "vino bianco in bottiglia 0,50cl", price: 6.5, imageUrl: `${BASE}retzina.webp` },
                { id: 51, name: "Sfuso Greco (0,5L)", description: "Rosso / Bianco 0,50cl", price: 6, imageUrl: `${BASE}sfuso-05.webp` },
                { id: 52, name: "Sfuso Greco (0,25L)", description: "Rosso / Bianco 0,25cl", price: 3, imageUrl: `${BASE}sfuso-025.webp` },
                { id: 53, name: "Queen of Hearts - NICO LAZARIDI", description: "Vino Bianco in bottiglia 0,75cl", price: 12, imageUrl: `${BASE}queen.webp` },
                { id: 54, name: "Kretikos - BOUTARI", description: "Vino Bianco in bottiglia 0,75cl", price: 12, imageUrl: `${BASE}kretikos.webp` }
            ]
        },
        {
            id: 'cat-9', name: 'Birre', order: 9, items: [
                { id: 55, name: "Mythos 0,50cl", description: "bottiglia da 0,50cl", price: 6, imageUrl: `${BASE}mythos-50.webp` },
                { id: 56, name: "Mythos 0,33cl", description: "bottiglia da 0,33cl", price: 4, imageUrl: `${BASE}mythos-33.webp` },
                { id: 57, name: "Heineken 0,66cl", description: "bottiglia da 0,66cl", price: 4.5, imageUrl: `${BASE}heineken-66.webp` },
                { id: 58, name: "Heineken 0,33cl", description: "bottiglia da 0,33cl", price: 2.5, imageUrl: `${BASE}heineken-33.webp` },
                { id: 59, name: "Nastro Azzurro 0,66cl", description: "bottiglia 0,66cl", price: 4.5, imageUrl: `${BASE}nastro-66.webp` },
                { id: 60, name: "Nastro Azzurro 0,33cl", description: "bottiglia 0,33cl", price: 2.5, imageUrl: `${BASE}nastro-33.webp` },
                { id: 61, name: "Beck's 0,33cl", description: "bottiglia 0,33cl", price: 2.5, imageUrl: `${BASE}becks.webp` },
                { id: 62, name: "Ceres 0,33cl", description: "bottiglia 0,33cl", price: 3.5, imageUrl: `${BASE}ceres.webp` },
                { id: 63, name: "Tennent's 0,33cl", description: "bottiglia 0,33cl", price: 3.5, imageUrl: `${BASE}tennents.webp` },
                { id: 64, name: "Vergina rossa", description: "bottiglia 0,33cl", price: 4, imageUrl: `${BASE}vergina.webp` },
                { id: 65, name: "Fix Hellas", description: "bottiglia 0,33cl", price: 3.5, imageUrl: `${BASE}fix.webp` }
            ]
        },
        {
            id: 'cat-10', name: 'Bevande', order: 10, items: [
                { id: 66, name: "Coca Cola Zero 0,33cl", description: "", price: 2, imageUrl: `${BASE}coca-zero.webp` },
                { id: 67, name: "Coca Cola 0,33cl", description: "", price: 2, imageUrl: `${BASE}coca.webp` },
                { id: 68, name: "Fanta 0,33cl", description: "", price: 2, imageUrl: `${BASE}fanta.webp` },
                { id: 69, name: "Sprite 0,33cl", description: "", price: 2, imageUrl: `${BASE}sprite.webp` },
                { id: 70, name: "Acqua 0,50cl", description: "", price: 1.5, imageUrl: `${BASE}acqua.webp` },
                { id: 71, name: "Caffè", description: "", price: 1.5, imageUrl: `${BASE}caffe.webp` }
            ]
        },
        {
            id: 'cat-11', name: 'Dolci', order: 11, items: [
                { id: 72, name: "Yogurt e Miele", description: "yogurt greco, miele, noci, nocciole", price: 5, allergens: ["milk"], imageUrl: `${BASE}yogurt-miele.webp` },
                { id: 73, name: "Torta YAMAS", description: "yogurtcake vari gusti: miele / cioccolato / caramello / amarena", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}torta-yamas.webp` },
                { id: 74, name: "BAKLAVA'", description: "Pasta filo, sciroppo allo zucchero e noci", price: 6, allergens: ["gluten", "nuts"], imageUrl: `${BASE}baklava.webp` },
                { id: 75, name: "KATAIFI", description: "Pasta filo con ripieno di frutta secca e sciroppo allo zuccero", price: 6, allergens: ["gluten", "nuts"], imageUrl: `${BASE}kataifi.webp` }
            ]
        },
        {
            id: 'cat-12', name: 'Liquori', order: 12, items: [
                { id: 76, name: "Ouzo 12 Loukatos", description: "Liquori", price: 4, imageUrl: `${BASE}ouzo.webp` },
                { id: 77, name: "Raki", description: "grappa", price: 4, imageUrl: `${BASE}raki.webp` },
                { id: 78, name: "Samos", description: "passito, naturalmente dolce, bianco", price: 4, imageUrl: `${BASE}samos.webp` }
            ]
        }
    ]
};

export const DEMO_RESTAURANT: Restaurant = {
    name: 'YAMAS Taverna Greca',
    logoUrl: `${BASE}logo.svg`,
    address: 'Via Nazionale delle Puglie 69, San Vitaliano NA',
    phone: '+39 081 344 50 57',
    // email: 'info@yamastaverna.it',
    navLinks: [{ text: 'Prenota', href: '#prenota' }, { text: 'Scopri il Menu', href: '#menu' }, { text: 'Chi Siamo', href: '#chi-siamo' }],
    footerLinks: [{ text: 'Privacy Policy', href: '#privacy' }, { text: 'Terms of Service', href: '#terms' }],
    rapidActions: [{ name: 'Chiama', type: 'phone' }, { name: 'Scrivi Email', type: 'email' }, { name: 'Indicazioni', type: 'directions' }, { name: 'Prenota', type: 'reserve' }],
    description: `Benvenuti allo YAMAS – Taverna Greca.\nAutentica cucina greca nel cuore di San Vitaliano NA.`,
    menuItems: DEMO_MENU.categories.flatMap(c => c.items)
};