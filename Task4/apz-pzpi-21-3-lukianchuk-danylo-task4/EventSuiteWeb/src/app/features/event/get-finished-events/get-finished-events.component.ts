import { Component, OnInit } from '@angular/core';
import { FinishedEvent } from 'src/app/api/models/finished-event-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { AuthGuardService } from '../../auth/services/auth-guard.service';
import { User } from 'src/app/api/models/user-model';
import { EventService } from 'src/app/api/services';
import { UserService } from 'src/app/api/services/user.service';

@Component({
  selector: 'app-get-finished-events',
  templateUrl: './get-finished-events.component.html',
  styleUrls: ['./get-finished-events.component.css']
})
export class GetFinishedEventsComponent implements OnInit{
  finishedEvents$?: Observable<FinishedEvent[]>;
  userIdSubscription?: Observable<User>;
  userId?: string;


  constructor(private http: HttpClient, private router: Router, private service: AuthGuardService, private eventService: EventService, private userService: UserService) { }

  ngOnInit(): void {
    var username = this.service.getNameFromToken();
    this.getUserId(username).pipe(
      switchMap(userId => {
        return this.eventService.apiEventFinishedEventsUserIdGet({'PageInfo.Size': 10, 'PageInfo.Number': 1, userId: userId});
      })
    ).subscribe({
      next: (result: any) => this.finishedEvents$ = of(result),
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
  
  // Get user id from username
  getUserId(username: string ): Observable<string> {
    return this.userService.apiUserUserNameGet({userName: username}).pipe(
      map((result: User) => {
        this.userId = result.id;
        return this.userId;
      })
    );
  }
}