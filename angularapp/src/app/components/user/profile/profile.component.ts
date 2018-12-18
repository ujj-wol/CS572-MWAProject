import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private userData;
  username;
  email;
  private loggedInUsername: string;

  constructor(private myUserService: UsersService) {
    console.log("Profile Comp constructor is called");
    if(localStorage.getItem('loggedInUser') !== "") {
      this.loggedInUsername = localStorage.getItem('loggedInUser');
    }
  }

  ngOnInit() {
    this.myUserService.getUserByUsername(this.loggedInUsername).subscribe(
      resp => {
        this.userData = resp[0];
        this.username = this.userData.username;
        this.email = this.userData.email;
      },
      err => {
        console.log("error occurred in getting userdata");
        console.log(err);
      })
  }

}
