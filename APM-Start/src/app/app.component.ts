import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './user/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService,
    private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      routerEvent instanceof NavigationStart ? this.loading = true :
      (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError
        || routerEvent instanceof NavigationCancel ) ? this.loading = false : null;
    })
               }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }
}
