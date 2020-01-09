import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '../@theme/template/miscellaneous/not-found/not-found.component';
import { ERoles } from '@ngx/models';
import { RoleGuard } from '../guard/role.guard';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'research',
                loadChildren: () =>
                    import('./research/research.module').then((m) => m.ResearchModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'setting',
                loadChildren: () =>
                    import('./setting/setting.module').then((m) => m.SettingModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'published',
                loadChildren: () =>
                    import('./published/published.module').then((m) => m.PublishedModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'pending',
                loadChildren: () =>
                    import('./pending/pending.module').then((m) => m.PendingModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'profile',
                loadChildren: () =>
                    import('./profile/profile.module').then((m) => m.ProfileModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'help',
                loadChildren: () =>
                    import('../@theme/template/help/help.module').then((m) => m.HelpModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'about',
                loadChildren: () =>
                    import('../@theme/template/about/about.module').then((m) => m.AboutModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                        ERoles.USER,
                    ],
                },
            },
            {
                path: 'reviewing',
                loadChildren: () =>
                    import('./reviewing/reviewing.module').then((m) => m.ReviewingModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                    ],
                },
            },
            {
                path: 'assignment',
                loadChildren: () =>
                    import('./assignment/assignment.module').then((m) => m.AssignmentModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                    ],
                },
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('./users/users.module').then((m) => m.UsersModule),
                canActivate: [ RoleGuard ],
                data: {
                    expectedRole: [
                        ERoles.ADMIN,
                    ],
                },
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
export class DashboardRoutingModule { }
