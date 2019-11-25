import { Observable, from, of } from 'rxjs';
import { NbAuthResult, NbAuthStrategy } from '@nebular/auth';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NbAuthStrategyClass } from '@nebular/auth/auth.options';

import { AuthService } from '../services/auth.service';
import { StoreService } from '../services/store.service';
import { IUser } from '@ngx/models';

@Injectable()
export class AuthStrategyService extends NbAuthStrategy {


    private static config = {

        login: {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: [
                'Email or Password is not correct, please try again.',
            ],
            defaultMessages: ['You have been successfully logged in.'],
        },

        // SKIP IT
        register: {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
        },

        logout: {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        },

        requestPass: {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: [
                'Reset password instructions have been sent to your Email.',
            ],
        },

        resetPass: {
            redirect: {
                success: '/',
                failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
        },

    };


    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private store: StoreService,
    ) {
        super();
    }


    static setup(options: { name: string }): [NbAuthStrategyClass, any] {
        return [AuthStrategyService, options];
    }


    authenticate(args: {
        email: string;
        password: string;
        rememberMe?: boolean | null;
    }): Observable<NbAuthResult> {

        const { email, password } = args;

        const rememberMe = args.rememberMe;

        const loginInput = {
            email,
            password,
        };

        return this.authService.login(loginInput).pipe(
            map(
                (res: {
                    token?: string;
                }) => {
                    let token;

                    if (res) {
                        token = res.token;
                    }

                    this.store.token = token;

                    return new NbAuthResult(
                        true,
                        res,
                        AuthStrategyService.config.login.redirect.success,
                        [],
                        AuthStrategyService.config.login.defaultMessages,
                    );
                },
            ),
            catchError((err) => {
                // tslint:disable-next-line: no-console
                console.log(err);

                return of(
                    new NbAuthResult(
                        false,
                        err,
                        false,
                        AuthStrategyService.config.login.defaultErrors,
                        [AuthStrategyService.config.login.defaultErrors],
                    ),
                );
            }),
        );
    }


    register(args: {
        email: string;
        password: string;
        confirmPassword: string;
    }): Observable<NbAuthResult> {
        const { email, password, confirmPassword } = args;

        if (password !== confirmPassword) {
            return Observable.of(
                new NbAuthResult(false, null, null, [
                    'The passwords don\'t match.',
                ]),
            );
        }

        const registerInput = {
            user: {
                email,
            },
            password,
        };

        return this.authService.register(registerInput).pipe(
            map((res) => {
                return new NbAuthResult(
                    true,
                    res,
                    AuthStrategyService.config.register.redirect.success,
                    [],
                    AuthStrategyService.config.register.defaultMessages,
                );
            }),
            catchError((err) => {
                // tslint:disable-next-line: no-console
                console.log(err);

                return of(
                    new NbAuthResult(
                        false,
                        err,
                        false,
                        AuthStrategyService.config.register.defaultErrors,
                        [AuthStrategyService.config.register.defaultErrors],
                    ),
                );
            }),
        );
    }


    logout(): Observable<NbAuthResult> {
        return from(this._logout());
    }


    requestPassword(data?: any): Observable<NbAuthResult> {
        throw new Error('Not implemented yet');
    }


    resetPassword(data: any = {}): Observable<NbAuthResult> {
        throw new Error('Not implemented yet');
    }


    refreshToken(data?: any): Observable<NbAuthResult> {
        throw new Error('Not implemented yet');
    }


    private async _logout(): Promise<NbAuthResult> {
        this.store.clear();

        return new NbAuthResult(
            true,
            null,
            AuthStrategyService.config.logout.redirect.success,
            [],
            AuthStrategyService.config.logout.defaultMessages,
        );
    }
}
