import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'restaurant-core';

@Component({
  selector: 'app-booking-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-header.html'
})
export class BookingHeaderComponent {
  constructor(private restaurantService: RestaurantService) { }

  /** Dynamic signals for template */
  restaurantName = computed(() => this.restaurantService.restaurant().name);
  restaurantDescription = computed(() => this.restaurantService.restaurant().description);
}
