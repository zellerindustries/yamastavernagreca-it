import { MenuItem, Translatable } from './menu.interface';

export interface NavLink {
    text: Translatable; // Updated from string
    href: string;
}

export interface FooterLink {
    text: Translatable; // Updated from string
    href: string;
}

export interface RapidAction {
    name: Translatable; // Updated from string
    type: 'phone' | 'email' | 'directions' | 'reserve';
}

export interface Restaurant {
    name: Translatable;      // Keeping as string (Brand Name)
    logoUrl: string;
    address: string;
    phone: string;
    email?: string;
    navLinks: NavLink[];
    footerLinks: FooterLink[];
    rapidActions: RapidAction[];
    description?: Translatable; // Updated from string
    menuItems?: MenuItem[];
}