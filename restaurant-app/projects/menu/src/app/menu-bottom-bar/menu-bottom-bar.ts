import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'restaurant-core';

@Component({
  selector: 'app-menu-bottom-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bottom-bar.html'
})
export class BottomBarComponent {
  /** Inject the restaurant service */
  restaurantService = inject(RestaurantService);

  /** Get rapid actions signal from restaurant */
  get rapidActions() {
    return this.restaurantService.restaurant().rapidActions;
  }

  /** Perform action based on type */
  performAction(actionType: string) {
    const restaurant = this.restaurantService.restaurant();
    switch (actionType) {
      case 'phone':
        window.location.href = `tel:${restaurant.phone}`;
        break;
      case 'email':
        window.location.href = `mailto:${restaurant.email}`;
        break;
      case 'directions':
        window.open(`https://maps.google.com?q=${encodeURIComponent(restaurant.address)}`, '_blank');
        break;
      case 'reserve':
        alert('Reservation feature coming soon!');
        break;
    }
  }
}
