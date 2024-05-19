import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { User } from 'src/app/api/models/user-model';
import { UserService } from 'src/app/api/services';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent {
  users$?: Observable<User[]>;
  deleteUserSubscription?: Subscription;
  
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.apiUserUsersGet();
    //this.users$ = this.http.get<User[]>("http://localhost:5001/api/User/users", {params: queryParams});
    this.users$.subscribe({
    next: (result: any) => this.users$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
  });
  }

  onDelete(email: string): void {
    
    this.deleteUserSubscription = this.userService.apiUserUserNameDelete({userName: email})//this.http.delete(`http://localhost:5001/api/User/${email}`)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
