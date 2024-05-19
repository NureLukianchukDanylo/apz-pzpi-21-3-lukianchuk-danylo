import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { VenueRequest } from 'src/app/api/models/venue-request';
import { VenueService } from 'src/app/api/services/venue.service';
import { MallService } from 'src/app/api/services';
import { Mall } from 'src/app/api/models/mall-model';
import { VenueType } from 'src/app/api/models';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent implements OnInit, OnDestroy {
  model: VenueRequest;
  malls$?: Observable<Mall[]>;
  private AddVenueSubscription?: Subscription;
  venueTypes = Object.keys(VenueType)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: VenueType[key as keyof typeof VenueType] }));

  constructor(private http : HttpClient, private router: Router, private venueService: VenueService, private mallService: MallService) {
    this.model = {
      description: '',
      floor: 0,
      mallId: 0,
      maxSize: 0,
      roomNumber: '',
      services: '',
      square: 0,
      type: 0
    };
  }

  ngOnInit(): void {
    this.malls$ = this.mallService.apiMallMallsGet();
  }

  onFormSubmit(): void {
    this.model.type = Number(this.model.type);
    this.AddVenueSubscription = this.venueService.apiVenueVenuePost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('venues')}
    });
  }

  ngOnDestroy(): void {
    this.AddVenueSubscription?.unsubscribe();
  }
}

