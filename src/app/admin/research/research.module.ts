import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';

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
import { ThemeModule } from 'src/app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ResearchTableComponent } from './research-table/research-table.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    ResearchTableComponent,
    DetailComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    ResearchRoutingModule,

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
  ]
})
export class ResearchModule { }
