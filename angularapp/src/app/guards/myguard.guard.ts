import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsersService } from '../services/user/users.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {

  constructor(private dataService: UsersService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.dataService.isUserExists(next.params.id)) {
        return true;
      }  
      this.router.navigate(['/error']); 
    return true;
  }
}
