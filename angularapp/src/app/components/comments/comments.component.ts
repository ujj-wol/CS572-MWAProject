import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostsService } from 'src/app/services/post/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private commentForm: FormGroup;
  private postId;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private myPostsService: PostsService, private router: Router) {
    route.queryParams.subscribe(params => { this.postId = params.postId });
    this.commentForm = formBuilder.group({
      comment: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(localStorage.getItem('loggedInUser') + this.commentForm.value.comment);

    this.myPostsService.addComment(localStorage.getItem('loggedInUser'),
      this.commentForm.value.comment, this.postId)
      .subscribe(
        resp => {
          console.log(resp);
          this.myPostsService.emitValue(this.commentForm.value.comment);  //instead better to receive this comment from response and emit this value
          this.commentForm.reset();
        },
        err => { console.log(err) }
      )
    //this.router.navigate([`/home`]);
  }
}
