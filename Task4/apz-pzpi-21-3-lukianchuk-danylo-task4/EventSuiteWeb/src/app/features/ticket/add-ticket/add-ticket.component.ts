import { Component, OnDestroy, OnInit } from '@angular/core';
import { TicketRequest } from 'src/app/api/models/ticket-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Registration } from 'src/app/api/models/registration-model';
import { SmartBracelet } from 'src/app/api/models/smart-bracelet-model';
import { SmartBraceletService } from 'src/app/api/services';
import { TicketService } from 'src/app/api/services';
import { RegistrationService } from 'src/app/api/services';
import { TicketType } from 'src/app/api/models/ticket-type';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit, OnDestroy {
  model: TicketRequest;
  registrations$?: Observable<Registration[]>;
  smartBracelets$?: Observable<SmartBracelet[]>;
  ticketTypes = Object.keys(TicketType)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: TicketType[key as keyof typeof TicketType] }));
  private AddTicketSubscription?: Subscription;

  constructor(private http : HttpClient, private router: Router, private smartBraceletService: SmartBraceletService, private ticketService: TicketService, private registrationService: RegistrationService) {
    this.model = {
      price: 0,
      registrationId: 0,
      smartBraceletId: 0,
      type: 0,
    };
  }

  ngOnInit(): void {
    this.smartBracelets$ = this.smartBraceletService.apiSmartBraceletSmartBraceletsGet();
    this.registrations$ = this.registrationService.apiRegistrationRegistrationsGet();
  }

  onFormSubmit(): void {
    this.model.type = Number(this.model.type);
    this.AddTicketSubscription = this.ticketService.apiTicketTicketPost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('tickets')}
    });
  }

  ngOnDestroy(): void {
    this.AddTicketSubscription?.unsubscribe();
  }
}
