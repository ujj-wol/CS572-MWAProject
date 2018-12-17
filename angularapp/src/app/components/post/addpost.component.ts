import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/post/posts.service';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store';
import { addPostAction } from 'src/app/store/actions';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  myForm: FormGroup;
  
  username = "amjad";
  @Input() title;
  @Input() body;
  posts;
  unsubscribe;
  
  constructor(private formBuilder: FormBuilder, private postService: PostsService, private router: Router) {
    this.myForm = formBuilder.group({
      'title': ['',Validators.required],
      'body': ['', Validators.required]
  });

  this.myForm.valueChanges.subscribe(
    (data: any) => console.log(data)
  );
   }

  
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
    console.log(this.posts);
    this.unsubscribe = store.subscribe(()=> {this.posts = store.getState().data});
  }

  addPost(value) {
    store.dispatch(addPostAction(value));
  }

  onSubmit() {
    console.log(this.myForm.value)
    store.dispatch(addPostAction(this.myForm.value));
  }
}
