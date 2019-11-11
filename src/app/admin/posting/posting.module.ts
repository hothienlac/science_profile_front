import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';


@NgModule({
  declarations: [PostingComponent],
  imports: [
    CommonModule,
    PostingRoutingModule
  ]
})
export class PostingModule { }
