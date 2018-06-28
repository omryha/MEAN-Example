import { PostsService } from './../posts.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

    constructor(public postsService: PostsService) {}
    enteredValue = '';
    onAddPost() {
        this.postsService.postsList.push(this.enteredValue);
    }

    onDeletePost() {
        this.postsService.postsList.pop();
    }
}