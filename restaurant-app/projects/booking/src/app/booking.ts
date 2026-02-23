import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface BookingData {
  name: string;
  phone: string;
  email?: string;
  date: Date;
  time: string;
  people: number;
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getExcludedDates(): Observable<string[]> {
    return of(['2026-02-20', '2026-02-25']).pipe(delay(500));
  }

  getExcludedWeekDays(): Observable<number[]> {
    return of([0]).pipe(delay(500));
  }

  /**
   * Submit prenotazione
   */
  submitBooking(data: BookingData): Observable<{ success: boolean; message: string }> {
    // Simulazione chiamata server
    console.log('Invio dati al server:', data);

    if (!data.date || !data.name || !data.phone) {
      return throwError(() => new Error('Dati incompleti'));
    }

    // Simulazione risposta positiva
    return of({ success: true, message: 'Prenotazione inviata correttamente.' }).pipe(delay(1000));
  }
}
