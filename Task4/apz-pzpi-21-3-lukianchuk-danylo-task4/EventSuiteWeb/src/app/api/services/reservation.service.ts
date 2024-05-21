/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiReservationReservationIdDelete } from '../fn/reservation/api-reservation-reservation-id-delete';
import { ApiReservationReservationIdDelete$Params } from '../fn/reservation/api-reservation-reservation-id-delete';
import { apiReservationReservationIdGet } from '../fn/reservation/api-reservation-reservation-id-get';
import { ApiReservationReservationIdGet$Params } from '../fn/reservation/api-reservation-reservation-id-get';
import { apiReservationReservationIdPut } from '../fn/reservation/api-reservation-reservation-id-put';
import { ApiReservationReservationIdPut$Params } from '../fn/reservation/api-reservation-reservation-id-put';
import { apiReservationReservationPost } from '../fn/reservation/api-reservation-reservation-post';
import { ApiReservationReservationPost$Params } from '../fn/reservation/api-reservation-reservation-post';
import { apiReservationReservationsEventIdGet } from '../fn/reservation/api-reservation-reservations-event-id-get';
import { ApiReservationReservationsEventIdGet$Params } from '../fn/reservation/api-reservation-reservations-event-id-get';
import { apiReservationReservationsGet } from '../fn/reservation/api-reservation-reservations-get';
import { ApiReservationReservationsGet$Params } from '../fn/reservation/api-reservation-reservations-get';
import { Reservation } from '../models/reservation-model';

@Injectable({ providedIn: 'root' })
export class ReservationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReservationReservationsGet()` */
  static readonly ApiReservationReservationsGetPath = '/api/Reservation/reservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationReservationsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationsGet$Response(params?: ApiReservationReservationsGet$Params, context?: HttpContext): Observable<Reservation[]> {
    return apiReservationReservationsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationReservationsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationsGet(params?: ApiReservationReservationsGet$Params, context?: HttpContext): Observable<Reservation[]> {
    return this.apiReservationReservationsGet$Response(params, context).pipe(
      map((r: Reservation[]): Reservation[] => r)
    );
  }

  /** Path part for operation `apiReservationReservationIdGet()` */
  static readonly ApiReservationReservationIdGetPath = '/api/Reservation/reservation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationReservationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationIdGet$Response(params: ApiReservationReservationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReservationReservationIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationReservationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationIdGet(params: ApiReservationReservationIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiReservationReservationIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReservationReservationIdPut()` */
  static readonly ApiReservationReservationIdPutPath = '/api/Reservation/reservation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationReservationIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationReservationIdPut$Response(params: ApiReservationReservationIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReservationReservationIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationReservationIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationReservationIdPut(params: ApiReservationReservationIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiReservationReservationIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReservationReservationIdDelete()` */
  static readonly ApiReservationReservationIdDeletePath = '/api/Reservation/reservation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationReservationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationIdDelete$Response(params: ApiReservationReservationIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReservationReservationIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationReservationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationIdDelete(params: ApiReservationReservationIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiReservationReservationIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReservationReservationPost()` */
  static readonly ApiReservationReservationPostPath = '/api/Reservation/reservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationReservationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationReservationPost$Response(params?: ApiReservationReservationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReservationReservationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationReservationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationReservationPost(params?: ApiReservationReservationPost$Params, context?: HttpContext): Observable<void> {
    return this.apiReservationReservationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReservationReservationsEventIdGet()` */
  static readonly ApiReservationReservationsEventIdGetPath = '/api/Reservation/reservations/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationReservationsEventIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationsEventIdGet$Response(params: ApiReservationReservationsEventIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReservationReservationsEventIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationReservationsEventIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationReservationsEventIdGet(params: ApiReservationReservationsEventIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiReservationReservationsEventIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
