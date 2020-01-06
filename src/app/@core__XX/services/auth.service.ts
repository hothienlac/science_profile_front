import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {
    IUser,
    ERoles,
    IUserRegistrationInput,
} from '@ngx/models';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    isAuthenticated(): Promise<boolean> {
        return this.http
            .get<boolean>('/api/auth/authenticated')
            .pipe(first())
            .toPromise();
    }

    login(loginInput): Observable<{ token?: string }> {
        return this.http.post<{ token?: string }>(
            '/api/auth/login',
            loginInput,
        );
    }

    register(registerInput: IUserRegistrationInput): Observable<boolean> {
        return this.http.post<boolean>('/api/auth/register', registerInput);
    }

    hasRole(roles: ERoles[]): Promise<boolean> {
        return this.http.get<boolean>(`/api/auth/role`, { params: { roles } })
            .pipe(first())
            .toPromise();
    }
}
