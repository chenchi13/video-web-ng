import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'
import { User } from './user';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  register(user: User) {
    return this.http.post('http://localhost:52804/api/accounts/register', user)
  }

  login(user: User): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>('http://localhost:52804/api/accounts/login', user)
  }

  logout() {
    return this.http.get('http://localhost:52804/api/accounts/logout')
  }
}
