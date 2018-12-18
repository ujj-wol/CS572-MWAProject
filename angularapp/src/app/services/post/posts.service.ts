import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
 
  getAllPost(){
    return this.http.get('http://localhost:4000/api/posts')
  }

  getPostsByUser(username: string){
    return this.http.get(`http://localhost:4000/api/posts/${username}`);
  }

  getPostsById(id: string){
    return this.http.get(`http://localhost:4000/api/posts/tag/${id}`);
  }

  add(username, title, body){
    return this.http.post('http://localhost:4000/api/posts/add',{
        username : username,
        title : title,
        body: body
    });
  }
}
