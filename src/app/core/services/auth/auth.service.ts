import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = JSON.parse(`${localStorage.getItem('accessToken')}`);
    return !this.jwtHelper.isTokenExpired(token);
  }
}
