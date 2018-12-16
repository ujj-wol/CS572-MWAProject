import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user.model';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
 
    constructor(private http: HttpClient){
 
    }
     
    validateLogin(username, password){
        console.log(`usernaem ${username} password ${password}`)
        return this.http.post('http://localhost:4000/api/users/login',{
            username : username,
            password : password
        });
      }
 
}