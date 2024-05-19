import { Component, OnDestroy, OnInit } from '@angular/core';
import { Resource } from 'src/app/api/models/resource-model';
import { Observable, Subscription } from 'rxjs';
import { ResourceRequest } from 'src/app/api/models/resource-request';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from 'src/app/api/services';
import { MallService } from 'src/app/api/services';
import { Mall } from 'src/app/api/models/mall-model';
import { ResourceType } from 'src/app/api/models';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css']
})
export class EditResourceComponent implements OnInit, OnDestroy {
  model?: Resource;
  id: number | null = null;
  resourceTypes = Object.keys(ResourceType)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: ResourceType[key as keyof typeof ResourceType] }));

  routeSubscription?: Subscription;
  getResourceSubscription?: Subscription;
  updateResourceSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private resourceService: ResourceService, private mallService: MallService) {
  }
  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'));
        if (this.id) {
          this.getResourceSubscription = this.resourceService.apiResourceResourceIdGet({id: this.id})
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
      var updateResourceRequest: ResourceRequest =  {
        description: this.model.description,
        name: this.model.name,
        price: this.model.price,
        type: Number(this.model.type),
      };
      console.log(updateResourceRequest);

      this.updateResourceSubscription = this.resourceService.apiResourceResourceIdPut({id: this.id, body: updateResourceRequest})
      .subscribe({
        next: (response) => {this.router.navigateByUrl('resources')}
      });
    }
  }


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getResourceSubscription?.unsubscribe();
    this.updateResourceSubscription?.unsubscribe();
  }

}
