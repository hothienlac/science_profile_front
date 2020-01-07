import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research.component';
import { DetailComponent } from './detail/detail.component';
import { ResearchTableComponent } from './research-table/research-table.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: ResearchComponent,
    children: [
      {
        path: '',
        component: ResearchTableComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'detail',
        redirectTo: '',
      },
      {
        path: 'new',
        component: NewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRoutingModule { }
