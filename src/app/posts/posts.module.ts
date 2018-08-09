import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngulerMaterialModule } from '../anguler-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngulerMaterialModule,
    RouterModule
  ],
  declarations: [
    PostCreateComponent,
    PostListComponent
  ]
})
export class PostsModule { }
