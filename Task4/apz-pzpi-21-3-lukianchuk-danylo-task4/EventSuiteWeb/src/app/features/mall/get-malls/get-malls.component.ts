import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { Mall } from 'src/app/api/models/mall-model';
import { MallService } from 'src/app/api/services';

@Component({
  selector: 'app-get-malls',
  templateUrl: './get-malls.component.html',
  styleUrls: ['./get-malls.component.css']
})
export class GetMallsComponent implements OnInit {
  malls$?: Observable<Mall[]>;
  deleteMallSubscription?: Subscription;

  constructor(private http: HttpClient, private mallService: MallService) { }

  ngOnInit(): void {
    this.malls$ = this.mallService.apiMallMallsGet({'PageInfo.Size': 10, 'PageInfo.Number': 1}).pipe(
      map((response: any) => {
        return response.map((mall: any) => {
          const locationId = mall.location?.id; 
          return {
            id: mall.id,
            name: mall.name,
            square: mall.square,
            locationId: locationId
          } as Mall;
        });
      })
    );;
    this.malls$.subscribe({
    next: (result: any) => this.malls$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteMallSubscription = this.mallService.apiMallMallIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
