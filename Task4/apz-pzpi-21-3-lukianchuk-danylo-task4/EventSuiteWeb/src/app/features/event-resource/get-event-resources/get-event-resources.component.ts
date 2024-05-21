import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { EventResourceService } from 'src/app/api/services';
import { EventService } from 'src/app/api/services';
import { EventResource } from 'src/app/api/models/event-resource-model';

@Component({
  selector: 'app-get-event-resources',
  templateUrl: './get-event-resources.component.html',
  styleUrls: ['./get-event-resources.component.css']
})
export class GetEventResourcesComponent implements OnInit {
  eventResources$?: Observable<EventResource[]>;
  deleteEventResourceSubscription?: Subscription;

  constructor(private http: HttpClient, private eventResourceService: EventResourceService, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventResources$ = this.eventResourceService.apiEventResourceEventResourcesGet({'PageInfo.Size': 10, 'PageInfo.Number': 1}).pipe(
      map((response: any) => {
        return response.map((eventResource: any) => {
          return {
            id: eventResource.id,
            amount: eventResource.amount,
            eventId: eventResource.event?.id,
            resourceId: eventResource.resource?.id,
          } as EventResource;
        });
      })
    );;
    this.eventResources$.subscribe({
    next: (result: any) => this.eventResources$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteEventResourceSubscription = this.eventResourceService.apiEventResourceEventResourceIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
