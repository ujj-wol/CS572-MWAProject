import { Component } from '@angular/core';
import { UsersService } from './services/user/users.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor(data : UsersService) {
    data.getOnlineData();
  }

}
