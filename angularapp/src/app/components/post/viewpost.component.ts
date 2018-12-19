import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/post/posts.service';
import { IPost } from 'src/app/store/ipost';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  private today = new Date().getDate();
  private postId;
  private postData;
  // private title;
  // private body;
  private comments: any[];

  constructor(private myRoute: ActivatedRoute, private myPostsService: PostsService) {
    myRoute.queryParams.subscribe(params => { this.postId = params.postId });
  }

  ngOnInit() {
    this.myPostsService.getPostsById(this.postId).subscribe(
      data => {
        this.postData = data[0];
        // this.title = this.postData.title;
        // this.body = this.postData.body;
        this.comments = data[0].comments;
      });

    this.myPostsService.emitter.subscribe(data => {
      this.comments.push({
        username: localStorage.getItem("loggedInUser"),
        comment_text: data
      });
      console.log("testing on viewpost:" + this.comments);
    });
  }

}
