import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService, RapidAction } from 'restaurant-core';

@Component({
  selector: 'app-menu-bottom-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bottom-bar.html'
})
export class BottomBarComponent {
  /** Inject the restaurant service */
  public restaurantService = inject(RestaurantService);

  /** * Get rapid actions from restaurant.
   * No () needed here because restaurant is now a plain object getter.
   */
  get rapidActions(): RapidAction[] {
    return this.restaurantService.restaurant.rapidActions;
  }

  /** Perform action based on type */
  performAction(actionType: RapidAction['type']) {
    const restaurant = this.restaurantService.restaurant;

    switch (actionType) {
      case 'phone':
        window.location.href = `tel:${restaurant.phone}`;
        break;
      case 'email':
        if (restaurant.email) {
          window.location.href = `mailto:${restaurant.email}`;
        }
        break;
      case 'directions':
        // Cleaned up the Google Maps URL format
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`,
          '_blank'
        );
        break;
      case 'reserve':
        alert('Reservation feature coming soon!');
        break;
    }
  }
}