import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';

import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbAccordionModule,
  NbCheckboxModule,
  NbRadioModule,
  NbSelectModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbDatepickerModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';


import { ScienceProfileFormModule } from '../../@theme/template/science-profile-form/science-profile-form.module';
import { UtilModule } from '../../@theme/template/util/util.module';
import { MiscellaneousModule } from 'src/app/@theme/template/miscellaneous/miscellaneous.module';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    UsersComponent,
    AllComponent,
    DetailComponent,
    NewComponent,
  ],
  providers: [
    UsersService,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

    FormsModule,

    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbAccordionModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbDatepickerModule,

    Ng2SmartTableModule,
    ThemeModule,

    ScienceProfileFormModule,
    UtilModule,

    MiscellaneousModule,
  ],
})
export class UsersModule { }
