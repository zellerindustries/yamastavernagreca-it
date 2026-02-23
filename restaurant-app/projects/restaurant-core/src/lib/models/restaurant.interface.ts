import { MenuItem } from './menu.interface';

export interface NavLink {
    text: string;
    href: string;
}

export interface FooterLink {
    text: string;
    href: string;
}

export interface RapidAction {
    name: string;
    type: 'phone' | 'email' | 'directions' | 'reserve';
}

export interface Restaurant {
    name: string;
    logoUrl: string;
    address: string;
    phone: string;
    email: string;
    navLinks: NavLink[];
    footerLinks: FooterLink[];
    rapidActions: RapidAction[];
    description?: string;
    menuItems?: MenuItem[];
}
