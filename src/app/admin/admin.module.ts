import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../@theme/template/miscellaneous/miscellaneous.module';
import { ResearchComponent } from './research/research.component';
import { NewComponent } from './research/new/new.component';
import { DetailComponent } from './research/detail/detail.component';


@NgModule({
  declarations: [AdminComponent, ResearchComponent, NewComponent, DetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbMenuModule,
    ThemeModule,
    MiscellaneousModule,
  ],
})
export class AdminModule { }
