import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AdminBooking, BookingStatus } from './admin-booking.model';
import { DEMO_BOOKINGS } from './admin-booking-demo';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    private bookings: AdminBooking[] = DEMO_BOOKINGS.map(b => ({ ...b }));

    getAllBookings(): Observable<AdminBooking[]> {
        // simulate API latency
        return of(this.bookings.map(b => ({ ...b }))).pipe(delay(500));
    }

    updateBookingStatus(id: string, status: BookingStatus): Observable<void> {
        const index = this.bookings.findIndex(b => b.id === id);
        if (index === -1) return throwError(() => new Error('Booking not found'));

        this.bookings[index] = { ...this.bookings[index], status };
        return of(void 0).pipe(delay(300));
    }

    deleteBooking(id: string): Observable<void> {
        const exists = this.bookings.some(b => b.id === id);
        if (!exists) return throwError(() => new Error('Booking not found'));

        this.bookings = this.bookings.filter(b => b.id !== id);
        return of(void 0).pipe(delay(300));
    }

    getBookingById(id: string): Observable<AdminBooking | null> {
        const booking = this.bookings.find(b => b.id === id) ?? null;
        return of(booking ? { ...booking } : null).pipe(delay(300));
    }
}
