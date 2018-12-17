import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
<<<<<<< HEAD
  constructor(private http: HttpClient) { }
  getAllPost(){
    return this.http.get('http://localhost:4000/api/posts')
}
=======

  constructor(private http: HttpClient) { }

  add(username, title, body){
    return this.http.post('http://localhost:4000/api/posts/add',{
        username : username,
        title : title,
        body: body
    });
  }
>>>>>>> 05aefe16e41a514dfdec8f7bcfacea8dbde43b1f
}
