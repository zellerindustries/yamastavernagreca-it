export interface Translatable {
  it: string;
  en: string;
}

export interface MenuItem {
  id: number;
  name: Translatable;
  description: Translatable;
  price: number;
  imageUrl?: string;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  allergens?: string[];
}

export interface Category {
  id: string;
  name: Translatable;
  order: number;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  name: Translatable;
  categories: Category[];
}

export interface NavLink {
  text: Translatable;
  href: string;
}

export interface FooterLink {
  text: Translatable;
  href: string;
}

export interface RapidAction {
  name: Translatable;
  type: 'phone' | 'email' | 'directions' | 'reserve';
}

export interface Restaurant {
  name: Translatable;
  logoUrl: string;
  description?: Translatable;
  address: string;
  phone: string;
  navLinks: NavLink[];
  footerLinks: FooterLink[];
  rapidActions: RapidAction[];
}

export type Lang = 'it' | 'en';
