export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export interface AdminBooking {
    id: string;
    name: string;
    phone: string;
    email?: string;
    date: string; // yyyy-mm-dd
    time: string;
    people: number;
    notes?: string;
    status: BookingStatus;
    createdAt: string;
}
