import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResearchComponent } from './research.component';


const routes: Routes = [
  {
    path: '',
    component: ResearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRoutingModule { }
