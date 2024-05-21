import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegistrationComponent } from './features/auth/registration/registration.component';
import { BackupComponent } from './features/database/backup/backup.component';
import { AuthGuardService } from './features/auth/services/auth-guard.service';
import { EditUserComponent } from './features/users/edit-user/edit-user.component';
import { GetUsersComponent } from './features/users/get-users/get-users.component';
import { AddLocationComponent } from './features/location/add-location/add-location.component';
import { EditLocationComponent } from './features/location/edit-location/edit-location.component';
import { GetLocationsComponent } from './features/location/get-locations/get-locations.component';
import { AddMallComponent } from './features/mall/add-mall/add-mall.component';
import { EditMallComponent } from './features/mall/edit-mall/edit-mall.component';
import { GetMallsComponent } from './features/mall/get-malls/get-malls.component';
import { AddEventComponent } from './features/event/add-event/add-event.component';
import { EditEventComponent } from './features/event/edit-event/edit-event.component';
import { GetEventsComponent } from './features/event/get-events/get-events.component';
import { GetFinishedEventsComponent } from './features/event/get-finished-events/get-finished-events.component';
import { AddVenueComponent } from './features/venue/add-venue/add-venue.component';
import { EditVenueComponent } from './features/venue/edit-venue/edit-venue.component';
import { GetVenuesComponent } from './features/venue/get-venues/get-venues.component';
import { AddResourceComponent } from './features/resource/add-resource/add-resource.component';
import { EditResourceComponent } from './features/resource/edit-resource/edit-resource.component';
import { GetResourcesComponent } from './features/resource/get-resources/get-resources.component';
import { AddRegistrationComponent } from './features/registration/add-registration/add-registration.component';
import { EditRegistrationComponent } from './features/registration/edit-registration/edit-registration.component';
import { GetRegistrationsComponent } from './features/registration/get-registrations/get-registrations.component';
import { AddTicketComponent } from './features/ticket/add-ticket/add-ticket.component';
import { EditTicketComponent } from './features/ticket/edit-ticket/edit-ticket.component';
import { GetTicketsComponent } from './features/ticket/get-tickets/get-tickets.component';
import { AddSmartBraceletComponent } from './features/smart-bracelet/add-smart-bracelet/add-smart-bracelet.component';
import { EditSmartBraceletComponent } from './features/smart-bracelet/edit-smart-bracelet/edit-smart-bracelet.component';
import { GetSmartBraceletsComponent } from './features/smart-bracelet/get-smart-bracelets/get-smart-bracelets.component';
import { AddReservationComponent } from './features/reservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './features/reservation/edit-reservation/edit-reservation.component';
import { GetReservationsComponent } from './features/reservation/get-reservations/get-reservations.component';
import { AddEventResourceComponent } from './features/event-resource/add-event-resource/add-event-resource.component';
import { EditEventResourceComponent } from './features/event-resource/edit-event-resource/edit-event-resource.component';
import { GetEventResourcesComponent } from './features/event-resource/get-event-resources/get-event-resources.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'backup', component: BackupComponent, canActivate: [AuthGuardService]},
  { path: 'locations', component: GetLocationsComponent, canActivate: [AuthGuardService]},
  { path: 'add-location', component: AddLocationComponent, canActivate: [AuthGuardService]},
  { path: 'edit-location/:id', component: EditLocationComponent, canActivate: [AuthGuardService]},
  { path: 'add-mall', component: AddMallComponent, canActivate: [AuthGuardService] },
  { path: 'edit-mall/:id', component: EditMallComponent, canActivate: [AuthGuardService] },
  { path: 'malls', component: GetMallsComponent, canActivate: [AuthGuardService] },
  { path: 'get-finished-events', component: GetFinishedEventsComponent, canActivate: [AuthGuardService]},
  { path: 'events', component: GetEventsComponent, canActivate: [AuthGuardService] },
  { path: 'add-event', component: AddEventComponent, canActivate: [AuthGuardService]},
  { path: 'edit-event/:id', component: EditEventComponent, canActivate: [AuthGuardService]},
  { path: 'venues', component: GetVenuesComponent, canActivate: [AuthGuardService] },
  { path: 'add-venue', component: AddVenueComponent, canActivate: [AuthGuardService]},
  { path: 'edit-venue/:id', component: EditVenueComponent, canActivate: [AuthGuardService]},
  { path: 'resources', component: GetResourcesComponent, canActivate: [AuthGuardService] },
  { path: 'add-resource', component: AddResourceComponent, canActivate: [AuthGuardService]},
  { path: 'edit-resource/:id', component: EditResourceComponent, canActivate: [AuthGuardService]},
  { path: 'registrations', component: GetRegistrationsComponent, canActivate: [AuthGuardService] },
  { path: 'add-registration', component: AddRegistrationComponent, canActivate: [AuthGuardService]},
  { path: 'edit-registration/:id', component: EditRegistrationComponent, canActivate: [AuthGuardService]},
  { path: 'tickets', component: GetTicketsComponent, canActivate: [AuthGuardService] },
  { path: 'add-ticket', component: AddTicketComponent, canActivate: [AuthGuardService]},
  { path: 'edit-ticket/:id', component: EditTicketComponent, canActivate: [AuthGuardService]},
  { path: 'smart-bracelets', component: GetSmartBraceletsComponent, canActivate: [AuthGuardService] },
  { path: 'add-smart-bracelet', component: AddSmartBraceletComponent, canActivate: [AuthGuardService]},
  { path: 'edit-smart-bracelet/:id', component: EditSmartBraceletComponent, canActivate: [AuthGuardService]},
  { path: 'reservations', component: GetReservationsComponent, canActivate: [AuthGuardService] },
  { path: 'add-reservation', component: AddReservationComponent, canActivate: [AuthGuardService]},
  { path: 'edit-reservation/:id', component: EditReservationComponent, canActivate: [AuthGuardService]},
  { path: 'event-resources', component: GetEventResourcesComponent, canActivate: [AuthGuardService] },
  { path: 'add-event-resource', component: AddEventResourceComponent, canActivate: [AuthGuardService]},
  { path: 'edit-event-resource/:id', component: EditEventResourceComponent, canActivate: [AuthGuardService]},
  { path: 'users', 
  canActivate: [AuthGuardService],
  children: [
    { path: '', component: GetUsersComponent },
    { path: 'edit-user/:email', component: EditUserComponent }
  ]},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
