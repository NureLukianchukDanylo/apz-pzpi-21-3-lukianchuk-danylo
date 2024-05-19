import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { RegistrationService } from 'src/app/api/services';
import { EventService } from 'src/app/api/services';
import { Registration } from 'src/app/api/models/registration-model';

@Component({
  selector: 'app-get-registrations',
  templateUrl: './get-registrations.component.html',
  styleUrls: ['./get-registrations.component.css']
})
export class GetRegistrationsComponent implements OnInit {
  registrations$?: Observable<Registration[]>;
  deleteRegistrationSubscription?: Subscription;

  constructor(private http: HttpClient, private registrationService: RegistrationService, private eventService: EventService) { }

  ngOnInit(): void {
    this.registrations$ = this.registrationService.apiRegistrationRegistrationsGet({'PageInfo.Size': 10, 'PageInfo.Number': 1}).pipe(
      map((response: any) => {
        return response.map((registration: any) => {
          return {
            id: registration.id,
            eventId: registration.event?.id,
            userId: registration.user?.id,
            date: registration.date,
            ticketsAmount: registration.ticketsAmount
          } as Registration;
        });
      })
    );;
    this.registrations$.subscribe({
    next: (result: any) => this.registrations$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteRegistrationSubscription = this.registrationService.apiRegistrationRegistrationIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
