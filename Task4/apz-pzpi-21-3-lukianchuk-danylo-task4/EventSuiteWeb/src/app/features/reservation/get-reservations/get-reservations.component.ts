import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { ReservationService } from 'src/app/api/services';
import { EventService } from 'src/app/api/services';
import { Reservation } from 'src/app/api/models/reservation-model';

@Component({
  selector: 'app-get-reservations',
  templateUrl: './get-reservations.component.html',
  styleUrls: ['./get-reservations.component.css']
})
export class GetReservationsComponent implements OnInit {
  reservations$?: Observable<Reservation[]>;
  deleteReservationSubscription?: Subscription;

  constructor(private http: HttpClient, private reservationService: ReservationService, private eventService: EventService) { }

  ngOnInit(): void {
    this.reservations$ = this.reservationService.apiReservationReservationsGet({'PageInfo.Size': 10, 'PageInfo.Number': 1}).pipe(
      map((response: any) => {
        return response.map((reservation: any) => {
          return {
            id: reservation.id,
            eventId: reservation.event?.id,
            venueId: reservation.venue?.id,
          } as Reservation;
        });
      })
    );;
    this.reservations$.subscribe({
    next: (result: any) => this.reservations$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteReservationSubscription = this.reservationService.apiReservationReservationIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
