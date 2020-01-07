import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingRoutingModule } from './pending-routing.module';
import { PendingComponent } from './pending.component';


@NgModule({
  declarations: [PendingComponent],
  imports: [
    CommonModule,
    PendingRoutingModule,
  ],
})
export class PendingModule { }
