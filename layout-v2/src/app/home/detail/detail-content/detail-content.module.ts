import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailContentComponent } from './detail-content.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailContentComponent, DetailCommentComponent],
  exports:[DetailContentComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class DetailContentModule { }
