import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private jwtHelper: JwtHelperService, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateService.setDefaultLang("en");
    this.translateService.use("en");
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)){
    return true;
    }

    return false;
  }
  
  logOut = () => {
    localStorage.removeItem("jwt");
  }

  onClick(language: string) {
    this.translateService.use(language);
  }
}
