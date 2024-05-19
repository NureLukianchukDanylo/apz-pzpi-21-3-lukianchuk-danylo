import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/api/models/user-model'; 
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateUserRequest } from 'src/app/api/models/update-user-request';
import { UserService } from 'src/app/api/services';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {
  model?: User;
  email: string | null = null;

  routeSubscription?: Subscription;
  getUserSubscription?: Subscription;
  updateUserSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private userService: UserService) {
  }
  ngOnInit(): void {

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.email = params.get('email');
        if (this.email) {

          
          this.getUserSubscription = this.userService.apiUserUserNameGet({userName: this.email})//this.http.get<User>(`http://localhost:5001/api/User/${this.email}`)
          .subscribe({
            next: (response: any) => {
              this.model = response;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.email) {
      var updateUserRequest: UpdateUserRequest =  {
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        companyName: this.model.companyName,
        email: this.model.email,
      };

      
      this.updateUserSubscription = this.userService.apiUserUsernamePut({username: this.email, body: updateUserRequest})//this.http.put(`http://localhost:5001/api/User/${this.email}`, updateUserRequest)
      .subscribe({
        next: (response) => {this.router.navigateByUrl('users')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getUserSubscription?.unsubscribe();
    this.updateUserSubscription?.unsubscribe();
  }

}