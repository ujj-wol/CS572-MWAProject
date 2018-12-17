import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  add(username, title, body){
    return this.http.post('http://localhost:4000/api/posts/add',{
        username : username,
        title : title,
        body: body
    });
  }
}
