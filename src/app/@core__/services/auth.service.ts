import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import {
	IUser,
	ERoles,
	IUserRegistrationInput
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

	login(loginInput): Observable<{ user?: IUser; token?: string }> {
		return this.http.post<{ user?: IUser; token?: string }>(
			'/api/auth/login',
			loginInput
		);
	}

	// register(registerInput: IUserRegistrationInput): Observable<IUser> {
	// 	return this.http.post<IUser>('/api/auth/register', registerInput);
	// }

	hasRole(roles: ERoles[]): Observable<boolean> {
		return this.http.get<boolean>(`/api/auth/role`, { params: { roles } });
	}
}
