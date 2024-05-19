import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationRequest } from 'src/app/api/models/location-request';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/api/services';
import { Location } from 'src/app/api/models/location-model';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit, OnDestroy {
  model?: Location;
  id: number | null = null;

  routeSubscription?: Subscription;
  getLocationSubscription?: Subscription;
  updateLocationSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private locationService: LocationService) {
  }
  ngOnInit(): void {

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getLocationSubscription = this.locationService.apiLocationLocationIdGet({id: this.id})//this.http.get<Location>(`http://localhost:5001/api/Location/location/${this.id}`)
          .subscribe({
            next: (response: any) => {
              this.model = response;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateLocationRequest: LocationRequest =  {
        country: this.model.country,
        city: this.model.city,
        street: this.model.street,
        streetType: this.model.streetType,
        buildingNumber: this.model.buildingNumber
      };
      
      this.updateLocationSubscription = this.locationService.apiLocationLocationIdPut({id: this.id, body: updateLocationRequest})//this.http.put(`http://localhost:5001/api/Location/location/${this.id}`, updateLocationRequest)
      .subscribe({
        next: (response) => {this.router.navigateByUrl('locations')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getLocationSubscription?.unsubscribe();
    this.updateLocationSubscription?.unsubscribe();
  }

}
