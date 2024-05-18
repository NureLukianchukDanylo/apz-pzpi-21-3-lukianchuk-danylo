/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { EventService } from './services/event.service';
import { EventResourceService } from './services/event-resource.service';
import { LocationService } from './services/location.service';
import { MallService } from './services/mall.service';
import { RegistrationService } from './services/registration.service';
import { ReservationService } from './services/reservation.service';
import { ResourceService } from './services/resource.service';
import { SmartBraceletService } from './services/smart-bracelet.service';
import { TicketService } from './services/ticket.service';
import { UserService } from './services/user.service';
import { VenueService } from './services/venue.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    DatabaseService,
    EventService,
    EventResourceService,
    LocationService,
    MallService,
    RegistrationService,
    ReservationService,
    ResourceService,
    SmartBraceletService,
    TicketService,
    UserService,
    VenueService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
