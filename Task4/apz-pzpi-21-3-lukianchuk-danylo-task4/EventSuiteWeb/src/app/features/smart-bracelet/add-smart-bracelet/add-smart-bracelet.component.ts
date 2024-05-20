import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SmartBraceletRequest } from 'src/app/api/models/smart-bracelet-request';
import { SmartBraceletService } from 'src/app/api/services/smart-bracelet.service';
import { SmartBraceletStatus } from 'src/app/api/models/smart-bracelet-status';

@Component({
  selector: 'app-add-smart-bracelet',
  templateUrl: './add-smart-bracelet.component.html',
  styleUrls: ['./add-smart-bracelet.component.css']
})
export class AddSmartBraceletComponent implements OnInit, OnDestroy {
  model: SmartBraceletRequest;
  private AddSmartBraceletSubscription?: Subscription;
  smartBraceletStatuses = Object.keys(SmartBraceletStatus)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: SmartBraceletStatus[key as keyof typeof SmartBraceletStatus] }));

  constructor(private http : HttpClient, private router: Router, private smartBraceletService: SmartBraceletService) {
    this.model = {
      accessLatitude1: 0,
      accessLatitude2: 0,
      accessLongitude1: 0,
      accessLongitude2: 0,
      currentLatitude: 0,
      currentLongitude: 0,
      endUsageDate: new Date(),
      serialNumber: '',
      startUsageDate: new Date(),
      status: 0,
    };
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.model.status = Number(this.model.status);
    this.AddSmartBraceletSubscription = this.smartBraceletService.apiSmartBraceletSmartBraceletPost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('smart-bracelets')}
    });
  }

  ngOnDestroy(): void {
    this.AddSmartBraceletSubscription?.unsubscribe();
  }
}

