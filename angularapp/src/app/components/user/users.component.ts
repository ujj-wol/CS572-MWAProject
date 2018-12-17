import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
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
