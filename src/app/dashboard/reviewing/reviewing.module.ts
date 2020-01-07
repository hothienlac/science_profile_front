import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewingComponent } from './reviewing.component';
import { ReviewingRoutingModule } from './reviewing-routing.module';



@NgModule({
  declarations: [ReviewingComponent],
  imports: [
    CommonModule,
    ReviewingRoutingModule,
  ],
})
export class ReviewingModule { }
