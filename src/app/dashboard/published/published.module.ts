import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishedComponent } from './published.component';
import { PublishedRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [PublishedComponent],
  imports: [
    CommonModule,
    PublishedRoutingModule,
  ],
})
export class PublishedModule { }
