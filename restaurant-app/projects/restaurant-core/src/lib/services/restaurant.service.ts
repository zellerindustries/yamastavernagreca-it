import { Injectable, signal } from '@angular/core';
import { DEMO_MENU, DEMO_RESTAURANT } from '../data/demo';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant.interface';
import { Menu } from '../models/menu.interface';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    private _restaurant = signal<Restaurant>(DEMO_RESTAURANT);
    private _menu = signal<Menu>(DEMO_MENU);

    /** Signals */
    get restaurant() { return this._restaurant; }
    get menu() { return this._menu; }

    /** Fetch as Observable (future HTTP ready) */
    fetchRestaurant(): Observable<Restaurant> {
        return of(DEMO_RESTAURANT);
    }

    fetchMenu(): Observable<Menu> {
        return of(DEMO_MENU);
    }

    /** Update dynamically */
    setRestaurant(r: Restaurant) {
        this._restaurant.set(r);
    }

    setMenu(menu: Menu) {
        this._menu.set(menu);
    }

    /** Convenience getters */

    get categories() {
        return this._menu().categories;
    }

    get rapidActions() {
        return this._restaurant().rapidActions;
    }

}