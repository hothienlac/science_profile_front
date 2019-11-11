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
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ArchiveUserComponent } from './archive-user/archive-user.component';
import { ScienceProfileFormModule } from '../../@theme/template/science-profile-form/science-profile-form.module';
import { DefaultDataService } from 'src/app/@core__/services/default-data.service';
import { UtilModule } from '../../@theme/template/util/util.module';


@NgModule({
  declarations: [
    UsersComponent,
    TableComponent,
    DetailComponent,
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

  providers:[
    DefaultDataService
  ],
})
export class UsersModule { }
