import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apipath: any="https://mwaserver.herokuapp.com"; 
  //private apipath: any="http://localhost:4000";

  constructor(private http: HttpClient) { }
 
  getAllPost(){
    return this.http.get(`${this.apipath}/api/posts`)
  }

  getPostsByUser(username: string){
    return this.http.get(`${this.apipath}/api/posts/${username}`);
  }

  getPostsById(id: string){
    return this.http.get(`${this.apipath}/api/posts/tag/${id}`);
  }

  add(username, title, body){
    return this.http.post(`${this.apipath}/api/posts/add`,{
        username : username,
        title : title,
        body: body
    });
  }

  addComment(username, text, postId) {
    return this.http.patch(`${this.apipath}/api/posts/${postId}/addComment`, {
      username: username,
      comment_text: text
    })
  }
}
