import { Component, OnDestroy, OnInit } from '@angular/core';
import { SmartBracelet } from 'src/app/api/models/smart-bracelet-model';
import { Observable, Subscription } from 'rxjs';
import { SmartBraceletRequest } from 'src/app/api/models/smart-bracelet-request';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartBraceletService } from 'src/app/api/services';
import { MallService } from 'src/app/api/services';
import { SmartBraceletStatus } from 'src/app/api/models';

@Component({
  selector: 'app-edit-smart-bracelet',
  templateUrl: './edit-smart-bracelet.component.html',
  styleUrls: ['./edit-smart-bracelet.component.css']
})
export class EditSmartBraceletComponent implements OnInit, OnDestroy {
  model?: SmartBracelet;
  id: number | null = null;
  smartBraceletStatuses = Object.keys(SmartBraceletStatus)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: SmartBraceletStatus[key as keyof typeof SmartBraceletStatus] }));

  routeSubscription?: Subscription;
  getSmartBraceletSubscription?: Subscription;
  updateSmartBraceletSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private smartBraceletService: SmartBraceletService, private mallService: MallService) {
  }
  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getSmartBraceletSubscription = this.smartBraceletService.apiSmartBraceletSmartBraceletIdGet({id: this.id})
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
      var updateSmartBraceletRequest: SmartBraceletRequest =  {
        serialNumber: this.model.serialNumber,
        startUsageDate: this.model.startUsageDate,
        endUsageDate: this.model.endUsageDate,
        accessLatitude1: this.model.accessLatitude1,
        accessLongitude1: this.model.accessLongitude1,
        accessLatitude2: this.model.accessLatitude2,
        accessLongitude2: this.model.accessLongitude2,
        currentLatitude: this.model.currentLatitude,
        currentLongitude: this.model.currentLongitude,
        status: Number(this.model.status),
      };
      console.log(updateSmartBraceletRequest);

      this.updateSmartBraceletSubscription = this.smartBraceletService.apiSmartBraceletSmartBraceletIdPut({id: this.id, body: updateSmartBraceletRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('smart-bracelets')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getSmartBraceletSubscription?.unsubscribe();
    this.updateSmartBraceletSubscription?.unsubscribe();
  }

}
