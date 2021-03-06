import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';
import { NbToastrService } from '@nebular/theme';
import { StorageService } from '../../root-service/storage.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    private route: ActivatedRoute,
    private authenticate: AuthenticateService,
    private toastrService: NbToastrService,
    private storageService: StorageService,
  ) {
    this.authenticate.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigate([`/dashboard`]);
      }
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authenticate.login(this.user).subscribe((data) => {
      this.toastrService.success(`Hello ${data.user.userName}`);
      this.storageService.token = data.token;
      this.storageService.userId = data.user._id;
      this.route.queryParams.subscribe(params => {
        if (params.returnUrl) this.router.navigate([params.returnUrl]);
        else this.router.navigate([`/dashboard`]);
      });
    },
    (error: HttpErrorResponse) => {
      if (error.status === 401) {
        this.toastrService.danger('Wrong Password!');
      } else if (error.status === 404) {
        this.toastrService.danger('Could not find Email!');
      } else this.toastrService.warning('Something wrong!\n' + error);
    });
  }

}
