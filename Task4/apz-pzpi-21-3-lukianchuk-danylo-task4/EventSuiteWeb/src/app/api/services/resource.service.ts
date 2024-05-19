/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiResourceResourceIdDelete } from '../fn/resource/api-resource-resource-id-delete';
import { ApiResourceResourceIdDelete$Params } from '../fn/resource/api-resource-resource-id-delete';
import { apiResourceResourceIdGet } from '../fn/resource/api-resource-resource-id-get';
import { ApiResourceResourceIdGet$Params } from '../fn/resource/api-resource-resource-id-get';
import { apiResourceResourceIdPut } from '../fn/resource/api-resource-resource-id-put';
import { ApiResourceResourceIdPut$Params } from '../fn/resource/api-resource-resource-id-put';
import { apiResourceResourcePost } from '../fn/resource/api-resource-resource-post';
import { ApiResourceResourcePost$Params } from '../fn/resource/api-resource-resource-post';
import { apiResourceResourcesGet } from '../fn/resource/api-resource-resources-get';
import { ApiResourceResourcesGet$Params } from '../fn/resource/api-resource-resources-get';
import { Resource } from '../models/resource-model';

@Injectable({ providedIn: 'root' })
export class ResourceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiResourceResourcesGet()` */
  static readonly ApiResourceResourcesGetPath = '/api/Resource/resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResourceResourcesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResourceResourcesGet$Response(params?: ApiResourceResourcesGet$Params, context?: HttpContext): Observable<Resource[]> {
    return apiResourceResourcesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiResourceResourcesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResourceResourcesGet(params?: ApiResourceResourcesGet$Params, context?: HttpContext): Observable<Resource[]> {
    return this.apiResourceResourcesGet$Response(params, context).pipe(
      map((r: Resource[]): Resource[] => r)
    );
  }

  /** Path part for operation `apiResourceResourceIdGet()` */
  static readonly ApiResourceResourceIdGetPath = '/api/Resource/resource/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResourceResourceIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResourceResourceIdGet$Response(params: ApiResourceResourceIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiResourceResourceIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiResourceResourceIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResourceResourceIdGet(params: ApiResourceResourceIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiResourceResourceIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiResourceResourceIdPut()` */
  static readonly ApiResourceResourceIdPutPath = '/api/Resource/resource/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResourceResourceIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResourceResourceIdPut$Response(params: ApiResourceResourceIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiResourceResourceIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiResourceResourceIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResourceResourceIdPut(params: ApiResourceResourceIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiResourceResourceIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiResourceResourceIdDelete()` */
  static readonly ApiResourceResourceIdDeletePath = '/api/Resource/resource/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResourceResourceIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResourceResourceIdDelete$Response(params: ApiResourceResourceIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiResourceResourceIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiResourceResourceIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResourceResourceIdDelete(params: ApiResourceResourceIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiResourceResourceIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiResourceResourcePost()` */
  static readonly ApiResourceResourcePostPath = '/api/Resource/resource';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResourceResourcePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResourceResourcePost$Response(params?: ApiResourceResourcePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiResourceResourcePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiResourceResourcePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResourceResourcePost(params?: ApiResourceResourcePost$Params, context?: HttpContext): Observable<void> {
    return this.apiResourceResourcePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
