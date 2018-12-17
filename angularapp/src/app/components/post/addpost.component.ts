import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/post/posts.service';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store';
import { addPostAction } from 'src/app/store/actions';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  username = "amjad";
  @Input() title;
  @Input() body;
  posts;
  unsubscribe;
  
  constructor(private postService: PostsService, private router: Router) { }

  add() {
    console.log(`${this.username} and title ${this.title}`)
  if(this.username && this.title && this.body) {
    this.postService.add(this.username, this.title, this.body).subscribe(result => {
      console.log('result is ', result);
      if(result) {
        this.router.navigate(['/post/view']);
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
    this.posts = store.getState().data;
    this.unsubscribe = store.subscribe(()=> {this.posts = store.getState().data});
  }

  addPost(value) {
    store.dispatch(addPostAction(value));
  }

  onSubmit() {
    //console.log(this.myForm.value);
  }
}
