import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewUserComponent } from './new-user/new-user.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserTableComponent,
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent,
      },
      {
        path: 'detail',
        redirectTo: '',
      },
      {
        path: 'new-user',
        component: NewUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
