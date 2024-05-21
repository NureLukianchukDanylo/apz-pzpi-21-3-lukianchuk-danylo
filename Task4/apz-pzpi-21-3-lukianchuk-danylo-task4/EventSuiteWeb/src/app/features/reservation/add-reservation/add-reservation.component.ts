import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReservationRequest } from 'src/app/api/models/reservation-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Venue } from 'src/app/api/models/venue-model';
import { Event } from 'src/app/api/models/event-model';
import { EventService } from 'src/app/api/services';
import { ReservationService } from 'src/app/api/services';
import { VenueService } from 'src/app/api/services';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit, OnDestroy {
  model: ReservationRequest;
  venues$?: Observable<Venue[]>;
  events$?: Observable<Event[]>;
  private AddReservationSubscription?: Subscription;

  constructor(private http : HttpClient, private router: Router, private eventService: EventService, private reservationService: ReservationService, private venueService: VenueService) {
    this.model = {
      description: '',
      eventId: 0,
      venueId: 0,
    };
  }

  ngOnInit(): void {
    this.events$ = this.eventService.apiEventEventsGet();
    this.venues$ = this.venueService.apiVenueVenuesGet();
  }

  onFormSubmit(): void {
    this.AddReservationSubscription = this.reservationService.apiReservationReservationPost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('reservations')}
    });
  }

  ngOnDestroy(): void {
    this.AddReservationSubscription?.unsubscribe();
  }
}
