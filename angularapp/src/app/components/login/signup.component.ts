import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { Observable } from "rxjs";
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  myForm: FormGroup;

  genders = [
    'male',
    'female'
  ];

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
   
    this.myForm = formBuilder.group({
        'username': ['',Validators.required],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
      'password': ['', Validators.required],
      'gender': ['male'],
    });

    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit() {
    console.log(this.myForm.value);
    let userData = this.myForm.value;
    if(userData.username && userData.password && userData.email) {
      console.log(`username: ${userData.username} password: ${userData.password} body: ${userData.email}`)
      this.loginService.add(userData.username, userData.password, userData.email).subscribe(result => {
        console.log('result is ', result);
        if(result) {
          this.router.navigate(['/login']);
        } else {
          console.log("heeree");
        }
         
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter title and body');
    }
  }
  ngOnInit() {
  }
}


