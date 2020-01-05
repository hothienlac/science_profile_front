import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../@theme/template/miscellaneous/miscellaneous.module';

import { AuthenticateComponent } from './authenticate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthenticateService } from './authenticate.service';
import { StorageService } from './storage.service';
import { RoleGuard } from './role.guard';
import { AuthGuard } from './auth.guard';



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
    NbMenuModule,
    ThemeModule,
    MiscellaneousModule,
  ],
  providers: [
    AuthenticateService,
    StorageService,
    RoleGuard,
    AuthGuard,
  ],
})
export class AuthenticateModule { }
