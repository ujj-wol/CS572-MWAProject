import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user.model';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
 
    //private apipath: any="https://mwaserver.herokuapp.com"; 
   private apipath: any="http://localhost:4000";

    constructor(private http: HttpClient){
 
    }
     
    validateLogin(username, password){
        console.log(`usernaem ${username} password ${password}`)
        return this.http.post(`${this.apipath}/api/users/login`,{
            username : username,
            password : password
        });
      }
 
      add(username, password, email){
        return this.http.post(`${this.apipath}/api/users/add`,{
            username : username,
            password : password,
            email: email
        });
      }

      emitter = new EventEmitter();
      emitValue(value) {
          this.emitter.emit(value);
      }
}