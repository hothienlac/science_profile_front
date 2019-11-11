import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../@theme/template/miscellaneous/miscellaneous.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbMenuModule,
    ThemeModule,
    MiscellaneousModule,
  ]
})
export class AdminModule { }
