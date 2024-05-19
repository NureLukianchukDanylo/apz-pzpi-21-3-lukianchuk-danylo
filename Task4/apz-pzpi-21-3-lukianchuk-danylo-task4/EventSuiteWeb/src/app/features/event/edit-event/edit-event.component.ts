import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { Event } from 'src/app/api/models/event-model';
import { EventRequest } from 'src/app/api/models/event-request';
import { User } from 'src/app/api/models/user-model';
import { EventService } from 'src/app/api/services/event.service';
import { UserService } from 'src/app/api/services/user.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit, OnDestroy {
  model?: Event;
  id: number | null = null;
  users$?: Observable<User[]>;
  selectedUser?: string;

  routeSubscription?: Subscription;
  getEventSubscription?: Subscription;
  updateEventSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private eventService: EventService) {
  }
  ngOnInit(): void {
    this.users$ = this.userService.apiUserUsersGet();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getEventSubscription = this.eventService.apiEventEventIdGet({id: this.id})
          .subscribe({
            next: (response: any) => {
              response.userId = response.user?.id;
              this.model = response;
              this.selectedUser = this.model?.userId;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateEventRequest: EventRequest =  {
        name: this.model.name,
        description: this.model.description,
        startDate: this.model.startDate,
        endDate: this.model.endDate,
        size: this.model.size,
        paidEntrance: this.model.paidEntrance,
        userId: this.selectedUser ?? ''
      };
      console.log(updateEventRequest);

      this.updateEventSubscription = this.eventService.apiEventEventIdPut({id: this.id, body: updateEventRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('events')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getEventSubscription?.unsubscribe();
    this.updateEventSubscription?.unsubscribe();
  }

}
