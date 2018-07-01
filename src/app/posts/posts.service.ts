import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  // Angular 6 syntax
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    // Creates new array with the private array and returns it
    return this.posts;
  }
  // Object we can listen to
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
  }
}
