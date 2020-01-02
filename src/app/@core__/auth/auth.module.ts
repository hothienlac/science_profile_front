import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequirePasswordComponent } from './require-password/require-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RequirePasswordComponent,
    ResetPasswordComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class AuthModule { }
