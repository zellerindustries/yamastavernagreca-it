import { Component, signal } from '@angular/core';
// import { MenuItemListComponent } from './menu-item-list/menu-item-list';
// import { MenuHeaderComponent } from "./menu-header/menu-header";
// import { MenuFooterComponent } from './menu-footer/menu-footer';
import { MenuComingSoon } from './menu-coming-soon/menu-coming-soon';

@Component({
  selector: 'app-root',
  imports: [
    // MenuItemListComponent,
    // MenuHeaderComponent,
    //MenuFooterComponent,
    MenuComingSoon
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('menu');
}
