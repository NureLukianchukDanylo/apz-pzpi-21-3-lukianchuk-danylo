import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ResourceRequest } from 'src/app/api/models/resource-request';
import { ResourceService } from 'src/app/api/services/resource.service';
import { ResourceType } from 'src/app/api/models';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit, OnDestroy {
  model: ResourceRequest;
  private AddResourceSubscription?: Subscription;
  resourceTypes = Object.keys(ResourceType)
  .filter(key => isNaN(Number(key)))
  .map(key => ({ key, value: ResourceType[key as keyof typeof ResourceType] }));

  constructor(private http : HttpClient, private router: Router, private resourceService: ResourceService) {
    this.model = {
      description: '',
      name: '',
      price: 0,
      type: 0
    };
  }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.model.type = Number(this.model.type);
    this.AddResourceSubscription = this.resourceService.apiResourceResourcePost({body: this.model})
    .subscribe({
      next: (response) => {this.router.navigateByUrl('resources')}
    });
  }

  ngOnDestroy(): void {
    this.AddResourceSubscription?.unsubscribe();
  }
}

