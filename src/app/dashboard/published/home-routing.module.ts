import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishedComponent } from './published.component';


const routes: Routes = [
  {
    path: '',
    component: PublishedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishedRoutingModule { }
