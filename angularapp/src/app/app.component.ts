import { Component } from '@angular/core';
import { UsersService } from './services/user/users.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['users']">Users</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(data : UsersService) {
    data.getOnlineData();
  }

}
