import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishedRoutingModule } from './published-routing.module';
import { PublishedComponent } from './published.component';


@NgModule({
  declarations: [PublishedComponent],
  imports: [
    CommonModule,
    PublishedRoutingModule
  ]
})
export class PublishedModule { }
