import { Component, OnDestroy, OnInit } from '@angular/core';
import { Registration } from 'src/app/api/models/registration-model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/api/models/user-model';
import { RegistrationRequest } from 'src/app/api/models/registration-request';
import { Event } from 'src/app/api/models/event-model';
import { EventService } from 'src/app/api/services';
import { RegistrationService } from 'src/app/api/services';
import { UserService } from 'src/app/api/services';

@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.css']
})
export class EditRegistrationComponent implements OnInit, OnDestroy {
  model?: Registration;
  id: number | null = null;
  users$?: Observable<User[]>;
  events$?: Observable<Event[]>;
  selectedEvent?: number;
  selectedUser?: string;

  routeSubscription?: Subscription;
  getRegistrationSubscription?: Subscription;
  updateRegistrationSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private eventService: EventService, private registrationService: RegistrationService, private userService: UserService) {
  }
  ngOnInit(): void {
    this.events$ = this.eventService.apiEventEventsGet();
    this.users$ = this.userService.apiUserUsersGet();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getRegistrationSubscription = this.registrationService.apiRegistrationRegistrationIdGet({id: this.id})
          .subscribe({
            next: (response: any) => {
              response.eventId = response.event?.id;
              response.userId = response.user?.id;
              this.model = response;
              this.selectedEvent = this.model?.eventId;
              this.selectedUser = this.model?.userId;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateRegistrationRequest: RegistrationRequest =  {
        userId: this.selectedUser ?? '',
        eventId: this.selectedEvent ?? 0
      };

      this.updateRegistrationSubscription = this.registrationService.apiRegistrationRegistrationIdPut({id: this.id, body: updateRegistrationRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('registrations')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getRegistrationSubscription?.unsubscribe();
    this.updateRegistrationSubscription?.unsubscribe();
  }

}
