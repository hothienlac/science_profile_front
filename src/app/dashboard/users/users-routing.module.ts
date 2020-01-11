import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from 'src/app/@theme/template/miscellaneous/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
      },
      {
        path: 'all',
        component: AllComponent,
      },
      {
        path: 'new',
        component: NewComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
    },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
