import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'restaurant-core';

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-header.html'
})
export class MenuHeaderComponent {
  /** Inject the restaurant service */
  restaurantService = inject(RestaurantService);

  /** Restaurant signal */
  restaurant = this.restaurantService.restaurant;
}
