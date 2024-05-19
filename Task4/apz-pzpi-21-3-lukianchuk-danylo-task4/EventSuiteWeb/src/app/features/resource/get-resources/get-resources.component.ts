import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';
import { ResourceType } from 'src/app/api/models';
import { Resource } from 'src/app/api/models/resource-model';
import { ResourceService } from 'src/app/api/services';

@Component({
  selector: 'app-get-resources',
  templateUrl: './get-resources.component.html',
  styleUrls: ['./get-resources.component.css']
})
export class GetResourcesComponent implements OnInit {
  resources$?: Observable<Resource[]>;
  deleteResourceSubscription?: Subscription;

  constructor(private http: HttpClient, private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.resources$ = this.resourceService.apiResourceResourcesGet({'PageInfo.Size': 10, 'PageInfo.Number': 1})
    .pipe(
      map((response: any) => {
        console.log(response);
        return response.map((resource: any) => {
          const mallId = resource.mall?.id;
          return {
            id: resource.id,
            name: resource.name,
            description: resource.description,
            price: resource.price,
            type: ResourceType[resource.type as keyof typeof ResourceType],
            mallId: mallId
          } as Resource;
        });
      })
    );;
    this.resources$.subscribe({
    next: (result: any) => this.resources$ = of(result),
    error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  onDelete(id: number): void {
    this.deleteResourceSubscription = this.resourceService.apiResourceResourceIdDelete({id: id})
    .subscribe({
      next: (response) => {
        this.ngOnInit();
      }
    });
  }
}
