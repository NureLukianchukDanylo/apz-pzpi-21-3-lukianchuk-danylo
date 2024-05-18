/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiLocationLocationIdDelete } from '../fn/location/api-location-location-id-delete';
import { ApiLocationLocationIdDelete$Params } from '../fn/location/api-location-location-id-delete';
import { apiLocationLocationIdGet } from '../fn/location/api-location-location-id-get';
import { ApiLocationLocationIdGet$Params } from '../fn/location/api-location-location-id-get';
import { apiLocationLocationIdPut } from '../fn/location/api-location-location-id-put';
import { ApiLocationLocationIdPut$Params } from '../fn/location/api-location-location-id-put';
import { apiLocationLocationPost } from '../fn/location/api-location-location-post';
import { ApiLocationLocationPost$Params } from '../fn/location/api-location-location-post';
import { apiLocationLocationsGet } from '../fn/location/api-location-locations-get';
import { ApiLocationLocationsGet$Params } from '../fn/location/api-location-locations-get';

@Injectable({ providedIn: 'root' })
export class LocationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiLocationLocationsGet()` */
  static readonly ApiLocationLocationsGetPath = '/api/Location/locations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationLocationsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationLocationsGet$Response(params?: ApiLocationLocationsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLocationLocationsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLocationLocationsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationLocationsGet(params?: ApiLocationLocationsGet$Params, context?: HttpContext): Observable<void> {
    return this.apiLocationLocationsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLocationLocationIdGet()` */
  static readonly ApiLocationLocationIdGetPath = '/api/Location/location/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationLocationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationLocationIdGet$Response(params: ApiLocationLocationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLocationLocationIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLocationLocationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationLocationIdGet(params: ApiLocationLocationIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiLocationLocationIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLocationLocationIdPut()` */
  static readonly ApiLocationLocationIdPutPath = '/api/Location/location/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationLocationIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationLocationIdPut$Response(params: ApiLocationLocationIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLocationLocationIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLocationLocationIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationLocationIdPut(params: ApiLocationLocationIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiLocationLocationIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLocationLocationIdDelete()` */
  static readonly ApiLocationLocationIdDeletePath = '/api/Location/location/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationLocationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationLocationIdDelete$Response(params: ApiLocationLocationIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLocationLocationIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLocationLocationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocationLocationIdDelete(params: ApiLocationLocationIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiLocationLocationIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiLocationLocationPost()` */
  static readonly ApiLocationLocationPostPath = '/api/Location/location';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocationLocationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationLocationPost$Response(params?: ApiLocationLocationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiLocationLocationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiLocationLocationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiLocationLocationPost(params?: ApiLocationLocationPost$Params, context?: HttpContext): Observable<void> {
    return this.apiLocationLocationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
