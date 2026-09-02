import { Menu } from "../models/menu.interface";
import { Restaurant } from "../models/restaurant.interface";

const BASE = 'https://restaurant-menu-pics.s3.eu-south-1.amazonaws.com/';

export const DEMO_MENU: Menu = {
    id: "menu-1",
    name: { it: "YAMAS Taverna Greca Menu", en: "YAMAS Greek Taverna Menu" },
    categories: [
        {
            id: "cat-1",
            name: { it: "Stuzzicheria", en: "Appetizers & Snacks" },
            order: 1,
            items: [
                { id: 1, name: { it: "Antipasto Misto x2", en: "Mixed Platter for 2" }, description: { it: "Tsatziki, 2 dolmades, feta, olive, 6 crocchette miste", en: "Tzatziki, 2 dolmades, feta, olives, 6 mixed croquettes" }, price: 10, imageUrl: `${BASE}antipasto.webp` },
                { id: 2, name: { it: "Tirokeftes", en: "Tirokeftes" }, description: { it: "Crocchette di feta leggermente piccante", en: "Lightly spicy fried feta cheese balls" }, price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}tirokeftes.webp` },
                { id: 3, name: { it: "Kolokithokeftes", en: "Kolokithokeftes" }, description: { it: "Crocchette di zucchine", en: "Traditional zucchini fritters" }, price: 5, allergens: ["gluten"], imageUrl: `${BASE}kolokithokeftes.webp` },
                { id: 4, name: { it: "Melitzanokeftes", en: "Melitzanokeftes" }, description: { it: "Crocchette di melanzane", en: "Eggplant croquettes" }, price: 5, allergens: ["gluten"], imageUrl: `${BASE}melitzanokeftes.webp` },
                { id: 5, name: { it: "Keftes di Pollo o Manzo", en: "Chicken or Beef Keftes" }, description: { it: "Crocchette di carne", en: "Traditional meat croquettes" }, price: 5, allergens: ["gluten"], imageUrl: `${BASE}keftes.webp` },
                { id: 6, name: { it: "Bourekaki", en: "Bourekaki" }, description: { it: "3 Involtini di formaggio Kasseri e bacon", en: "3 Kasseri cheese and bacon rolls" }, price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}bourekaki.webp` },
                { id: 7, name: { it: "Dolmades", en: "Dolmades" }, description: { it: "Foglie di vite ripiene di riso", en: "Vine leaves stuffed with seasoned rice" }, price: 5, isVegan: true, imageUrl: `${BASE}dolmades.webp` },
                { id: 8, name: { it: "Feta", en: "Feta" }, description: { it: "Formaggio greco fresco", en: "Fresh Greek feta cheese" }, price: 6, allergens: ["milk"], imageUrl: `${BASE}feta.webp` },
                { id: 9, name: { it: "Feta al Cartoccio", en: "Baked Feta" }, description: { it: "Formaggio greco al cartoccio", en: "Greek cheese baked in foil" }, price: 6.5, allergens: ["milk"], imageUrl: `${BASE}feta-cartoccio.webp` },
                { id: 10, name: { it: "Saganaki", en: "Saganaki" }, description: { it: "Formaggio dolce impanato sulla piastra", en: "Pan-seared breaded Greek cheese" }, price: 6.5, allergens: ["milk"], imageUrl: `${BASE}saganaki.webp` },
                { id: 11, name: { it: "Souvlaki", en: "Souvlaki" }, description: { it: "Uno spiedino di pollo o maiale o pollo-bacon", en: "A single skewer of chicken, pork, or chicken-bacon" }, price: 3, imageUrl: `${BASE}souvlaki-singolo.webp` },
                { id: 12, name: { it: "Dakos", en: "Dakos" }, description: { it: "Fresella con feta, pomodoro, olive e origano", en: "Barley rusk topped with feta, tomato, olives, and oregano" }, price: 5, allergens: ["gluten"], imageUrl: `${BASE}dakos.webp` },
                { id: 13, name: { it: "Eliès", en: "Eliès" }, description: { it: "Olive greche Kalamata", en: "Greek Kalamata olives" }, price: 5, isVegan: true, imageUrl: `${BASE}elies.webp` },
                { id: 14, name: { it: "Patàtes Tiganitès", en: "Patàtes Tiganitès" }, description: { it: "Patatine fritte", en: "French fries" }, price: 4, isVegan: true, imageUrl: `${BASE}patates.webp` },
                { id: 15, name: { it: "Tiropitakia", en: "Tiropitakia" }, description: { it: "Pasta sfoglia ripiena di feta", en: "Small phyllo pastries stuffed with feta" }, price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}tiropitakia.webp` },
                { id: 16, name: { it: "Spanakopitakia", en: "Spanakopitakia" }, description: { it: "Pasta sfoglia ripiena di spinaci e feta", en: "Small phyllo pastries with spinach and feta" }, price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}spanakopitakia.webp` },
                { id: 17, name: { it: "Piperia", en: "Piperia" }, description: { it: "Peperone ripieno di feta", en: "Pepper stuffed with feta cheese" }, price: 5.5, imageUrl: `${BASE}piperia.webp` },
                { id: 18, name: { it: "Revithokeftes", en: "Revithokeftes" }, description: { it: "Crocchette di ceci", en: "Chickpea fritters (Falafel style)" }, price: 5, isVegan: true, allergens: ["gluten"], imageUrl: `${BASE}revithokeftes.webp` }
            ]
        },
        {
            id: "cat-2",
            name: { it: "Salse", en: "Dips & Sauces" },
            order: 2,
            items: [
                { id: 19, name: { it: "Yogurt Greco", en: "Greek Yogurt" }, description: { it: "Yogurt greco naturale", en: "Natural Greek yogurt" }, price: 4.5, allergens: ["milk"], imageUrl: `${BASE}salsa.webp` },
                { id: 20, name: { it: "Tsatziki", en: "Tzatziki" }, description: { it: "Yogurt greco aromatico con cetriolo e aglio", en: "Traditional yogurt dip with cucumber and garlic" }, price: 4.5, allergens: ["milk"], imageUrl: `${BASE}salsa.webp` },
                { id: 21, name: { it: "Tirokafteri", en: "Tirokafteri" }, description: { it: "Yogurt greco, feta, peperoncino e lime", en: "Spicy cheese dip with Greek yogurt, feta, and chili" }, price: 4.5, allergens: ["milk"], isSpicy: true, imageUrl: `${BASE}salsa.webp` }
            ]
        },
        {
            id: "cat-3",
            name: { it: "Insalate", en: "Salads" },
            order: 3,
            items: [
                { id: 22, name: { it: "Horiatiki", en: "Horiatiki (Greek Salad)" }, description: { it: "Insalata greca con pomodori, cetriolo, peperoni, cipolle, feta e olive", en: "Traditional salad with tomatoes, cucumber, peppers, onions, feta, and olives" }, price: 7, allergens: ["milk"], imageUrl: `${BASE}horiatiki.webp` },
                { id: 23, name: { it: "Agurodomata", en: "Agurodomata" }, description: { it: "Insalata con pomodoro, cetriolo e olive greche", en: "Simple salad with tomato, cucumber, and Greek olives" }, price: 6, isVegan: true, imageUrl: `${BASE}agurodomata.webp` }
            ]
        },
        {
            id: "cat-4",
            name: { it: "Pite con Carne", en: "Meat Pitas" },
            order: 4,
            items: [
                { id: 24, name: { it: "Pita Yamas", en: "Pita Yamas" }, description: { it: "Gyros (carne di maiale), tsatziki/tirokafteri/yogurt, cipolle, peperoni, pomodori, patatine, feta", en: "Pork gyros, choice of sauce, onions, peppers, tomatoes, fries, and feta" }, price: 7.5, allergens: ["gluten"], imageUrl: `${BASE}pita-gyros.webp` },
                { id: 25, name: { it: "Pita Gyros", en: "Pita Gyros" }, description: { it: "Carne di maiale, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Pork gyros, choice of sauce, onions, tomatoes, and fries" }, price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-gyros.webp` },
                { id: 26, name: { it: "Pita Souvlaki", en: "Pita Souvlaki" }, description: { it: "Spiedino di maiale fresco, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Fresh pork skewer, choice of sauce, onions, tomatoes, and fries" }, price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-souvlaki.webp` },
                { id: 27, name: { it: "Pita Pollo", en: "Pita Chicken" }, description: { it: "Spiedino di pollo fresco, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Fresh chicken skewer, choice of sauce, onions, tomatoes, and fries" }, price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-pollo.webp` },
                { id: 28, name: { it: "Pita Bifteki", en: "Pita Bifteki" }, description: { it: "Polpetta di vitello, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Veal patty, choice of sauce, onions, tomatoes, and fries" }, price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-bifteki.webp` },
                { id: 29, name: { it: "Pita Loukaniko", en: "Pita Loukaniko" }, description: { it: "Salsiccia greca, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Greek sausage, choice of sauce, onions, tomatoes, and fries" }, price: 7, allergens: ["gluten"], imageUrl: `${BASE}pita-loukaniko.webp` }
            ]
        },
        {
            id: "cat-5",
            name: { it: "Pite Vegetariane", en: "Vegetarian Pitas" },
            order: 5,
            items: [
                { id: 30, name: { it: "Pita Bifteki Vegetariana", en: "Veggie Bifteki Pita" }, description: { it: "Polpetta di verdure, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Vegetable patty, choice of sauce, onions, tomatoes, and fries" }, price: 6.5, allergens: ["gluten"], imageUrl: `${BASE}pita-bifteki-veg.webp` },
                { id: 31, name: { it: "Pita Feta", en: "Feta Pita" }, description: { it: "Feta, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Feta cheese, choice of sauce, onions, tomatoes, and fries" }, price: 6.5, allergens: ["gluten", "milk"], imageUrl: `${BASE}pita-feta.webp` },
                { id: 32, name: { it: "Pita Saganaki", en: "Saganaki Pita" }, description: { it: "Saganaki, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Fried saganaki cheese, choice of sauce, onions, tomatoes, and fries" }, price: 6.5, allergens: ["gluten", "milk"], imageUrl: `${BASE}pita-saganaki.webp` },
                { id: 33, name: { it: "Pita Dolmades", en: "Dolmades Pita" }, description: { it: "Dolmades, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Dolmades, choice of sauce, onions, tomatoes, and fries" }, price: 6, allergens: ["gluten"], imageUrl: `${BASE}pita-dolmades.webp` },
                { id: 34, name: { it: "Pita Patatine", en: "Chips Pita" }, description: { it: "Tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Choice of sauce, onions, tomatoes, and fries" }, price: 5, allergens: ["gluten"], isVegan: true, imageUrl: `${BASE}pita-patatine.webp` }
            ]
        },
        {
            id: "cat-6",
            name: { it: "Piatti con Carne e Vegetariani", en: "Main Platters" },
            order: 6,
            items: [
                { id: 35, name: { it: "Yamas", en: "Yamas Platter" }, description: { it: "Gyros (carne di maiale) + 2 spiedini, tsatziki/tirokafteri/yogurt, cipolle, peperoni, pomodori, patatine, feta", en: "Pork gyros + 2 skewers, choice of sauce, onions, peppers, tomatoes, fries, and feta" }, price: 13, imageUrl: `${BASE}yamas.webp` },
                { id: 36, name: { it: "Gyros", en: "Gyros Platter" }, description: { it: "Carne di maiale, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Pork gyros served with sauce, onions, tomatoes, and fries" }, price: 11, imageUrl: `${BASE}gyros.webp` },
                { id: 37, name: { it: "Souvlaki", en: "Souvlaki Platter" }, description: { it: "3 spiedini di maiale, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "3 pork skewers served with sauce, onions, tomatoes, and fries" }, price: 11, imageUrl: `${BASE}souvlaki.webp` },
                { id: 38, name: { it: "Kotopulo", en: "Kotopulo Platter" }, description: { it: "2 spiedini di pollo, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "2 chicken skewers served with sauce, onions, tomatoes, and fries" }, price: 11, imageUrl: `${BASE}kotopulo.webp` },
                { id: 39, name: { it: "Pollo Bacon", en: "Chicken & Bacon Platter" }, description: { it: "2 spiedini pollo/bacon, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "2 chicken-bacon skewers served with sauce, onions, tomatoes, and fries" }, price: 11, imageUrl: `${BASE}pollo-bacon.webp` },
                { id: 40, name: { it: "Bifteki", en: "Bifteki Platter" }, description: { it: "2 polpette di vitello, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "2 veal patties served with sauce, onions, tomatoes, and fries" }, price: 11, imageUrl: `${BASE}bifteki.webp` },
                { id: 41, name: { it: "Moussakà", en: "Moussaka" }, description: { it: "Sformato di melanzane, patate, carne trita e besciamella", en: "Layered bake of eggplant, potatoes, minced meat, and béchamel" }, price: 9, allergens: ["milk"], imageUrl: `${BASE}moussaka.webp` },
                { id: 42, name: { it: "Yamas Vegetariano", en: "Vegetarian Yamas" }, description: { it: "Dolmades, feta, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "Dolmades, feta, choice of sauce, onions, tomatoes, and fries" }, price: 7.5, isVegan: true, imageUrl: `${BASE}yamas-veg.webp` },
                { id: 43, name: { it: "Bifteki Vegetariano", en: "Vegetarian Bifteki Platter" }, description: { it: "2 polpette di verdure, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "2 vegetable patties served with sauce, onions, tomatoes, and fries" }, price: 8.5, imageUrl: `${BASE}bifteki-veg.webp` },
                { id: 44, name: { it: "Loukaniko", en: "Loukaniko Platter" }, description: { it: "2 salsicce greche, tsatziki/tirokafteri/yogurt, cipolle, pomodori, patatine", en: "2 Greek sausages served with sauce, onions, tomatoes, and fries" }, price: 11.5, imageUrl: `${BASE}loukaniko.webp` },
                { id: 45, name: { it: "Moussakà Vegetariana", en: "Vegetarian Moussaka" }, description: { it: "Sformato di melanzane, patate, macinato vegano e besciamella vegana", en: "Layered eggplant and potato bake with vegan mince and vegan béchamel" }, price: 9, imageUrl: `${BASE}moussaka-veg.webp` }
            ]
        },
        {
            id: "cat-7",
            name: { it: "Prodotti da Aggiungere", en: "Extras & Sides" },
            order: 7,
            items: [
                { id: 46, name: { it: "Feta (aggiunta)", en: "Extra Feta" }, description: { it: "Porzione extra di feta", en: "Extra portion of feta cheese" }, price: 1, allergens: ["milk"], imageUrl: `${BASE}feta-aggiunta.webp` },
                { id: 47, name: { it: "Saganaki (aggiunta)", en: "Extra Saganaki" }, description: { it: "Formaggio dolce sulla piastra", en: "Extra grilled saganaki cheese" }, price: 1.5, allergens: ["milk"], imageUrl: `${BASE}saganaki-aggiunta.webp` },
                { id: 48, name: { it: "Pita (aggiunta)", en: "Extra Pita" }, description: { it: "Pane greco", en: "Extra Greek pita bread" }, price: 0.5, allergens: ["gluten"], imageUrl: `${BASE}pita.webp` }
            ]
        },
        {
            id: "cat-8",
            name: { it: "Vini", en: "Wines" },
            order: 8,
            items: [
                { id: 49, name: { it: "Nemea - LAFKIOTI", en: "Nemea - LAFKIOTI" }, description: { it: "Vino rosso in bottiglia 0,75 L", en: "Red wine, 0.75 L bottle" }, price: 12, imageUrl: `${BASE}nemea.webp` },
                { id: 50, name: { it: "Retzina Malamatina", en: "Retzina Malamatina" }, description: { it: "Vino bianco in bottiglia 0,50 L", en: "White wine, 0.50 L bottle" }, price: 6.5, imageUrl: `${BASE}retzina.webp` },
                { id: 51, name: { it: "Sfuso Greco (0,5 L)", en: "House Greek Wine (0.5 L)" }, description: { it: "Rosso/Bianco 0,50 L", en: "Red/White, 0.50 L" }, price: 6, imageUrl: `${BASE}sfuso-05.webp` },
                { id: 52, name: { it: "Sfuso Greco (0,25 L)", en: "House Greek Wine (0.25 L)" }, description: { it: "Rosso/Bianco 0,25 L", en: "Red/White, 0.25 L" }, price: 3, imageUrl: `${BASE}sfuso-025.webp` },
                { id: 53, name: { it: "Queen of Hearts - NICO LAZARIDI", en: "Queen of Hearts - NICO LAZARIDI" }, description: { it: "Vino bianco in bottiglia 0,75 L", en: "White wine, 0.75 L bottle" }, price: 12, imageUrl: `${BASE}queen.webp` },
                { id: 54, name: { it: "Kretikos - BOUTARI", en: "Kretikos - BOUTARI" }, description: { it: "Vino bianco in bottiglia 0,75 L", en: "White wine, 0.75 L bottle" }, price: 12, imageUrl: `${BASE}kretikos.webp` }
            ]
        },
        {
            id: "cat-9",
            name: { it: "Birre", en: "Beers" },
            order: 9,
            items: [
                { id: 55, name: { it: "Mythos 0,50 L", en: "Mythos 0.50 L" }, description: { it: "Bottiglia 0,50 L", en: "0.50 L Bottle" }, price: 6, imageUrl: `${BASE}mythos-50.webp` },
                { id: 56, name: { it: "Mythos 0,33 L", en: "Mythos 0.33 L" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 4, imageUrl: `${BASE}mythos-33.webp` },
                { id: 57, name: { it: "Heineken 0,66 L", en: "Heineken 0.66 L" }, description: { it: "Bottiglia 0,66 L", en: "0.66 L Bottle" }, price: 4.5, imageUrl: `${BASE}heineken.webp` },
                { id: 58, name: { it: "Heineken 0,33 L", en: "Heineken 0.33 L" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 2.5, imageUrl: `${BASE}heineken.webp` },
                { id: 59, name: { it: "Nastro Azzurro 0,66 L", en: "Nastro Azzurro 0.66 L" }, description: { it: "Bottiglia 0,66 L", en: "0.66 L Bottle" }, price: 4.5, imageUrl: `${BASE}nastro.webp` },
                { id: 60, name: { it: "Nastro Azzurro 0,33 L", en: "Nastro Azzurro 0.33 L" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 2.5, imageUrl: `${BASE}nastro.webp` },
                { id: 61, name: { it: "Beck's 0,33 L", en: "Beck's 0.33 L" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 2.5, imageUrl: `${BASE}becks.webp` },
                { id: 62, name: { it: "Ceres 0,33 L", en: "Ceres 0.33 L" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 3.5, imageUrl: `${BASE}ceres.webp` },
                { id: 63, name: { it: "Tennent's 0,33 L", en: "Tennent's 0.33 L" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 3.5, imageUrl: `${BASE}tennents.webp` },
                { id: 64, name: { it: "Vergina Rossa", en: "Vergina Red" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 4, imageUrl: `${BASE}vergina.webp` },
                { id: 65, name: { it: "Fix Hellas", en: "Fix Hellas" }, description: { it: "Bottiglia 0,33 L", en: "0.33 L Bottle" }, price: 3.5, imageUrl: `${BASE}fix.webp` }
            ]
        },
        {
            id: "cat-10",
            name: { it: "Bevande", en: "Soft Drinks" },
            order: 10,
            items: [
                { id: 66, name: { it: "Coca Cola Zero 0,33 L", en: "Coke Zero 0.33 L" }, description: { it: "Bibita analcolica", en: "Soft drink" }, price: 2, imageUrl: `${BASE}coca-zero.webp` },
                { id: 67, name: { it: "Coca Cola 0,33 L", en: "Coca Cola 0.33 L" }, description: { it: "Bibita analcolica", en: "Soft drink" }, price: 2, imageUrl: `${BASE}coca.webp` },
                { id: 68, name: { it: "Fanta 0,33 L", en: "Fanta 0.33 L" }, description: { it: "Bibita analcolica", en: "Soft drink" }, price: 2, imageUrl: `${BASE}fanta.webp` },
                { id: 69, name: { it: "Sprite 0,33 L", en: "Sprite 0.33 L" }, description: { it: "Bibita analcolica", en: "Soft drink" }, price: 2, imageUrl: `${BASE}sprite.webp` },
                { id: 70, name: { it: "Acqua 0,50 L", en: "Water 0.50 L" }, description: { it: "Acqua naturale", en: "Still water" }, price: 1.5, imageUrl: `${BASE}acqua.webp` },
                { id: 71, name: { it: "Caffè", en: "Coffee" }, description: { it: "Espresso", en: "Espresso" }, price: 1.5, imageUrl: `${BASE}caffe.webp` }
            ]
        },
        {
            id: "cat-11",
            name: { it: "Dolci", en: "Desserts" },
            order: 11,
            items: [
                { id: 72, name: { it: "Yogurt e Miele", en: "Yogurt & Honey" }, description: { it: "Yogurt greco con miele, noci e nocciole", en: "Greek yogurt with honey, walnuts, and hazelnuts" }, price: 5, allergens: ["milk"], imageUrl: `${BASE}yogurt-miele.webp` },
                { id: 73, name: { it: "Torta Yamas", en: "Yamas Cake" }, description: { it: "Yogurt cake vari gusti: miele, cioccolato, caramello, amarena", en: "Yogurt cake available in: honey, chocolate, caramel, or black cherry" }, price: 5, allergens: ["milk", "gluten"], imageUrl: `${BASE}torta-yamas.webp` },
                { id: 74, name: { it: "Baklava", en: "Baklava" }, description: { it: "Pasta filo con sciroppo allo zucchero e noci", en: "Phyllo pastry with sugar syrup and walnuts" }, price: 6, allergens: ["gluten", "nuts"], imageUrl: `${BASE}baklava.webp` },
                { id: 75, name: { it: "Kataifi", en: "Kataifi" }, description: { it: "Pasta filo con ripieno di frutta secca e sciroppo", en: "Shredded phyllo pastry with nut filling and syrup" }, price: 6, allergens: ["gluten", "nuts"], imageUrl: `${BASE}kataifi.webp` }
            ]
        },
        {
            id: "cat-12",
            name: { it: "Liquori", en: "Liquors" },
            order: 12,
            items: [
                { id: 76, name: { it: "Ouzo 12 Loukatos", en: "Ouzo 12 Loukatos" }, description: { it: "Liquore greco", en: "Traditional Greek anise liquor" }, price: 4, imageUrl: `${BASE}ouzo.webp` },
                { id: 77, name: { it: "Raki", en: "Raki" }, description: { it: "Grappa", en: "Grape pomace brandy" }, price: 4, imageUrl: `${BASE}raki.webp` },
                { id: 78, name: { it: "Samos", en: "Samos" }, description: { it: "Passito bianco naturalmente dolce", en: "Naturally sweet white dessert wine" }, price: 4, imageUrl: `${BASE}samos.webp` }
            ]
        }
    ]
};

export const DEMO_RESTAURANT: Restaurant = {
    name: { it: 'YAMAS Taverna Greca', en: 'YAMAS Taverna Greca' },
    logoUrl: `${BASE}logo.svg`,
    description: {
        it:
            "Ciao, sono Peppe! Dopo 25 anni di esperienza nel mio locale nel centro storico di Napoli, ho deciso di continuare la mia attività in questa zona vesuviana. Vi auguro una buona permanenza e buon appetito!",
        en:
            "Hi, I'm Peppe! After 25 years of experience running my own place in the historic center of Naples, I've decided to continue my journey here in the Vesuvius area. I wish you a wonderful stay and, of course, buon appetito!"
    },
    address: 'Via Nazionale delle Puglie 69, San Vitaliano NA',
    phone: '+39 081 344 50 57',
    navLinks: [
        { text: { it: 'Prenota', en: 'Book' }, href: '#prenota' },
        { text: { it: 'Scopri il Menu', en: 'See Menu' }, href: '#menu' },
        { text: { it: 'Chi Siamo', en: 'About Us' }, href: '#chi-siamo' }
    ],
    footerLinks: [
        { text: { it: 'Politiche', en: 'Policies' }, href: 'http://localhost:3000/policies' },
        { text: { it: 'Aiutaci a Migliorare', en: 'Help us improve' }, href: 'https://forms.gle/oGZeRWNjfDuFQAxq7' }
    ],
    rapidActions: [
        { name: { it: 'Chiama', en: 'Call' }, type: 'phone' },
        { name: { it: 'Scrivi Email', en: 'Email' }, type: 'email' },
        { name: { it: 'Indicazioni', en: 'Directions' }, type: 'directions' },
        { name: { it: 'Prenota', en: 'Book' }, type: 'reserve' }
    ],
    menuItems: DEMO_MENU.categories.flatMap((c: any) => c.items)
};