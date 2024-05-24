import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/api/services/auth.service';
import { LoginRequest } from 'src/app/api/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;
  credentials: LoginRequest = {userName:'', password:''};

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  login = ( form: NgForm) => {
    if (form.valid) {
      this.authService.apiAuthLoginPost({body: this.credentials})
      .subscribe({
        next: (response: any) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/home"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      });
    }
  }
}
