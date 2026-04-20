import { Injectable, signal, Signal } from '@angular/core';
import { DEMO_MENU, DEMO_RESTAURANT } from '../data/demo';
import { Restaurant, RapidAction } from '../models/restaurant.interface';
import { Menu, Category } from '../models/menu.interface';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
    /** * The ONLY signal in the service.
     * We keep this so the UI can reactively switch translations.
     */
    private _lang = signal<'it' | 'en'>('it');

    /** * Standard Objects (Signal-free for the data)
     * This fixes the "Object is of type unknown" template errors.
     */
    public restaurantData: Restaurant = DEMO_RESTAURANT;
    public menuData: Menu = DEMO_MENU;

    /** Language State Getter */
    get lang(): Signal<'it' | 'en'> {
        return this._lang.asReadonly();
    }

    /** * Data Getters
     * These return plain objects so the template compiler can see the types.
     */
    get restaurant(): Restaurant {
        return this.restaurantData;
    }

    get menu(): Menu {
        return this.menuData;
    }

    /** * Convenience Getters
     * Adding these fixes the "Property does not exist" errors in your components.
     */
    get categories(): Category[] {
        return this.menuData.categories;
    }

    get rapidActions(): RapidAction[] {
        return this.restaurantData.rapidActions;
    }

    /** Actions */
    toggleLanguage(): void {
        this._lang.update(l => l === 'it' ? 'en' : 'it');
    }

    setLanguage(lang: 'it' | 'en'): void {
        this._lang.set(lang);
    }
}