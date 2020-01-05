import { Injectable } from '@angular/core';
import { IUser } from '@ngx/models';

@Injectable()
export class StorageService {

  constructor() { }

  get userId(): IUser['id'] | null {
    return localStorage.getItem('_userId') || null;
  }

  set userId(id: IUser['id'] | null) {
    if (id == null) {
      localStorage.removeItem('_userId');
    } else {
      localStorage.setItem('_userId', id);
    }
  }

  get token(): string | null {
    return localStorage.getItem('token') || null;
  }

  set token(token: string) {
    if (token == null) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', token);
    }
  }

  clear() {
    localStorage.clear();
  }
}
