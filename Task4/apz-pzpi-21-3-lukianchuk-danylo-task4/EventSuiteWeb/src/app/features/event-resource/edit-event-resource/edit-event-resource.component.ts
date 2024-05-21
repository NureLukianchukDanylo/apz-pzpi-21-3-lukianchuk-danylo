import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventResource } from 'src/app/api/models/event-resource-model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Resource } from 'src/app/api/models/resource-model';
import { EventResourceRequest } from 'src/app/api/models/event-resource-request';
import { Event } from 'src/app/api/models/event-model';
import { EventService } from 'src/app/api/services';
import { EventResourceService } from 'src/app/api/services';
import { ResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-edit-event-resource',
  templateUrl: './edit-event-resource.component.html',
  styleUrls: ['./edit-event-resource.component.css']
})
export class EditEventResourceComponent implements OnInit, OnDestroy {
  model?: EventResource;
  id: number | null = null;
  resources$?: Observable<Resource[]>;
  events$?: Observable<Event[]>;
  selectedEvent?: number;
  selectedResource?: number;

  routeSubscription?: Subscription;
  getEventResourceSubscription?: Subscription;
  updateEventResourceSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private eventService: EventService, private eventResourceService: EventResourceService, private resourceService: ResourceService) {
  }
  ngOnInit(): void {
    this.events$ = this.eventService.apiEventEventsGet();
    this.resources$ = this.resourceService.apiResourceResourcesGet();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getEventResourceSubscription = this.eventResourceService.apiEventResourceEventResourceIdGet({id: this.id})
          .subscribe({
            next: (response: any) => {
              response.eventId = response.event?.id;
              response.resourceId = response.resource?.id;
              this.model = response;
              this.selectedEvent = this.model?.eventId;
              this.selectedResource = this.model?.resourceId;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateEventResourceRequest: EventResourceRequest =  {
        amount: this.model.amount,
        resourceId: this.selectedResource ?? 0,
        eventId: this.selectedEvent ?? 0
      };

      this.updateEventResourceSubscription = this.eventResourceService.apiEventResourceEventResourceIdPut({id: this.id, body: updateEventResourceRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('event-resources')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getEventResourceSubscription?.unsubscribe();
    this.updateEventResourceSubscription?.unsubscribe();
  }

}
