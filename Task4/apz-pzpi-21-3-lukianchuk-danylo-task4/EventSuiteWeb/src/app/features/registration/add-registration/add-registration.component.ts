import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegistrationRequest } from 'src/app/api/models/registration-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/api/models/user-model';
import { Event } from 'src/app/api/models/event-model';
import { EventService } from 'src/app/api/services';
import { RegistrationService } from 'src/app/api/services';
import { UserService } from 'src/app/api/services';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit, OnDestroy {
  model: RegistrationRequest;
  users$?: Observable<User[]>;
  events$?: Observable<Event[]>;
  private AddRegistrationSubscription?: Subscription;

  constructor(private http : HttpClient, private router: Router, private eventService: EventService, private registrationService: RegistrationService, private userService: UserService) {
    this.model = {
      eventId: 0,
      userId: '',
    };
  }

  ngOnInit(): void {
    this.events$ = this.eventService.apiEventEventsGet();
    this.users$ = this.userService.apiUserUsersGet();
  }

  onFormSubmit(): void {
    this.AddRegistrationSubscription = this.registrationService.apiRegistrationRegistrationPost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('registrations')}
    });
  }

  ngOnDestroy(): void {
    this.AddRegistrationSubscription?.unsubscribe();
  }
}
