import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private myRouter: Router) { 
    
  }

  logout() {
    localStorage.removeItem('token');
    console.log("Token after logout: " + localStorage.getItem('token'));
    this.myRouter.navigate(['/login']); 
  }

  ngOnInit() {
    if(localStorage.getItem('token') !== null) {
      
    }
  }

}
