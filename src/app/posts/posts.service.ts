import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  // Angular 6 syntax
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  constructor() { }

  getPosts() {
    // Creates new array with the private array and returns it
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
  }
}
