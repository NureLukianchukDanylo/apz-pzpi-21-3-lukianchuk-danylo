import { Component, OnDestroy, OnInit } from '@angular/core';
import { MallRequest } from 'src/app/api/models/mall-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Location } from 'src/app/api/models/location-model';
import { LocationService } from 'src/app/api/services';
import { MallService } from 'src/app/api/services';

@Component({
  selector: 'app-add-mall',
  templateUrl: './add-mall.component.html',
  styleUrls: ['./add-mall.component.css']
})
export class AddMallComponent implements OnInit, OnDestroy {
  model: MallRequest;
  locations$?: Observable<Location[]>;
  private AddMallSubscription?: Subscription;

  constructor(private http : HttpClient, private router: Router, private locationService: LocationService, private mallService: MallService) {
    this.model = {
      locationId: 0,
      name: '',
      square: 0
    };
  }

  ngOnInit(): void {
    this.locations$ = this.locationService.apiLocationLocationsGet();
  }

  onFormSubmit(): void {
    this.AddMallSubscription = this.mallService.apiMallMallPost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('Malls')}
    });
  }

  ngOnDestroy(): void {
    this.AddMallSubscription?.unsubscribe();
  }
}
