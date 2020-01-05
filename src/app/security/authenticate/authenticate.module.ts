import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousModule } from '../../@theme/template/miscellaneous/miscellaneous.module';

import { AuthenticateComponent } from './authenticate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequirePasswordComponent } from './require-password/require-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    AuthenticateComponent,
    LoginComponent,
    RegisterComponent,
    RequirePasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AuthenticateModule { }
