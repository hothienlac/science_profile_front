import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentComponent } from './assignment.component';
import { AssignmentRoutingModule } from './assignment-routing.module';

@NgModule({
  declarations: [AssignmentComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
  ]
})
export class AssignmentModule { }
