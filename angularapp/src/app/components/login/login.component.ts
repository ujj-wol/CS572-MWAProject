import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@Input() username;
@Input() password;

  constructor(private loginService: LoginService, private router: Router) {
}

validateLogin() {
  if(this.username && this.password) {
      this.loginService.validateLogin(this.username, this.password).subscribe(result => {
      console.log('result is ', result);
      if(result === '1') {
        this.router.navigate(['/home']);
      } else {
        alert('Wrong username password');
      }
       
    }, error => {
      console.log('error is ', error);
    });
  } else {
      alert('enter user name and password');
  }
}

  ngOnInit() {
  }

}
