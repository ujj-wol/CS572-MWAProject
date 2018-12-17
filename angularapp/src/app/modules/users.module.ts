import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './../components/user/users.component';
import { ProfileComponent } from '../components/user/profile/profile.component';
import { MyguardGuard } from '../guards/myguard.guard';


@NgModule({
  declarations: [UsersComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent, canActivate: [MyguardGuard] }
    ])
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
