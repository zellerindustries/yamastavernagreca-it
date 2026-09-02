import { Component, inject } from '@angular/core';
import { RestaurantService } from 'restaurant-core';

@Component({
  selector: 'app-menu-footer',
  standalone: true,
  templateUrl: './menu-footer.html'
})
export class MenuFooterComponent {
  public restaurantService = inject(RestaurantService);
}
