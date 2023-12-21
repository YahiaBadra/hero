import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  router = inject(Router);

  logout() {
    console.log('Logged out');
    const user = JSON.parse(localStorage.getItem('userData')!);
    if (user) {
      localStorage.removeItem('userData');
      this.router.navigate(['/']);
    }
  }
}
