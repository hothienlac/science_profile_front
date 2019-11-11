import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import { NewUserComponent } from './new-user/new-user.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: TableComponent,
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
        path: 'new-user',
        component: NewUserComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
