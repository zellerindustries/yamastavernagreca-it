import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'restaurant-core';

@Component({
  selector: 'app-booking-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-footer.html'
})
export class BookingFooterComponent {
  constructor(private restaurantService: RestaurantService) { }

  /** Dynamic signals for template */
  restaurantName = computed(() => this.restaurantService.restaurant().name);
  restaurantPhone = computed(() => this.restaurantService.restaurant().phone);
  restaurantEmail = computed(() => this.restaurantService.restaurant().email);
}
