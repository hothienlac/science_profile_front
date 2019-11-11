import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NotFoundComponent } from '../@theme/template/miscellaneous/not-found/not-found.component';
import { RoleGuard } from '../@core__/auth/role.guard';
import { ERoles } from '@ngx/models';


const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
			},
			{
				path: 'users',
				loadChildren: () =>
					import('./users/users.module').then(
						(m) => m.UsersModule
					),
			},
			{
				path: 'help',
				loadChildren: () =>
					import('../@theme/template/help/help.module').then((m) => m.HelpModule),
				canActivate: [RoleGuard],
				data: {
					expectedRole: [
						// ERoles.DATA_ENTRY,
						// ERoles.EMPLOYEE,
						ERoles.ADMIN
					]
				}
			},
			{
				path: 'about',
				loadChildren: () =>
					import('../@theme/template/about/about.module').then((m) => m.AboutModule),
				canActivate: [RoleGuard],
				data: {
					expectedRole: [
						// ERoles.DATA_ENTRY,
						// ERoles.EMPLOYEE,
						ERoles.ADMIN,
					]
				}
			},
			{
				path: '**',
				component: NotFoundComponent,
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
