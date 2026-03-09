import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'restaurant-core';
import { Category } from 'restaurant-core';

@Component({
  selector: 'app-menu-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-list.html'
})
export class MenuItemListComponent {
  restaurantService = inject(RestaurantService);

  /** Categories signal */
  categories = computed<Category[]>(() =>
    this.restaurantService.menu().categories
  );
}