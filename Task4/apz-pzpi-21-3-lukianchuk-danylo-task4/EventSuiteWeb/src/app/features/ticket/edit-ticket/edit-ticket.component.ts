import { Component, OnDestroy, OnInit } from '@angular/core';
import { Registration } from 'src/app/api/models/registration-model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ticket } from 'src/app/api/models/ticket-model';
import { SmartBracelet } from 'src/app/api/models/smart-bracelet-model';
import { SmartBraceletService } from 'src/app/api/services';
import { RegistrationService } from 'src/app/api/services';
import { TicketService } from 'src/app/api/services';
import { TicketRequest } from 'src/app/api/models';
import { TicketType } from 'src/app/api/models/ticket-type';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit, OnDestroy {
  model?: Ticket;
  id: number | null = null;
  registrations$?: Observable<Registration[]>;
  smartBracelets$?: Observable<SmartBracelet[]>;
  selectedSmartBracelet?: number;
  selectedRegistration?: number;
  ticketTypes = Object.keys(TicketType)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: TicketType[key as keyof typeof TicketType] }));

  routeSubscription?: Subscription;
  getTicketSubscription?: Subscription;
  updateTicketSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private smartBraceletService: SmartBraceletService, private registrationService: RegistrationService, private ticketService: TicketService) {
  }
  ngOnInit(): void {
    this.smartBracelets$ = this.smartBraceletService.apiSmartBraceletSmartBraceletsGet();
    this.registrations$ = this.registrationService.apiRegistrationRegistrationsGet();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getTicketSubscription = this.ticketService.apiTicketTicketIdGet({id: this.id})
          .subscribe({
            next: (response: any) => {
              response.smartBraceletId = response.smartBracelet?.id;
              response.registrationId = response.registration?.id;
              this.model = response;
              this.selectedSmartBracelet = this.model?.smartBraceletId;
              this.selectedRegistration = this.model?.registrationId;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateTicketRequest: TicketRequest =  {
        registrationId: this.selectedRegistration ?? 0,
        smartBraceletId: this.selectedSmartBracelet ?? 0,
        type: Number(this.model.type),
        price: this.model.price,
      };
      console.log(updateTicketRequest);

      this.updateTicketSubscription = this.ticketService.apiTicketTicketIdPut({id: this.id, body: updateTicketRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('tickets')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getTicketSubscription?.unsubscribe();
    this.updateTicketSubscription?.unsubscribe();
  }

}
