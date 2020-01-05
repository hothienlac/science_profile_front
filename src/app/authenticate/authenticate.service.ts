import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  isAuthenticated() {
    throw new Error("Method not implemented.");
  }
  login(user: { 'email': string; 'password': string; }) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
