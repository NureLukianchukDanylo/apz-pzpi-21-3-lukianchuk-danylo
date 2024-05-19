import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { Location } from 'src/app/api/models/location-model';
import { LocationService } from 'src/app/api/services';

@Component({
  selector: 'app-get-locations',
  templateUrl: './get-locations.component.html',
  styleUrls: ['./get-locations.component.css']
})
export class GetLocationsComponent {
  locations$?: Observable<Location[]>;
  deleteLocationSubscription?: Subscription;

  constructor(private http: HttpClient, private locationService: LocationService) { }

  ngOnInit(): void {
    this.locations$ = this.locationService.apiLocationLocationsGet({'PageInfo.Size': 10, 'PageInfo.Number': 1});
    //this.locations$ = this.http.get<Location[]>("http://localhost:5001/api/Location/locations", {params: queryParams});
    this.locations$.subscribe({
    next: (result: any) => this.locations$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
  });
  }

  onDelete(id: number): void {
    
    this.deleteLocationSubscription = this.locationService.apiLocationLocationIdDelete({id: id})//this.http.delete(`http://localhost:5001/api/Location/location/${id}`)this.http.delete(`http://localhost:5001/api/Location/location/${id}`)
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
