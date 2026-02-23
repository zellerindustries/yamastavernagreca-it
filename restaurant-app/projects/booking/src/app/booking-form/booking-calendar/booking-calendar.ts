import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

import { MatDatepickerModule, MatCalendar } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
    selector: 'booking-calendar',
    standalone: true,
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    templateUrl: './booking-calendar.html',
})
export class BookingCalendarComponent {

    @Input({ required: true }) control!: FormControl<Date | null>;

    @Input() excludedDates: string[] = [];
    @Input() excludedWeekDays: number[] = [];

    @Input() minDate: Date | null = null;
    @Input() maxDate: Date | null = null;

    private excludedSet = computed(() => new Set(this.excludedDates));

    dateFilter = (date: Date | null): boolean => {
        if (!date) return false;

        const iso = date.toISOString().split('T')[0];
        const weekDay = date.getDay();

        if (this.excludedSet().has(iso)) return false;
        if (this.excludedWeekDays.includes(weekDay)) return false;

        return true;
    };

    dateClass = (date: Date) => {
        const iso = date.toISOString().split('T')[0];
        return this.excludedSet().has(iso) ? 'booking-disabled-date' : '';
    };

    dateChange(date: Date | null) {
        this.control.setValue(date);
    }
}
