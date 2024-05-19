import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventRequest } from 'src/app/api/models/event-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/api/models/user-model';
import { EventService } from 'src/app/api/services/event.service';
import { UserService } from 'src/app/api/services/user.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {
  model: EventRequest;
  users$?: Observable<User[]>;
  private AddEventSubscription?: Subscription;

  constructor(private http : HttpClient, private router: Router, private eventService: EventService, private userService: UserService) {
    this.model = {
      startDate: new Date(),
      endDate: new Date(),
      size: 0,
      description: '',
      name: '',
      paidEntrance: false,
      userId: ''
    };
  }

  ngOnInit(): void {
    this.users$ = this.userService.apiUserUsersGet(); this.http.get<User[]>("http://localhost:5001/api/User/users");
  }

  onFormSubmit(): void {
    this.AddEventSubscription = this.eventService.apiEventEventPost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('events')}
    });
  }

  ngOnDestroy(): void {
    this.AddEventSubscription?.unsubscribe();
  }
}
