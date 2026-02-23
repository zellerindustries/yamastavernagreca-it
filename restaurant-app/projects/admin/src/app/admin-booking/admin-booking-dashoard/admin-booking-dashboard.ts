import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../admin-booking.service';
import { AdminBooking, BookingStatus } from '../admin-booking.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-booking-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-booking-dashboard.html'
})
export class AdminBookingDashboardComponent implements OnInit {

  private bookingService = inject(BookingService);

  // ================= STATE =================
  bookings = signal<AdminBooking[]>([]);
  loading = signal(false);

  // Filters
  selectedDate = signal<string | null>(null);
  statusFilter = signal<'all' | BookingStatus>('all');

  // ================= DERIVED =================
  filteredBookings = computed(() => {
    return this.bookings().filter(b => {
      const statusMatch = this.statusFilter() === 'all' || b.status === this.statusFilter();
      const dateMatch = !this.selectedDate() || b.date === this.selectedDate();
      return statusMatch && dateMatch;
    });
  });

  ngOnInit(): void {
    this.loadBookings();
  }

  // ================= METHODS =================
  loadBookings() {
    this.loading.set(true);
    this.bookingService.getAllBookings().pipe(take(1)).subscribe({
      next: data => {
        this.bookings.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  setStatusFilter(status: 'all' | BookingStatus) {
    this.statusFilter.set(status);
  }

  setDateFilter(date: string) {
    this.selectedDate.set(date || null);
  }

  confirmBooking(id: string) {
    this.updateStatus(id, 'confirmed');
  }

  cancelBooking(id: string) {
    this.updateStatus(id, 'cancelled');
  }

  private updateStatus(id: string, status: BookingStatus) {
    this.bookingService.updateBookingStatus(id, status).pipe(take(1)).subscribe(() => {
      this.bookings.update(list => list.map(b => b.id === id ? { ...b, status } : b));
    });
  }

  trackById(_: number, booking: AdminBooking) {
    return booking.id;
  }
}
