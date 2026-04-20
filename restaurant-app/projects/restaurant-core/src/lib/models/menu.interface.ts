/** * Helper interface for multilingual strings
 */
export interface Translatable {
    it: string;
    en: string;
}

export interface MenuItem {
    id: number;
    name: Translatable;        // Updated
    description: Translatable; // Updated
    price: number;
    imageUrl?: string;
    isVegan?: boolean;
    isVegetarian?: boolean;
    isSpicy?: boolean;
    allergens?: string[];
}

export interface Category {
    id: string;
    name: Translatable;        // Updated
    description?: Translatable; // Updated
    order: number;
    items: MenuItem[];
}

export interface Menu {
    id: string;
    name: Translatable;        // Updated
    categories: Category[];
}