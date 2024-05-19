import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationRequest } from 'src/app/api/models/location-request';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/api/services';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit, OnDestroy {
  model: LocationRequest;
  private AddPanelSubscription?: Subscription;

  constructor(private http : HttpClient, private router: Router, private locationService: LocationService) {
    this.model = {
      country: '',
      city: '',
      street: '',
      streetType: '',
      buildingNumber: ''
    };
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    
    this.AddPanelSubscription = this.locationService.apiLocationLocationPost({body: this.model})//this.http.post("http://localhost:5001/api/Location/location", this.model)
    .subscribe({
      next: (response) => {this.router.navigateByUrl('locations')}
    });
  }

  ngOnDestroy(): void {
    this.AddPanelSubscription?.unsubscribe();
  }
}
