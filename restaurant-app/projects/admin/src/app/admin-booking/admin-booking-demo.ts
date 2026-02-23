import { AdminBooking } from './admin-booking.model';

export const DEMO_BOOKINGS: AdminBooking[] = [
    {
        id: 'b1',
        name: 'Mario Rossi',
        phone: '+39 333 1111111',
        email: 'mario.rossi@example.com',
        date: '2026-02-20',
        time: '19:00',
        people: 2,
        notes: 'Tavolo vicino alla finestra',
        status: 'pending',
        createdAt: '2026-02-15T10:30:00Z'
    },
    {
        id: 'b2',
        name: 'Luca Bianchi',
        phone: '+39 333 2222222',
        email: 'luca.bianchi@example.com',
        date: '2026-02-20',
        time: '20:30',
        people: 4,
        status: 'confirmed',
        createdAt: '2026-02-16T12:00:00Z'
    },
    {
        id: 'b3',
        name: 'Giulia Verdi',
        phone: '+39 333 3333333',
        email: 'giulia.verdi@example.com',
        date: '2026-02-21',
        time: '18:30',
        people: 3,
        notes: 'Compleanno',
        status: 'cancelled',
        createdAt: '2026-02-17T09:00:00Z'
    },
    {
        id: 'b4',
        name: 'Anna Neri',
        phone: '+39 333 4444444',
        email: 'anna.neri@example.com',
        date: '2026-02-21',
        time: '21:00',
        people: 5,
        notes: 'Riunione amici',
        status: 'pending',
        createdAt: '2026-02-17T14:15:00Z'
    },
    {
        id: 'b5',
        name: 'Marco Russo',
        phone: '+39 333 5555555',
        email: 'marco.russo@example.com',
        date: '2026-02-22',
        time: '20:00',
        people: 2,
        notes: '',
        status: 'pending',
        createdAt: '2026-02-18T08:45:00Z'
    },
    {
        id: 'b6',
        name: 'Silvia Conti',
        phone: '+39 333 6666666',
        email: 'silvia.conti@example.com',
        date: '2026-02-22',
        time: '19:30',
        people: 3,
        status: 'confirmed',
        createdAt: '2026-02-18T09:30:00Z'
    },
    {
        id: 'b7',
        name: 'Fabio Esposito',
        phone: '+39 333 7777777',
        email: 'fabio.esposito@example.com',
        date: '2026-02-23',
        time: '20:30',
        people: 4,
        notes: 'Cena di lavoro',
        status: 'pending',
        createdAt: '2026-02-19T11:00:00Z'
    },
    {
        id: 'b8',
        name: 'Laura Galli',
        phone: '+39 333 8888888',
        email: 'laura.galli@example.com',
        date: '2026-02-23',
        time: '19:00',
        people: 2,
        status: 'confirmed',
        createdAt: '2026-02-19T12:15:00Z'
    }
];
