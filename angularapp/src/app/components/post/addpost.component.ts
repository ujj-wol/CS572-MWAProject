import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/post/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  username = "amjad";
  @Input() title;
  @Input() body;
  
  constructor(private postService: PostsService, private router: Router) { }

  add() {
    console.log(`${this.username} and title ${this.title}`)
  if(this.username && this.title && this.body) {
    console.log(`username: ${this.username} title: ${this.title} body: ${this.body}`)
    this.postService.add(this.username, this.title, this.body).subscribe(result => {
      console.log('result is ', result);
      if(result) {
        this.router.navigate(['/home']);
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
  }

}
