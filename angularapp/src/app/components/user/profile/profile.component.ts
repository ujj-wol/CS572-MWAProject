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

  constructor(private myUserService: UsersService) {
    console.log("Profile Comp constructor is called");
  }

  ngOnInit() {
    this.myUserService.getUserById("1").subscribe(
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
