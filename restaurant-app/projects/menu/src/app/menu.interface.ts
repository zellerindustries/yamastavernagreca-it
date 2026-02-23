// menu-item.model.ts
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

export interface Restaurant {
    name: string;
    logoUrl: string;
    address: string;
    phone: string;
    email: string;
    footerLinks: { text: string; href: string }[];
    navLinks: { text: string; href: string }[];
    rapidActions: { name: string; type: string }[];
}
