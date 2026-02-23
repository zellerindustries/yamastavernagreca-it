import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';

@Component({
  selector: 'app-root',
  imports: [AdminDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('admin');
}
