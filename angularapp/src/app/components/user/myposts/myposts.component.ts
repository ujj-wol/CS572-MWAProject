import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/post/posts.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  //private userPosts=["first post", "second post", "third post"];
  private userPosts: any;

  constructor(private myPostService: PostsService) { }

  ngOnInit() {
    this.getPostsForUser();
  }

  getPostsForUser() {
    this.myPostService.getPostsByUser("ujjwol").subscribe(
      data => {
        this.userPosts = data;
        console.log(data);
      }
    )
  }

  private fakePosts = [{title: "post1", body: 'abc'}, {title: "post2", body: 'cde'}, {title: "post3", body: 'def'}];

}
