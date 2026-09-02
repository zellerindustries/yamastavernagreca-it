import { Injectable, signal, Signal } from '@angular/core';
import { DEMO_MENU, DEMO_RESTAURANT } from '../data/demo';
import { Restaurant, RapidAction } from '../models/restaurant.interface';
import { Menu, Category } from '../models/menu.interface';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private _lang = signal<'it' | 'en'>('it');

  public restaurantData: Restaurant = DEMO_RESTAURANT;
  public menuData: Menu = DEMO_MENU;

  get lang(): Signal<'it' | 'en'> {
    return this._lang.asReadonly();
  }

  get restaurant(): Restaurant {
    return this.restaurantData;
  }

  get menu(): Menu {
    return this.menuData;
  }

  get categories(): Category[] {
    return this.menuData.categories;
  }

  get rapidActions(): RapidAction[] {
    return this.restaurantData.rapidActions;
  }

  setLanguage(lang: 'it' | 'en'): void {
    this._lang.set(lang);
  }
}
