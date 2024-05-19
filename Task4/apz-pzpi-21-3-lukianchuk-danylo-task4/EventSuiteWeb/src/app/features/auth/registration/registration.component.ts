import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/api/models'
import { AuthService } from 'src/app/api/services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: RegisterRequest;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
    this.model = {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
   }

  ngOnInit(): void {
    
  }

  register = ( form: NgForm) => {
    if (form.valid) {
      this.authService.apiAuthRegisterPost({body: this.model})
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('login');
          alert("Registration successful. Please login.");
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
    }
  }
}
