import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from '../components/post/addpost.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ViewpostComponent } from '../components/post/viewpost.component';

@NgModule({
  declarations: [AddpostComponent, ViewpostComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'add', component: AddpostComponent },
      { path: 'view', component: ViewpostComponent  }
    ])
  ]
})
export class PostsModule { }
