import { Menu } from "../models/menu.interface";
import { Restaurant } from "../models/restaurant.interface";

const BASE = 'https://restaurant-menu-pics.s3.eu-south-1.amazonaws.com/';

export const DEMO_MENU: Menu = {
    id: "menu-1",
    name: "YAMAS Taverna Greca Menu",
    categories: [
        {
            id: "cat-1",
            name: "Stuzzicheria",
            order: 1,
            items: [
                { id: 1, name: "Antipasto Misto x2", description: "Tsatziki, 2 dolmades, feta, olive, 6 crocchette miste", price: 10, imageUrl: `${BASE}antipasto.webp` },
                { id: 2, name: "Tirokeftes", description: "Crocchette di feta leggermente piccante", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}tirokeftes.webp` },
                { id: 3, name: "Kolokithokeftes", description: "Crocchette di zucchine", price: 5, allergens: ["gluten"], imageUrl: `${BASE}kolokithokeftes.webp` },
                { id: 4, name: "Melitzanokeftes", description: "Crocchette di melanzane", price: 5, allergens: ["gluten"], imageUrl: `${BASE}melitzanokeftes.webp` },
                { id: 5, name: "Keftes di Pollo o Manzo", description: "Crocchette di carne", price: 5, allergens: ["gluten"], imageUrl: `${BASE}keftes.webp` },
                { id: 6, name: "Bourekaki", description: "3 Involtini di formaggio Kasseri e bacon", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}bourekaki.webp` },
                { id: 7, name: "Dolmades", description: "Foglie di vite ripiene di riso", price: 5, isVegan: true, imageUrl: `${BASE}dolmades.webp` },
                { id: 8, name: "Feta", description: "Formaggio greco fresco", price: 6, allergens: ["milk"], imageUrl: `${BASE}feta.webp` },
                { id: 9, name: "Feta al Cartoccio", description: "Formaggio greco al cartoccio", price: 6.5, allergens: ["milk"], imageUrl: `${BASE}feta-cartoccio.webp` },
                { id: 10, name: "Saganaki", description: "Formaggio dolce impanato sulla piastra", price: 6.5, allergens: ["milk"], imageUrl: `${BASE}saganaki.webp` },
                { id: 11, name: "Souvlaki", description: "Uno spiedino di pollo o maiale o pollo-bacon", price: 3, imageUrl: `${BASE}souvlaki-singolo.webp` },
                { id: 12, name: "Dakos", description: "Fresella con feta, pomodoro, olive e origano", price: 5, allergens: ["gluten"], imageUrl: `${BASE}dakos.webp` },
                { id: 13, name: "Eliès", description: "Olive greche Kalamata", price: 5, isVegan: true, imageUrl: `${BASE}elies.webp` },
                { id: 14, name: "Patàtes Tiganitès", description: "Patatine fritte", price: 4, isVegan: true, imageUrl: `${BASE}patates.webp` },
                { id: 15, name: "Tiropitakia", description: "Pasta sfoglia ripiena di feta", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}tiropitakia.webp` },
                { id: 16, name: "Spanakopitakia", description: "Pasta sfoglia ripiena di spinaci e feta", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}spanakopitakia.webp` },
                { id: 17, name: "Piperia", description: "Peperone ripieno di feta", price: 5.5, imageUrl: `${BASE}piperia.webp` },
                { id: 18, name: "Revithokeftes", description: "Crocchette di ceci", price: 5, isVegan: true, allergens: ["gluten"], imageUrl: `${BASE}revithokeftes.webp` }
            ]
        },

        {
            id: "cat-2",
            name: "Salse",
            order: 2,
            items: [
                { id: 19, name: "Yogurt Greco", description: "Yogurt greco naturale", price: 4.5, allergens: ["milk"], imageUrl: `${BASE}salsa.webp` },
                { id: 20, name: "Tsatziki", description: "Yogurt greco aromatico con cetriolo e aglio", price: 4.5, allergens: ["milk"], imageUrl: `${BASE}salsa.webp` },
                { id: 21, name: "Tirokafteri", description: "Yogurt greco, feta, peperoncino e lime", price: 4.5, allergens: ["milk"], isSpicy: true, imageUrl: `${BASE}salsa.webp` }
            ]
        },

        {
            id: "cat-3",
            name: "Insalate",
            order: 3,
            items: [
                { id: 22, name: "Horiatiki", description: "Insalata greca con pomodori, cetriolo, peperoni, cipolle, feta e olive", price: 7, allergens: ["milk"], imageUrl: `${BASE}horiatiki.webp` },
                { id: 23, name: "Agurodomata", description: "Insalata con pomodoro, cetriolo e olive greche", price: 6, isVegan: true, imageUrl: `${BASE}agurodomata.webp` }
            ]
        },

        {
            id: "cat-4",
            name: "Pite con Carne",
            order: 4,
            items: [
                { id: 24, name: "Pita Yamas", description: "Gyros (carne di maiale), tsatziki/tirokafteri/yogurt, cipolle, peperoni, pomodori, patatine, feta", price: 7.5, allergens: ["gluten"], imageUrl: `${BASE}pita-gyros.webp` },
                { id: 25, name: "Pita Gyros", description: "Carne di maiale, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-gyros.webp` },
                { id: 26, name: "Pita Souvlaki", description: "Spiedino di maiale fresco, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-souvlaki.webp` },
                { id: 27, name: "Pita Pollo", description: "Spiedino di pollo fresco, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-pollo.webp` },
                { id: 28, name: "Pita Bifteki", description: "Polpetta di vitello, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-bifteki.webp` },
                { id: 29, name: "Pita Loukaniko", description: "Salsiccia greca, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 7, allergens: ["gluten"], imageUrl: `${BASE}pita-loukaniko.webp` }
            ]
        },

        {
            id: "cat-5",
            name: "Pite Vegetariane",
            order: 5,
            items: [
                { id: 30, name: "Pita Bifteki Vegetariana", description: "Polpetta di verdure, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-bifteki-veg.webp` },
                { id: 31, name: "Pita Feta", description: "Feta, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten", "milk"], imageUrl: `${BASE}pita-feta.webp` },
                { id: 32, name: "Pita Saganaki", description: "Saganaki, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6.5, allergens: ["gluten", "milk"], imageUrl: `${BASE}pita-saganaki.webp` },
                { id: 33, name: "Pita Dolmades", description: "Dolmades, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 6, allergens: ["gluten"], imageUrl: `${BASE}pita-dolmades.webp` },
                { id: 34, name: "Pita Patatine", description: "Tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 5, allergens: ["gluten"], isVegan: true, imageUrl: `${BASE}pita-patatine.webp` }
            ]
        },

        {
            id: "cat-6",
            name: "Piatti con Carne e Vegetariani",
            order: 6,
            items: [
                { id: 35, name: "Yamas", description: "Gyros (carne di maiale) + 2 spiedini, tsatziki/tirokafteri/yogurt, cipolle, peperoni, pomodori, patatine, feta", price: 13, imageUrl: `${BASE}yamas.webp` },
                { id: 36, name: "Gyros", description: "Carne di maiale, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}gyros.webp` },
                { id: 37, name: "Souvlaki", description: "3 spiedini di maiale, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}souvlaki.webp` },
                { id: 38, name: "Kotopulo", description: "2 spiedini di pollo, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}kotopulo.webp` },
                { id: 39, name: "Pollo Bacon", description: "2 spiedini pollo/bacon, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}pollo-bacon.webp` },
                { id: 40, name: "Bifteki", description: "2 polpette di vitello, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 11, imageUrl: `${BASE}bifteki.webp` },
                { id: 41, name: "Moussakà", description: "Sformato di melanzane, patate, carne trita e besciamella", price: 9, allergens: ["milk"], imageUrl: `${BASE}moussaka.webp` },
                { id: 42, name: "Yamas Vegetariano", description: "Dolmades, feta, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 7.5, isVegan: true, imageUrl: `${BASE}yamas-veg.webp` },
                { id: 43, name: "Bifteki Vegetariano", description: "2 polpette di verdure, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 8.5, imageUrl: `${BASE}bifteki-veg.webp` },
                { id: 44, name: "Loukaniko", description: "2 salsicce greche, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", price: 11.5, imageUrl: `${BASE}loukaniko.webp` },
                { id: 45, name: "Moussakà Vegetariana", description: "Sformato di melanzane, patate, macinato vegano e besciamella vegana", price: 9, imageUrl: `${BASE}moussaka-veg.webp` }
            ]
        },

        {
            id: "cat-7",
            name: "Prodotti da Aggiungere",
            order: 7,
            items: [
                { id: 46, name: "Feta (aggiunta)", description: "Porzione extra di feta", price: 1, allergens: ["milk"], imageUrl: `${BASE}feta-aggiunta.webp` },
                { id: 47, name: "Saganaki (aggiunta)", description: "Formaggio dolce  sulla piastra", price: 1.5, allergens: ["milk"], imageUrl: `${BASE}saganaki-aggiunta.webp` },
                { id: 48, name: "Pita (aggiunta)", description: "Pane greco", price: 0.5, allergens: ["gluten"], imageUrl: `${BASE}pita.webp` }
            ]
        },

        {
            id: "cat-8",
            name: "Vini",
            order: 8,
            items: [
                { id: 49, name: "Nemea - LAFKIOTI", description: "Vino rosso in bottiglia 0,75 L", price: 12, imageUrl: `${BASE}nemea.webp` },
                { id: 50, name: "Retzina Malamatina", description: "Vino bianco in bottiglia 0,50 L", price: 6.5, imageUrl: `${BASE}retzina.webp` },
                { id: 51, name: "Sfuso Greco (0,5 L)", description: "Rosso/Bianco 0,50 L", price: 6, imageUrl: `${BASE}sfuso-05.webp` },
                { id: 52, name: "Sfuso Greco (0,25 L)", description: "Rosso/Bianco 0,25 L", price: 3, imageUrl: `${BASE}sfuso-025.webp` },
                { id: 53, name: "Queen of Hearts - NICO LAZARIDI", description: "Vino bianco in bottiglia 0,75 L", price: 12, imageUrl: `${BASE}queen.webp` },
                { id: 54, name: "Kretikos - BOUTARI", description: "Vino bianco in bottiglia 0,75 L", price: 12, imageUrl: `${BASE}kretikos.webp` }
            ]
        },

        {
            id: "cat-9",
            name: "Birre",
            order: 9,
            items: [
                { id: 55, name: "Mythos 0,50 L", description: "Bottiglia 0,50 L", price: 6, imageUrl: `${BASE}mythos-50.webp` },
                { id: 56, name: "Mythos 0,33 L", description: "Bottiglia 0,33 L", price: 4, imageUrl: `${BASE}mythos-33.webp` },
                { id: 57, name: "Heineken 0,66 L", description: "Bottiglia 0,66 L", price: 4.5, imageUrl: `${BASE}heineken.webp` },
                { id: 58, name: "Heineken 0,33 L", description: "Bottiglia 0,33 L", price: 2.5, imageUrl: `${BASE}heineken.webp` },
                { id: 59, name: "Nastro Azzurro 0,66 L", description: "Bottiglia 0,66 L", price: 4.5, imageUrl: `${BASE}nastro.webp` },
                { id: 60, name: "Nastro Azzurro 0,33 L", description: "Bottiglia 0,33 L", price: 2.5, imageUrl: `${BASE}nastro.webp` },
                { id: 61, name: "Beck's 0,33 L", description: "Bottiglia 0,33 L", price: 2.5, imageUrl: `${BASE}becks.webp` },
                { id: 62, name: "Ceres 0,33 L", description: "Bottiglia 0,33 L", price: 3.5, imageUrl: `${BASE}ceres.webp` },
                { id: 63, name: "Tennent's 0,33 L", description: "Bottiglia 0,33 L", price: 3.5, imageUrl: `${BASE}tennents.webp` },
                { id: 64, name: "Vergina Rossa", description: "Bottiglia 0,33 L", price: 4, imageUrl: `${BASE}vergina.webp` },
                { id: 65, name: "Fix Hellas", description: "Bottiglia 0,33 L", price: 3.5, imageUrl: `${BASE}fix.webp` }
            ]
        },

        {
            id: "cat-10",
            name: "Bevande",
            order: 10,
            items: [
                { id: 66, name: "Coca Cola Zero 0,33 L", description: "Bibita analcolica", price: 2, imageUrl: `${BASE}coca-zero.webp` },
                { id: 67, name: "Coca Cola 0,33 L", description: "Bibita analcolica", price: 2, imageUrl: `${BASE}coca.webp` },
                { id: 68, name: "Fanta 0,33 L", description: "Bibita analcolica", price: 2, imageUrl: `${BASE}fanta.webp` },
                { id: 69, name: "Sprite 0,33 L", description: "Bibita analcolica", price: 2, imageUrl: `${BASE}sprite.webp` },
                { id: 70, name: "Acqua 0,50 L", description: "Acqua naturale", price: 1.5, imageUrl: `${BASE}acqua.webp` },
                { id: 71, name: "Caffè", description: "Espresso", price: 1.5, imageUrl: `${BASE}caffe.webp` }
            ]
        },

        {
            id: "cat-11",
            name: "Dolci",
            order: 11,
            items: [
                { id: 72, name: "Yogurt e Miele", description: "Yogurt greco con miele, noci e nocciole", price: 5, allergens: ["milk"], imageUrl: `${BASE}yogurt-miele.webp` },
                { id: 73, name: "Torta Yamas", description: "Yogurt cake vari gusti: miele, cioccolato, caramello, amarena", price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}torta-yamas.webp` },
                { id: 74, name: "Baklava", description: "Pasta filo con sciroppo allo zucchero e noci", price: 6, allergens: ["gluten", "nuts"], imageUrl: `${BASE}baklava.webp` },
                { id: 75, name: "Kataifi", description: "Pasta filo con ripieno di frutta secca e sciroppo", price: 6, allergens: ["gluten", "nuts"], imageUrl: `${BASE}kataifi.webp` }
            ]
        },

        {
            id: "cat-12",
            name: "Liquori",
            order: 12,
            items: [
                { id: 76, name: "Ouzo 12 Loukatos", description: "Liquore greco", price: 4, imageUrl: `${BASE}ouzo.webp` },
                { id: 77, name: "Raki", description: "Grappa", price: 4, imageUrl: `${BASE}raki.webp` },
                { id: 78, name: "Samos", description: "Passito bianco naturalmente dolce", price: 4, imageUrl: `${BASE}samos.webp` }
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