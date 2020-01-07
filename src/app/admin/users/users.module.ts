import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule as ngFormsModule } from '@angular/forms';

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

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ArchiveUserComponent } from './archive-user/archive-user.component';

import { ScienceProfileFormModule } from '../../@theme/template/science-profile-form/science-profile-form.module';
import { UtilModule } from '../../@theme/template/util/util.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserTableComponent,
    UserDetailComponent,
    NewUserComponent,
    ArchiveUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,

    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbAccordionModule,

    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbDatepickerModule,
    ngFormsModule,

    ScienceProfileFormModule,
    UtilModule,
  ],
})
export class UsersModule { }
