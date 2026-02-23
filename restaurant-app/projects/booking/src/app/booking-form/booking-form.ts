import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar';
import { BookingService, BookingData } from '../booking';
import { take } from 'rxjs';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BookingCalendarComponent],
  templateUrl: './booking-form.html'
})
export class BookingFormComponent implements OnInit {

  submitted = signal(false);
  successMessage = signal('');

  bookingForm: FormGroup;

  excludedDatesFromApi: string[] = [];
  excludedWeekDaysFromApi: number[] = [];

  today = new Date();

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{6,20}$/)]],
      email: ['', [Validators.email]],
      date: [null, Validators.required], // FormControl<Date | null>
      time: ['', Validators.required],
      people: [2, [Validators.required, Validators.min(1), Validators.max(20)]],
      notes: ['']
    });
  }

  ngOnInit() {
    this.bookingService.getExcludedDates().pipe(take(1)).subscribe(dates => this.excludedDatesFromApi = dates);
    this.bookingService.getExcludedWeekDays().pipe(take(1)).subscribe(days => this.excludedWeekDaysFromApi = days);
  }

  submit() {
    this.submitted.set(true);

    if (this.bookingForm.invalid) return;

    const bookingData: BookingData = this.bookingForm.value;

    // Invio dati al service
    this.bookingService.submitBooking(bookingData).pipe(take(1)).subscribe({
      next: res => {
        this.successMessage.set(res.message);
        this.bookingForm.reset();
        this.submitted.set(false);
      },
      error: err => {
        this.successMessage.set(`Errore: ${err.message}`);
        this.submitted.set(false);
      }
    });
  }

  fieldInvalid(field: string) {
    const control = this.bookingForm.get(field);
    return control && control.invalid && (control.touched || this.submitted());
  }

  get dateControl(): FormControl<Date | null> {
    return this.bookingForm.get('date') as FormControl<Date | null>;
  }
}
