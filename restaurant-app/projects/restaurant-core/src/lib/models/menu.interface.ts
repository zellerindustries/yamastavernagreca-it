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