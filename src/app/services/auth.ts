import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedInKey = 'loggedInUser';

  login(email: string, password: string): boolean {
    const user = localStorage.getItem('user');
    if (!user) return false;

    const u = JSON.parse(user);
    if (u.email === email && u.password === password) {
      localStorage.setItem(this.isLoggedInKey, JSON.stringify(u));
      return true;
    }
    return false;
  }

  signup(user: { name: string, email: string, password: string }) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.isLoggedInKey);
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.isLoggedInKey) || 'null');
  }

  isLoggedIn() {
    return !!this.getUser();
  }
}