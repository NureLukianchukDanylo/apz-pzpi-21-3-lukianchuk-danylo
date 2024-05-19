/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMallMallIdDelete } from '../fn/mall/api-mall-mall-id-delete';
import { ApiMallMallIdDelete$Params } from '../fn/mall/api-mall-mall-id-delete';
import { apiMallMallIdGet } from '../fn/mall/api-mall-mall-id-get';
import { ApiMallMallIdGet$Params } from '../fn/mall/api-mall-mall-id-get';
import { apiMallMallIdPut } from '../fn/mall/api-mall-mall-id-put';
import { ApiMallMallIdPut$Params } from '../fn/mall/api-mall-mall-id-put';
import { apiMallMallPost } from '../fn/mall/api-mall-mall-post';
import { ApiMallMallPost$Params } from '../fn/mall/api-mall-mall-post';
import { apiMallMallsGet } from '../fn/mall/api-mall-malls-get';
import { ApiMallMallsGet$Params } from '../fn/mall/api-mall-malls-get';
import { apiMallMallsLocationIdGet } from '../fn/mall/api-mall-malls-location-id-get';
import { ApiMallMallsLocationIdGet$Params } from '../fn/mall/api-mall-malls-location-id-get';
import { Mall } from '../models/mall-model';

@Injectable({ providedIn: 'root' })
export class MallService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMallMallsGet()` */
  static readonly ApiMallMallsGetPath = '/api/Mall/malls';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMallMallsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallsGet$Response(params?: ApiMallMallsGet$Params, context?: HttpContext): Observable<Mall[]> {
    return apiMallMallsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMallMallsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallsGet(params?: ApiMallMallsGet$Params, context?: HttpContext): Observable<Mall[]> {
    return this.apiMallMallsGet$Response(params, context).pipe(
      map((r: Mall[]): Mall[] => r)
    );
  }

  /** Path part for operation `apiMallMallIdGet()` */
  static readonly ApiMallMallIdGetPath = '/api/Mall/mall/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMallMallIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallIdGet$Response(params: ApiMallMallIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMallMallIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMallMallIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallIdGet(params: ApiMallMallIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiMallMallIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiMallMallIdPut()` */
  static readonly ApiMallMallIdPutPath = '/api/Mall/mall/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMallMallIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMallMallIdPut$Response(params: ApiMallMallIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMallMallIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMallMallIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMallMallIdPut(params: ApiMallMallIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiMallMallIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiMallMallIdDelete()` */
  static readonly ApiMallMallIdDeletePath = '/api/Mall/mall/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMallMallIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallIdDelete$Response(params: ApiMallMallIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMallMallIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMallMallIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallIdDelete(params: ApiMallMallIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiMallMallIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiMallMallPost()` */
  static readonly ApiMallMallPostPath = '/api/Mall/mall';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMallMallPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMallMallPost$Response(params?: ApiMallMallPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMallMallPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMallMallPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMallMallPost(params?: ApiMallMallPost$Params, context?: HttpContext): Observable<void> {
    return this.apiMallMallPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiMallMallsLocationIdGet()` */
  static readonly ApiMallMallsLocationIdGetPath = '/api/Mall/malls/{locationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMallMallsLocationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallsLocationIdGet$Response(params: ApiMallMallsLocationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiMallMallsLocationIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMallMallsLocationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMallMallsLocationIdGet(params: ApiMallMallsLocationIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiMallMallsLocationIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
