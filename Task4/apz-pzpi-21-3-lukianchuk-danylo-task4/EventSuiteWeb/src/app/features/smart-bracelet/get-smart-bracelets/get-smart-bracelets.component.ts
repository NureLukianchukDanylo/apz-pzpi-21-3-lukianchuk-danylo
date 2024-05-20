import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { SmartBraceletStatus } from 'src/app/api/models';
import { SmartBracelet } from 'src/app/api/models/smart-bracelet-model';
import { SmartBraceletService } from 'src/app/api/services';

@Component({
  selector: 'app-get-smart-bracelets',
  templateUrl: './get-smart-bracelets.component.html',
  styleUrls: ['./get-smart-bracelets.component.css']
})
export class GetSmartBraceletsComponent implements OnInit {
  smartBracelets$?: Observable<SmartBracelet[]>;
  deleteSmartBraceletSubscription?: Subscription;

  constructor(private http: HttpClient, private smartBraceletService: SmartBraceletService) { }

  ngOnInit(): void {
    this.smartBracelets$ = this.smartBraceletService.apiSmartBraceletSmartBraceletsGet({'PageInfo.Size': 10, 'PageInfo.Number': 1})
    .pipe(
      map((response: any) => {
        console.log(response);
        return response.map((smartBracelet: any) => {
          const mallId = smartBracelet.mall?.id;
          return {
            id: smartBracelet.id,
            serialNumber: smartBracelet.serialNumber,
            startUsageDate: smartBracelet.startUsageDate,
            endUsageDate: smartBracelet.endUsageDate,
            accessLatitude1: smartBracelet.accessLatitude1,
            accessLongitude1: smartBracelet.accessLongitude1,
            accessLatitude2: smartBracelet.accessLatitude2,
            accessLongitude2: smartBracelet.accessLongitude2,
            currentLatitude: smartBracelet.currentLatitude,
            currentLongitude: smartBracelet.currentLongitude,
            status: SmartBraceletStatus[smartBracelet.status as keyof typeof SmartBraceletStatus],
            mallId: mallId
          } as SmartBracelet;
        });
      })
    );;
    this.smartBracelets$.subscribe({
    next: (result: any) => this.smartBracelets$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteSmartBraceletSubscription = this.smartBraceletService.apiSmartBraceletSmartBraceletIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
