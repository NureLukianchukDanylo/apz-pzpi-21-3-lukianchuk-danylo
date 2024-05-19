import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/api/models/event-model';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { EventService } from 'src/app/api/services/event.service';

@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css']
})
export class GetEventsComponent implements OnInit{
  events$?: Observable<Event[]>;
  deleteEventSubscription?: Subscription;


  constructor(private http: HttpClient, private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    var queryParams = new HttpParams();
    this.events$ = this.eventService.apiEventEventsGet({'PageInfo.Size': 10, 'PageInfo.Number': 1}).pipe(
      map((response: any) => {
        return response.map((event: any) => {
          const userId = event.user?.id;
          return {
            id: event.id,
            name: event.name,
            description: event.description,
            startDate: event.startDate,
            endDate: event.endDate,
            paidEntrance: event.paidEntrance,
            size: event.size,
            userId: userId
          } as Event;
        });
      })
    );
    this.events$.subscribe({
    next: (result: any) => this.events$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
  });
  }

  onDelete(id: number): void {
      this.deleteEventSubscription = this.eventService.apiEventEventIdDelete({id: id})
      .subscribe({
        next: (response) => {
          this.ngOnInit();
        }
      });
    }
}
