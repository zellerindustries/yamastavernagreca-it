import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RestaurantService } from 'restaurant-core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.html',
  standalone: true
})
export class MenuHeaderComponent {
  restaurantService = inject(RestaurantService);
  sanitizer = inject(DomSanitizer);

  sanitizeLogoUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  /** Fallback if the logo fails to load */
  onLogoError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.webp';
  }

  restaurant() {
    return this.restaurantService.restaurant();
  }
}