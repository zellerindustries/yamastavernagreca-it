import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RestaurantService, Restaurant } from 'restaurant-core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.html',
  standalone: true
})
export class MenuHeaderComponent {
  public restaurantService = inject(RestaurantService);
  private sanitizer = inject(DomSanitizer);

  /** * Updated to a getter.
   * Removed the parentheses () inside because it's now a plain object.
   */
  get restaurant(): Restaurant {
    return this.restaurantService.restaurant;
  }

  sanitizeLogoUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  onLogoError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.webp';
  }
}