import { Component, inject } from '@angular/core';
import { RestaurantService, RapidAction } from 'restaurant-core';

@Component({
  selector: 'app-menu-bottom-bar',
  standalone: true,
  templateUrl: './menu-bottom-bar.html'
})
export class BottomBarComponent {
  public restaurantService = inject(RestaurantService);

  get rapidActions(): RapidAction[] {
    return this.restaurantService.restaurant.rapidActions;
  }

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
