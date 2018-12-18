import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/post/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ PostsService ]
})
export class PostsComponent implements OnInit {

  private today = new Date().getDate();
  public posts : any;
  constructor(private showPostService: PostsService) { }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost(){
    this.showPostService.getAllPost().subscribe(result => {
      console.log(result)
        this.posts = result;
    });
  }
}
