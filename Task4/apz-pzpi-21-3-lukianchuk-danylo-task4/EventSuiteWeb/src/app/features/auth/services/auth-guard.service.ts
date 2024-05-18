import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private router:Router, private jwtHelper: JwtHelperService){}
  
  // Check if user is logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    this.router.navigate(["login"]);
    return false;
  }

  // Get username from access token
  getNameFromToken(): string {
    const token = localStorage.getItem("jwt");
    if (token) {
      var username = this.jwtHelper.decodeToken(token)['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      return username;
    }
    return "";
  }
}
