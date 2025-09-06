import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  imports:[RouterOutlet,RouterLink],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // or your actual style file
})
export class App {
  constructor(public auth: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
