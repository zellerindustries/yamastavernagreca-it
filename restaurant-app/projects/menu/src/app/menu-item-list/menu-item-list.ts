import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'restaurant-core';
import { MenuItem } from 'restaurant-core';

@Component({
  selector: 'app-menu-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-list.html'
})
export class MenuItemListComponent {
  /** Inject the restaurant service */
  restaurantService = inject(RestaurantService);

  /** Use the menu items signal directly */
  menuItems = this.restaurantService.menuItems;
}
