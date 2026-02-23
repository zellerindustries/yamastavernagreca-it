import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'restaurant-core';

@Component({
  selector: 'app-menu-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-footer.html'
})
export class MenuFooterComponent {
  /** Inject the restaurant service */
  restaurantService = inject(RestaurantService);

  /** Restaurant signal */
  restaurant = this.restaurantService.restaurant;
}
