import { Component, inject } from '@angular/core';
import { RestaurantService, Restaurant } from 'restaurant-core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.html',
  standalone: true
})
export class MenuHeaderComponent {
  public restaurantService = inject(RestaurantService);

  get restaurant(): Restaurant {
    return this.restaurantService.restaurant;
  }

  onLogoError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.webp';
  }
}