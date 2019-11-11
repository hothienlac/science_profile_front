import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserFindInput } from '@ngx/models';
import { first } from 'rxjs/operators';

@Injectable()
export class UsersService {

    constructor(
        private http: HttpClient
    ) { }

    getUserById(id: string): Promise<IUser> {
        return this.http.get<IUser>(`/api/user/${id}`).pipe(first()).toPromise()
    }

    update(userId: string, updateInput: IUserFindInput) {
        return this.http.put(`/api/user/${userId}`, updateInput).pipe(first()).toPromise();
    }
}
