import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewingComponent } from './reviewing.component';


const routes: Routes = [
  {
    path: '',
    component: ReviewingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewingRoutingModule { }
