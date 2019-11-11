import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

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
  NbListModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../theme.module';

import { ScienceProfileFormComponent } from './science-profile-form.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { CareerComponent } from './career/career.component';
import { ForeignLanguagesComponent } from './foreign-languages/foreign-languages.component';
import { ExperienceAndReserchesComponent } from './experience-and-reserches/experience-and-reserches.component';
import { DataService } from './data.service';
import { UtilModule } from '../util/util.module';



@NgModule({
  imports: [
    CommonModule,

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
    NbListModule,

    Ng2SmartTableModule,
    ThemeModule,
    
    FormsModule,
    ReactiveFormsModule,
    UtilModule,
  ],
  declarations: [
    ScienceProfileFormComponent,
    PersonalInformationComponent,
    EducationComponent,
    CareerComponent,
    ForeignLanguagesComponent,
    ExperienceAndReserchesComponent],
  providers: [
    DataService,
  ],
  exports: [
    ScienceProfileFormComponent
  ],
})
export class ScienceProfileFormModule { }
