/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiVenueVenueIdDelete } from '../fn/venue/api-venue-venue-id-delete';
import { ApiVenueVenueIdDelete$Params } from '../fn/venue/api-venue-venue-id-delete';
import { apiVenueVenueIdGet } from '../fn/venue/api-venue-venue-id-get';
import { ApiVenueVenueIdGet$Params } from '../fn/venue/api-venue-venue-id-get';
import { apiVenueVenueIdPut } from '../fn/venue/api-venue-venue-id-put';
import { ApiVenueVenueIdPut$Params } from '../fn/venue/api-venue-venue-id-put';
import { apiVenueVenuePost } from '../fn/venue/api-venue-venue-post';
import { ApiVenueVenuePost$Params } from '../fn/venue/api-venue-venue-post';
import { apiVenueVenuesGet } from '../fn/venue/api-venue-venues-get';
import { ApiVenueVenuesGet$Params } from '../fn/venue/api-venue-venues-get';
import { apiVenueVenuesMallIdGet } from '../fn/venue/api-venue-venues-mall-id-get';
import { ApiVenueVenuesMallIdGet$Params } from '../fn/venue/api-venue-venues-mall-id-get';
import { Venue } from '../models/venue-model';

@Injectable({ providedIn: 'root' })
export class VenueService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVenueVenuesGet()` */
  static readonly ApiVenueVenuesGetPath = '/api/Venue/venues';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVenueVenuesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenuesGet$Response(params?: ApiVenueVenuesGet$Params, context?: HttpContext): Observable<Venue[]> {
    return apiVenueVenuesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVenueVenuesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenuesGet(params?: ApiVenueVenuesGet$Params, context?: HttpContext): Observable<Venue[]> {
    return this.apiVenueVenuesGet$Response(params, context).pipe(
      map((r: Venue[]): Venue[] => r)
    );
  }

  /** Path part for operation `apiVenueVenueIdGet()` */
  static readonly ApiVenueVenueIdGetPath = '/api/Venue/venue/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVenueVenueIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenueIdGet$Response(params: ApiVenueVenueIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVenueVenueIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVenueVenueIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenueIdGet(params: ApiVenueVenueIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiVenueVenueIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVenueVenueIdPut()` */
  static readonly ApiVenueVenueIdPutPath = '/api/Venue/venue/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVenueVenueIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVenueVenueIdPut$Response(params: ApiVenueVenueIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVenueVenueIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVenueVenueIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVenueVenueIdPut(params: ApiVenueVenueIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiVenueVenueIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVenueVenueIdDelete()` */
  static readonly ApiVenueVenueIdDeletePath = '/api/Venue/venue/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVenueVenueIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenueIdDelete$Response(params: ApiVenueVenueIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVenueVenueIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVenueVenueIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenueIdDelete(params: ApiVenueVenueIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiVenueVenueIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVenueVenuePost()` */
  static readonly ApiVenueVenuePostPath = '/api/Venue/venue';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVenueVenuePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVenueVenuePost$Response(params?: ApiVenueVenuePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVenueVenuePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVenueVenuePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVenueVenuePost(params?: ApiVenueVenuePost$Params, context?: HttpContext): Observable<void> {
    return this.apiVenueVenuePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiVenueVenuesMallIdGet()` */
  static readonly ApiVenueVenuesMallIdGetPath = '/api/Venue/venues/{mallId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVenueVenuesMallIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenuesMallIdGet$Response(params: ApiVenueVenuesMallIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiVenueVenuesMallIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVenueVenuesMallIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVenueVenuesMallIdGet(params: ApiVenueVenuesMallIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiVenueVenuesMallIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
