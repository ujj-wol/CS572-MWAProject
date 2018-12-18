import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/post/posts.service';
import { Router } from '@angular/router';
import { store } from 'src/app/store/store';
import { addPostAction } from 'src/app/store/actions';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IPost } from 'src/app/store/ipost';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  myForm: FormGroup;
  
  username = "amjad";
  posts;
  unsubscribe;
  postData:IPost;
  
  constructor(private formBuilder: FormBuilder, private postService: PostsService, private router: Router) {
    this.myForm = formBuilder.group({
      'title': ['',Validators.required],
      'body': ['', Validators.required]
  });

  this.myForm.valueChanges.subscribe(
    (data: any) => console.log(data)
  );
   }

  
  add(postData) {
    console.log(`${postData.title} and title ${postData.body}`)
  if(this.username && postData.title && postData.body) {
    this.postService.add(this.username, postData.title, postData.body).subscribe((result:{status: string, id: string}) => {
      
      console.log('result  id is ', result.id);
      if(result) {
        this.router.navigate([`/home`]);
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
    let postData = this.myForm.value;
    console.log(postData);
    store.dispatch(addPostAction(postData));
    this.add(postData);
  }
}
