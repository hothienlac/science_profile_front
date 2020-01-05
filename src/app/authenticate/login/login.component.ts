import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  rememberMe: boolean = true;
  user = { 'email': '', 'password': '' };

  constructor(
    private router: Router,
    private authenticate: AuthenticateService,
  ) { }

  ngOnInit() {
    this.authenticate.isAuthenticated();
  }

  onSubmit() {
    this.authenticate.login(this.user);
  }

}
