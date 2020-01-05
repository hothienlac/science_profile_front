import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateModule } from './authenticate/authenticate.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticateModule,
  ]
})
export class SecurityModule { }
