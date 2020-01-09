import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../authenticate';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly authenticateService: AuthenticateService,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean | UrlTree> {
    const expectedRole = next.data.expectedRole;
    const hasRole = await this.authenticateService
      .hasRole(expectedRole)
      .pipe(first())
      .toPromise();

    if (hasRole) {
      return true;
    }

    this.router.navigate(['/auth/login'], {
      queryParams: { returnUrl: state.url },
    });

    return false;
  }
}
