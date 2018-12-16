import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user/users.service';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
    <p>  users   </p>
    <ul>
    <li *ngFor="let user of data">{{user | json}}</li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  data: Object;

  constructor(private userService: UsersService) { 
    let Data: string = userService.getCacheData();   
    if(Data != null)
    {
      console.log(Data);
      this.data = JSON.parse(Data);
    } 
    else{
      console.log('error in users components');
    }
  }

  onGet() {
  }

  ngOnInit() {
  }

}
