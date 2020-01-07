import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { MiscellaneousModule } from '../@theme/template/miscellaneous/miscellaneous.module';

import { AuthenticateComponent } from './authenticate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {
  NbLayoutModule,
  NbCardModule,
  NbCheckboxModule,
  NbButtonModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { AuthenticateService } from './service/authenticate.service';



@NgModule({
  declarations: [
    AuthenticateComponent,
    LoginComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    MiscellaneousModule,

    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule,
    NbSpinnerModule,
  ],
  providers: [
    AuthenticateService,
  ],
})
export class AuthenticateModule { }
