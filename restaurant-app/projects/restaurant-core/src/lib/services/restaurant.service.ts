import { Injectable, signal } from '@angular/core';
import { DEMO_MENU_ITEMS, DEMO_RESTAURANT } from '../data/demo';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant.interface';
import { MenuItem } from '../models/menu.interface';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private _restaurant = signal<Restaurant>(DEMO_RESTAURANT);
    private _menuItems = signal<MenuItem[]>(DEMO_MENU_ITEMS);

    /** Signals */
    get restaurant() { return this._restaurant; }
    get menuItems() { return this._menuItems; }

    /** Fetch as Observable (future HTTP ready) */
    fetchRestaurant(): Observable<Restaurant> { return of(DEMO_RESTAURANT); }
    fetchMenuItems(): Observable<MenuItem[]> { return of(DEMO_MENU_ITEMS); }

    /** Update dynamically */
    setRestaurant(r: Restaurant) { this._restaurant.set(r); }
    setMenuItems(items: MenuItem[]) { this._menuItems.set(items); }

    /** Convenience: rapid actions from restaurant */
    get rapidActions() { return this._restaurant().rapidActions; }
}
