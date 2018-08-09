import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create.component';
import { PostListComponent } from '../post-list/post-list.component';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { AngulerMaterialModule } from '../../anguler-material.module';
import { RouterModule } from '../../../../node_modules/@angular/router';

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
