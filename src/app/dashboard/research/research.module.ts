import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchComponent } from './research.component';
import { ResearchRoutingModule } from './research-routing.module';



@NgModule({
  declarations: [ResearchComponent],
  imports: [
    CommonModule,
    ResearchRoutingModule,
  ],
})
export class ResearchModule { }
