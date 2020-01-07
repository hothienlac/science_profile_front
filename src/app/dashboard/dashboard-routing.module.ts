import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '../@theme/template/miscellaneous/not-found/not-found.component';
import { ERoles } from '@ngx/models';


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
                    import('./home/home.module').then(
                        (m) => m.HomeModule,
                    ),
            },
            {
                path: 'research',
                loadChildren: () =>
                    import('./research/research.module').then(
                        (m) => m.ResearchModule,
                    ),
            },
            {
                path: 'setting',
                loadChildren: () =>
                    import('./setting/setting.module').then(
                        (m) => m.SettingModule,
                    ),
            },
            {
                path: 'published',
                loadChildren: () =>
                    import('./published/published.module').then(
                        (m) => m.PublishedModule,
                    ),
            },
            {
                path: 'pending',
                loadChildren: () =>
                    import('./pending/pending.module').then(
                        (m) => m.PendingModule,
                    ),
            },
            {
                path: 'reviewing',
                loadChildren: () =>
                    import('./reviewing/reviewing.module').then(
                        (m) => m.ReviewingModule,
                    ),
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('./users/users.module').then(
                        (m) => m.UsersModule,
                    ),
            },
            {
                path: 'profile',
                loadChildren: () =>
                    import('./profile/profile.module').then(
                        (m) => m.ProfileModule,
                    ),
            },
            {
                path: 'help',
                loadChildren: () =>
                    import('../@theme/template/help/help.module').then((m) => m.HelpModule),
                data: {
                    expectedRole: [
                        // ERoles.DATA_ENTRY,
                        // ERoles.EMPLOYEE,
                        ERoles.ADMIN,
                    ],
                },
            },
            {
                path: 'about',
                loadChildren: () =>
                    import('../@theme/template/about/about.module').then((m) => m.AboutModule),
                data: {
                    expectedRole: [
                        // ERoles.DATA_ENTRY,
                        // ERoles.EMPLOYEE,
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
