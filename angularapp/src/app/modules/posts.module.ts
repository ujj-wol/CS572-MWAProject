import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from '../components/post/addpost.component';
import { RouterModule } from '@angular/router';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ViewpostComponent } from '../components/post/viewpost.component';
import { CommentsComponent } from '../components/comments/comments.component';

@NgModule({
  declarations: [AddpostComponent, ViewpostComponent, CommentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'add', component: AddpostComponent },
      { path: 'view', component: ViewpostComponent }
    ])
  ]
})
export class PostsModule { }
