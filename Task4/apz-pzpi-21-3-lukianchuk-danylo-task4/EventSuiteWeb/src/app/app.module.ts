import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from  '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './core/components/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegistrationComponent } from './features/auth/registration/registration.component';
import { BackupComponent } from './features/database/backup/backup.component';
import { EditUserComponent } from './features/users/edit-user/edit-user.component';
import { GetUsersComponent } from './features/users/get-users/get-users.component';
import { AddEventComponent } from './features/event/add-event/add-event.component';
import { EditEventComponent } from './features/event/edit-event/edit-event.component';
import { GetEventsComponent } from './features/event/get-events/get-events.component';
import { AddVenueComponent } from './features/venue/add-venue/add-venue.component';
import { EditVenueComponent } from './features/venue/edit-venue/edit-venue.component';
import { GetVenuesComponent } from './features/venue/get-venues/get-venues.component';
import { AddResourceComponent } from './features/resource/add-resource/add-resource.component';
import { EditResourceComponent } from './features/resource/edit-resource/edit-resource.component';
import { GetResourcesComponent } from './features/resource/get-resources/get-resources.component';
import { AddLocationComponent } from './features/location/add-location/add-location.component';
import { EditLocationComponent } from './features/location/edit-location/edit-location.component';
import { GetLocationsComponent } from './features/location/get-locations/get-locations.component';
import { AddMallComponent } from './features/mall/add-mall/add-mall.component';
import { EditMallComponent } from './features/mall/edit-mall/edit-mall.component';
import { GetMallsComponent } from './features/mall/get-malls/get-malls.component';
import { GetFinishedEventsComponent } from './features/event/get-finished-events/get-finished-events.component';
import { AddRegistrationComponent } from './features/registration/add-registration/add-registration.component';
import { EditRegistrationComponent } from './features/registration/edit-registration/edit-registration.component';
import { GetRegistrationsComponent } from './features/registration/get-registrations/get-registrations.component';
import { AddTicketComponent } from './features/ticket/add-ticket/add-ticket.component';
import { EditTicketComponent } from './features/ticket/edit-ticket/edit-ticket.component';
import { GetTicketsComponent } from './features/ticket/get-tickets/get-tickets.component';
import { GetSmartBraceletsComponent } from './features/smart-bracelet/get-smart-bracelets/get-smart-bracelets.component';
import { AddSmartBraceletComponent } from './features/smart-bracelet/add-smart-bracelet/add-smart-bracelet.component';
import { EditSmartBraceletComponent } from './features/smart-bracelet/edit-smart-bracelet/edit-smart-bracelet.component';
import { AddReservationComponent } from './features/reservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './features/reservation/edit-reservation/edit-reservation.component';
import { GetReservationsComponent } from './features/reservation/get-reservations/get-reservations.component';
import { AddEventResourceComponent } from './features/event-resource/add-event-resource/add-event-resource.component';
import { EditEventResourceComponent } from './features/event-resource/edit-event-resource/edit-event-resource.component';
import { GetEventResourcesComponent } from './features/event-resource/get-event-resources/get-event-resources.component';

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    BackupComponent,
    EditUserComponent,
    GetUsersComponent,
    AddEventComponent,
    EditEventComponent,
    GetEventsComponent,
    AddVenueComponent,
    EditVenueComponent,
    GetVenuesComponent,
    AddResourceComponent,
    EditResourceComponent,
    GetResourcesComponent,
    AddLocationComponent,
    EditLocationComponent,
    GetLocationsComponent,
    AddMallComponent,
    EditMallComponent,
    GetMallsComponent,
    GetFinishedEventsComponent,
    AddRegistrationComponent,
    EditRegistrationComponent,
    GetRegistrationsComponent,
    AddTicketComponent,
    EditTicketComponent,
    GetTicketsComponent,
    GetSmartBraceletsComponent,
    AddSmartBraceletComponent,
    EditSmartBraceletComponent,
    AddReservationComponent,
    EditReservationComponent,
    GetReservationsComponent,
    AddEventResourceComponent,
    EditEventResourceComponent,
    GetEventResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
