import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingComponent } from './pending.component';
import { PendingRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [PendingComponent],
  imports: [
    CommonModule,
    PendingRoutingModule,
  ],
})
export class PendingModule { }
