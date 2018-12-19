import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loggedInUserName:string;
  constructor(private myRouter: Router, private myLoginService: LoginService) { 
    //to use username data on refresh
    if(localStorage.getItem('loggedInUser') !== "") {
      this.loggedInUserName = localStorage.getItem('loggedInUser');
    }
  }

  isLogined() {
    // console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    // console.log("Token after logout: " + localStorage.getItem('token'));
    this.myRouter.navigate(['/login']); 
  }

  ngOnInit() {
    this.myLoginService.emitter.subscribe(data => this.loggedInUserName = data);
    if(localStorage.getItem('token') !== null) {
      
    }
  }

}
