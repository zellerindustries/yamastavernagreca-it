export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
    isVegan?: boolean;
    isSpicy?: boolean;
    allergens?: string[];
}

export interface Menu {
    id: string
    name: string
    categories: Category[]
}

export interface Category {
    id: string
    name: string
    description?: string
    order: number
    items: MenuItem[]
}