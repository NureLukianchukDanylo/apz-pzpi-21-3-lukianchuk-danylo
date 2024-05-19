import { Component, OnDestroy, OnInit } from '@angular/core';
import { Mall } from 'src/app/api/models/mall-model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/api/models/user-model';
import { MallRequest } from 'src/app/api/models/mall-request';
import { Location } from 'src/app/api/models/location-model';
import { LocationService } from 'src/app/api/services';
import { MallService } from 'src/app/api/services';

@Component({
  selector: 'app-edit-mall',
  templateUrl: './edit-mall.component.html',
  styleUrls: ['./edit-mall.component.css']
})
export class EditMallComponent implements OnInit, OnDestroy {
  model?: Mall;
  id: number | null = null;
  users$?: Observable<User[]>;
  locations$?: Observable<Location[]>;
  selectedLocation?: number;

  routeSubscription?: Subscription;
  getMallSubscription?: Subscription;
  updateMallSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private locationService: LocationService, private mallService: MallService) {
  }
  ngOnInit(): void {
    this.locations$ = this.locationService.apiLocationLocationsGet();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getMallSubscription = this.mallService.apiMallMallIdGet({id: this.id})
          .subscribe({
            next: (response: any) => {
              response.locationId = response.location?.id;
              this.model = response;
              this.selectedLocation = this.model?.locationId;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateMallRequest: MallRequest =  {
        name: this.model.name,
        square: this.model.square,
        locationId: this.selectedLocation ?? 0
      };

      this.updateMallSubscription = this.mallService.apiMallMallIdPut({id: this.id, body: updateMallRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('malls')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getMallSubscription?.unsubscribe();
    this.updateMallSubscription?.unsubscribe();
  }

}
