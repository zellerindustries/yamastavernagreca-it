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
  description?: Translatable;
  order: number;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  name: Translatable;
  categories: Category[];
}
