import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewingRoutingModule } from './reviewing-routing.module';
import { ReviewingComponent } from './reviewing.component';


@NgModule({
  declarations: [ReviewingComponent],
  imports: [
    CommonModule,
    ReviewingRoutingModule,
  ],
})
export class ReviewingModule { }
