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
