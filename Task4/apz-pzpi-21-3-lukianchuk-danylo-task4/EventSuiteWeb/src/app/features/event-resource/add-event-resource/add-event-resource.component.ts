import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventResourceRequest } from 'src/app/api/models/event-resource-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Resource } from 'src/app/api/models/resource-model';
import { Event } from 'src/app/api/models/event-model';
import { EventService } from 'src/app/api/services';
import { EventResourceService } from 'src/app/api/services';
import { ResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-add-event-resource',
  templateUrl: './add-event-resource.component.html',
  styleUrls: ['./add-event-resource.component.css']
})
export class AddEventResourceComponent implements OnInit, OnDestroy {
  model: EventResourceRequest;
  resources$?: Observable<Resource[]>;
  events$?: Observable<Event[]>;
  private AddEventResourceSubscription?: Subscription;

  constructor(private http : HttpClient, private router: Router, private eventService: EventService, private eventResourceService: EventResourceService, private resourceService: ResourceService) {
    this.model = {
      amount: 0,
      eventId: 0,
      resourceId: 0,
    };
  }

  ngOnInit(): void {
    this.events$ = this.eventService.apiEventEventsGet();
    this.resources$ = this.resourceService.apiResourceResourcesGet();
  }

  onFormSubmit(): void {
    this.AddEventResourceSubscription = this.eventResourceService.apiEventResourceEventResourcePost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('event-resources')}
    });
  }

  ngOnDestroy(): void {
    this.AddEventResourceSubscription?.unsubscribe();
  }
}
