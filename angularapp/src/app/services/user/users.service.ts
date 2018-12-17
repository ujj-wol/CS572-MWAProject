import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) {  }
  getUserData(): Observable<any>{
    return this.http.get('http://localhost:4000/api/users');
 }

 getOnlineData() : any{
   
    this.getUserData().subscribe(
      resp => {
        //console.log(resp);
         window.localStorage.setItem("data", JSON.stringify(resp));
         
         return JSON.stringify(resp.results);
      },
      err => {
        console.log(err);
      }
    )  

 }

 getCacheData() : any{
   let userData: string = window.localStorage.getItem('data');
   if(userData != null)
      return userData;
     
   else null; 
 }

 getUserByUsername(uuid: string): any {
   console.log("Username: "+ uuid);
  return this.http.get(`http://localhost:4000/api/users/${uuid}`);
 }

 
 isUserExists(uuid: string): boolean {
   const userDataRaw: string = window.localStorage.getItem('data');
   if (userDataRaw == null) {
     return false;
   } else {
     const userData = JSON.parse(userDataRaw);
     for (const user of userData) {
       if (user.login.uuid == uuid) {
         return true;
       }
     }
     return false;
   }
 }
}
