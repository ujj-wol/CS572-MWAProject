import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostsService } from 'src/app/services/post/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private myPostsService: PostsService) {
    this.commentForm = formBuilder.group({
      comment: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(localStorage.getItem('loggedInUser') + this.commentForm.value.comment);

    this.myPostsService.addComment(localStorage.getItem('loggedInUser'), 
                                  this.commentForm.value.comment, "5c1662005e4b1a86330e6d46")
                                  .subscribe(
                                    resp => {console.log(resp)},
                                    err => {console.log(err)}
                                  )
  }
}
