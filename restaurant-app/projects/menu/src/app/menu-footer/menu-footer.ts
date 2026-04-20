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
  /** * Just inject the service.
   * The template will handle the 'restaurant' data via 'restaurantService.restaurant'
   */
  public restaurantService = inject(RestaurantService);
}