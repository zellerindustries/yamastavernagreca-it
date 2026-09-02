import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService, Category } from 'restaurant-core';

@Component({
  selector: 'app-menu-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-list.html'
})
export class MenuItemListComponent {
  public restaurantService = inject(RestaurantService);

  get categories(): Category[] {
    return this.restaurantService.categories;
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/placeholder.webp';
  }
}