import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { MiscellaneousModule } from '../@theme/template/miscellaneous/miscellaneous.module';

import { AuthenticateComponent } from './authenticate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { StorageService } from './storage.service';
import { RoleGuard } from './role.guard';
import { AuthGuard } from './auth.guard';
import {
  NbLayoutModule,
  NbCardModule,
  NbCheckboxModule,
  NbButtonModule,
} from '@nebular/theme';
import { AuthenticateService } from './authenticate.service';



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
    HttpClientModule,
    AuthenticateRoutingModule,
    MiscellaneousModule,

    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule,
  ],
  providers: [
    StorageService,
    RoleGuard,
    AuthGuard,
    AuthenticateService,
  ],
})
export class AuthenticateModule { }
