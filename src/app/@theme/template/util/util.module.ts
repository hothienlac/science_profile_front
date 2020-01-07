import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmService } from './confirm.service';
import { ConfirmComponent } from './confirm/confirm.component';

import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';


@NgModule({
  declarations: [ConfirmComponent],
  imports: [
    CommonModule,

    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule.forChild(),
    NbInputModule,
    NbPopoverModule,
    NbSelectModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
  ],
  providers: [
    ConfirmService,
  ],
  entryComponents: [
    ConfirmComponent,
  ],
  exports: [
  ],
})
export class UtilModule { }
