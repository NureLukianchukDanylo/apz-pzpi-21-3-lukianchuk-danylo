import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { TicketType } from 'src/app/api/models/ticket-type';
import { Ticket } from 'src/app/api/models/ticket-model';
import { TicketService } from 'src/app/api/services';

@Component({
  selector: 'app-get-tickets',
  templateUrl: './get-tickets.component.html',
  styleUrls: ['./get-tickets.component.css']
})
export class GetTicketsComponent implements OnInit {
  tickets$?: Observable<Ticket[]>;
  deleteTicketSubscription?: Subscription;

  constructor(private http: HttpClient, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.tickets$ = this.ticketService.apiTicketTicketsGet({'PageInfo.Size': 10, 'PageInfo.Number': 1})
    .pipe(
      map((response: any) => {
        console.log(response);
        return response.map((ticket: any) => {
          const smartBraceletId = ticket.smartBracelet?.id;
          const registrationId = ticket.registration?.id;
          return {
            id: ticket.id,
            type: TicketType[ticket.type as keyof typeof TicketType],
            price: ticket.price,
            registrationId: registrationId,
            smartBraceletId: smartBraceletId,
          } as Ticket;
        });
      })
    );;
    this.tickets$.subscribe({
    next: (result: any) => this.tickets$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteTicketSubscription = this.ticketService.apiTicketTicketIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
