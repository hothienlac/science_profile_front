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

import { UtilModule } from '../../@theme/template/util/util.module';
import { MiscellaneousModule } from 'src/app/@theme/template/miscellaneous/miscellaneous.module';
import { UsersService } from './users.service';
import { ProfileComponent } from './detail/profile/profile.component';
import { PersonalInformationComponent } from './detail/profile/personal-information/personal-information.component';
import { CareerComponent } from './detail/profile/career/career.component';
import { EducationComponent } from './detail/profile/education/education.component';
import {
  ExperienceAndResearchesComponent,
} from './detail/profile/experience-and-researches/experience-and-researches.component';
import { ForeignLanguagesComponent } from './detail/profile/foreign-languages/foreign-languages.component';
import { ProfileService } from './detail/profile/profile.service';
import { CareerDialogComponent } from './detail/profile/career/career-dialog/career-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    AllComponent,
    DetailComponent,
    NewComponent,
    ProfileComponent,
    PersonalInformationComponent,
    CareerComponent,
    EducationComponent,
    ExperienceAndResearchesComponent,
    ForeignLanguagesComponent,
    CareerDialogComponent,
  ],
  providers: [
    UsersService,
    ProfileService,
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

    UtilModule,

    MiscellaneousModule,
  ],
  entryComponents: [
    CareerDialogComponent,
  ],
})
export class UsersModule { }
