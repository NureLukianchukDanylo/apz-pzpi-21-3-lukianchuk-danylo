import { Component, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from 'src/app/api/models/reservation-model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Venue } from 'src/app/api/models/venue-model';
import { ReservationRequest } from 'src/app/api/models/reservation-request';
import { Event } from 'src/app/api/models/event-model';
import { EventService } from 'src/app/api/services';
import { ReservationService } from 'src/app/api/services';
import { VenueService } from 'src/app/api/services';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit, OnDestroy {
  model?: Reservation;
  id: number | null = null;
  venues$?: Observable<Venue[]>;
  events$?: Observable<Event[]>;
  selectedEvent?: number;
  selectedVenue?: number;

  routeSubscription?: Subscription;
  getReservationSubscription?: Subscription;
  updateReservationSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private eventService: EventService, private reservationService: ReservationService, private venueService: VenueService) {
  }
  ngOnInit(): void {
    this.events$ = this.eventService.apiEventEventsGet();
    this.venues$ = this.venueService.apiVenueVenuesGet();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getReservationSubscription = this.reservationService.apiReservationReservationIdGet({id: this.id})
          .subscribe({
            next: (response: any) => {
              response.eventId = response.event?.id;
              response.venueId = response.venue?.id;
              this.model = response;
              this.selectedEvent = this.model?.eventId;
              this.selectedVenue = this.model?.venueId;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateReservationRequest: ReservationRequest =  {
        description: this.model.description,
        venueId: this.selectedVenue ?? 0,
        eventId: this.selectedEvent ?? 0
      };

      this.updateReservationSubscription = this.reservationService.apiReservationReservationIdPut({id: this.id, body: updateReservationRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('reservations')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getReservationSubscription?.unsubscribe();
    this.updateReservationSubscription?.unsubscribe();
  }

}
