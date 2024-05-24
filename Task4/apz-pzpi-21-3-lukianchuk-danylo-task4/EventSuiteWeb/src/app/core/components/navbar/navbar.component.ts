import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {TranslateService} from "@ngx-translate/core";
import { AuthGuardService } from 'src/app/api/services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private jwtHelper: JwtHelperService, private translateService: TranslateService) { }

  ngOnInit(): void {
    var language = localStorage.getItem('language');
    if (language == null) {
      localStorage.setItem('language', 'en');
      this.translateService.use('en');
    }
    else {
      this.translateService.use(language);
    }
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
    localStorage.setItem('language', language);
    this.translateService.use(language);
  }
}
