import { MenuItem, Translatable } from './menu.interface';

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
  address: string;
  phone: string;
  email?: string;
  navLinks: NavLink[];
  footerLinks: FooterLink[];
  rapidActions: RapidAction[];
  description?: Translatable;
  menuItems?: MenuItem[];
}
