import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './../components/user/users.component';
import { ProfileComponent } from '../components/user/profile/profile.component';
import { MyguardGuard } from '../guards/myguard.guard';
import { MypostsComponent } from '../components/user/myposts/myposts.component';
import { MypipePipe } from '../components/user/mypipe.pipe';
import { PostdivComponent } from '../components/user/postdiv.component';


@NgModule({
  declarations: [UsersComponent, ProfileComponent, MypostsComponent, MypipePipe, PostdivComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent, canActivate: [MyguardGuard] }
    ])
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
