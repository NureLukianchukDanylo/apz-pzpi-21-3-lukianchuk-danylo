import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { VenueType } from 'src/app/api/models';
import { Venue } from 'src/app/api/models/venue-model';
import { VenueService } from 'src/app/api/services';

@Component({
  selector: 'app-get-venues',
  templateUrl: './get-venues.component.html',
  styleUrls: ['./get-venues.component.css']
})
export class GetVenuesComponent implements OnInit {
  venues$?: Observable<Venue[]>;
  deleteVenueSubscription?: Subscription;

  constructor(private http: HttpClient, private venueService: VenueService) { }

  ngOnInit(): void {
    this.venues$ = this.venueService.apiVenueVenuesGet({'PageInfo.Size': 10, 'PageInfo.Number': 1})
    .pipe(
      map((response: any) => {
        console.log(response);
        return response.map((venue: any) => {
          const mallId = venue.mall?.id;
          return {
            id: venue.id,
            floor: venue.floor,
            roomNumber: venue.roomNumber,
            services: venue.services,
            maxSize: venue.maxSize,
            square: venue.square,
            type: VenueType[venue.type as keyof typeof VenueType],
            mallId: mallId
          } as Venue;
        });
      })
    );;
    this.venues$.subscribe({
    next: (result: any) => this.venues$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteVenueSubscription = this.venueService.apiVenueVenueIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
