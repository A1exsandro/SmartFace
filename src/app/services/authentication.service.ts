import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private login_url = "Account/Login";

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>(environment.api_url + this.login_url, {"UserName": user.userName, "Password": user.password})
  }

  logout() {
    localStorage.removeItem('email')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('userName')
    localStorage.removeItem('role')
    localStorage.removeItem('id')
    localStorage.removeItem('authToken')
    localStorage.removeItem('expiresIn')
  }
}