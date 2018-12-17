import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  private posts=["first post", "second post", "third post"];

  private userPosts;
  constructor() { }

  ngOnInit() {
  }

}
