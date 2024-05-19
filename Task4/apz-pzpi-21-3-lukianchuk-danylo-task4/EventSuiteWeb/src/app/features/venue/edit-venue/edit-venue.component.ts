import { Component, OnDestroy, OnInit } from '@angular/core';
import { Venue } from 'src/app/api/models/venue-model';
import { Observable, Subscription } from 'rxjs';
import { VenueRequest } from 'src/app/api/models/venue-request';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueService } from 'src/app/api/services';
import { MallService } from 'src/app/api/services';
import { Mall } from 'src/app/api/models/mall-model';
import { VenueType } from 'src/app/api/models';

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit, OnDestroy {
  model?: Venue;
  id: number | null = null;
  malls$?: Observable<Mall[]>;
  selectedMall?: number;
  venueTypes = Object.keys(VenueType)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: VenueType[key as keyof typeof VenueType] }));

  routeSubscription?: Subscription;
  getVenueSubscription?: Subscription;
  updateVenueSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private venueService: VenueService, private mallService: MallService) {
  }
  ngOnInit(): void {
    this.malls$ = this.mallService.apiMallMallsGet();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getVenueSubscription = this.venueService.apiVenueVenueIdGet({id: this.id})
          .subscribe({
            next: (response: any) => {
              this.model = response;
              this.selectedMall = response.mall?.id;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var updateVenueRequest: VenueRequest =  {
        description: this.model.description,
        floor: this.model.floor,
        roomNumber: this.model.roomNumber,
        services: this.model.services,
        square: this.model.square,
        maxSize: this.model.maxSize,
        type: Number(this.model.type),
        mallId: this.selectedMall ?? 0, 
      };
      console.log(updateVenueRequest);

      this.updateVenueSubscription = this.venueService.apiVenueVenueIdPut({id: this.id, body: updateVenueRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('venues')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getVenueSubscription?.unsubscribe();
    this.updateVenueSubscription?.unsubscribe();
  }

}
