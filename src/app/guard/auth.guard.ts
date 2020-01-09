import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../authenticate/service/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthenticateService,
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    return true;
    const isAuthenticated = await this.authService.isAuthenticated();
    if (isAuthenticated) {
      return true;
    }
    this.router.navigate(['/authenticate/login'], {
      queryParams: { returnUrl: state.url },
    });
  }
}
