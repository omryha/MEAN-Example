import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/posts/';

@Injectable({
  // Angular 6 syntax
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{posts: Post[], postCount: number}>();

  constructor(private http: HttpClient, private router: Router) { }

  getPosts(postsPerPage: number, currentPage: number) {
    // Creates new array with the private array and returns it
    // Get method converts for us the JSON data to JavaScript
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http.get<{ message: string, posts: any, maxPosts: number }>(BACKEND_URL + queryParams)
      .pipe(map((postData) => {
        return { postData: postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
            imagePath: post.imagePath,
            creator: post.creator
          };
        }), maxPosts: postData.maxPosts};
      }))
      .subscribe((transformedPostData) => {
        this.posts = transformedPostData.postData;
        this.postsUpdated.next({ posts: [...this.posts], postCount: transformedPostData.maxPosts});
      });
  }
  // Object we can listen to
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{
      _id: string,
      title: string,
      content: string,
      imagePath: string,
      creator: string,
     }>(BACKEND_URL + id);
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData(); // FormData allows to combine blob and text formats
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title);
    this.http.post<{ message: string, post: Post }>(BACKEND_URL, postData)
      .subscribe((responseData) => {
        this.router.navigate(['/']);
      });
  }

  updatePost(id: string, title: string, content: string, image: File | string) {
    // Checks in we get a URL image or Blob
    let postData: Post | FormData;
    if (typeof (image) === 'object') {
      postData = new FormData();
      postData.append('id', id);
      postData.append('title', title);
      postData.append('content', content);
      postData.append('image', image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
        creator: null
      };
    }
    const post: Post = { id: id, title: title, content: content, imagePath: null, creator: null };
    this.http.put(BACKEND_URL + id, post)
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

  deletePost(postId: string) {
    return this.http.delete(BACKEND_URL + postId);
  }
}
