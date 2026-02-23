import { Component, signal } from '@angular/core';
import { BookingFormComponent } from './booking-form/booking-form';
import { BookingHeaderComponent } from './booking-header/booking-header';
import { BookingFooterComponent } from './booking-footer/booking-footer';

@Component({
  selector: 'app-root',
  imports: [BookingFormComponent, BookingHeaderComponent, BookingFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('booking');
}
