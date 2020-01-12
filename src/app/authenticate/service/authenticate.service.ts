import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthenticateService {

  constructor( private http: HttpClient ) { }

  async isAuthenticated(): Promise<boolean> {
    return true;
    return this.http
            .get<boolean>('/api/auth/authenticated')
            .pipe(first())
            .toPromise();
  }

  login(user): Observable<{ token?: string, user: any }> {
    return this.http.post<{ token?: string, user: any }>(
            '/api/auth/login',
            user,
    );
  }

  hasRole(roles: [any]): Observable<boolean> {
    return of(true);
    return this.http.get<boolean>(`/api/auth/role`, { params: { roles } });
  }

}
