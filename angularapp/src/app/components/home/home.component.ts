import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private myRouter: Router) {
  }

  logout() {
    localStorage.removeItem('token');
    console.log("Token after logout: " + localStorage.getItem('token'));
    this.myRouter.navigate(['/login']);
  }
}
