/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiTicketTicketIdDelete } from '../fn/ticket/api-ticket-ticket-id-delete';
import { ApiTicketTicketIdDelete$Params } from '../fn/ticket/api-ticket-ticket-id-delete';
import { apiTicketTicketIdGet } from '../fn/ticket/api-ticket-ticket-id-get';
import { ApiTicketTicketIdGet$Params } from '../fn/ticket/api-ticket-ticket-id-get';
import { apiTicketTicketIdPut } from '../fn/ticket/api-ticket-ticket-id-put';
import { ApiTicketTicketIdPut$Params } from '../fn/ticket/api-ticket-ticket-id-put';
import { apiTicketTicketPost } from '../fn/ticket/api-ticket-ticket-post';
import { ApiTicketTicketPost$Params } from '../fn/ticket/api-ticket-ticket-post';
import { apiTicketTicketsGet } from '../fn/ticket/api-ticket-tickets-get';
import { ApiTicketTicketsGet$Params } from '../fn/ticket/api-ticket-tickets-get';
import { apiTicketTicketsRegistrationIdGet } from '../fn/ticket/api-ticket-tickets-registration-id-get';
import { ApiTicketTicketsRegistrationIdGet$Params } from '../fn/ticket/api-ticket-tickets-registration-id-get';

@Injectable({ providedIn: 'root' })
export class TicketService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTicketTicketsGet()` */
  static readonly ApiTicketTicketsGetPath = '/api/Ticket/tickets';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketTicketsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketsGet$Response(params?: ApiTicketTicketsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTicketTicketsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketTicketsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketsGet(params?: ApiTicketTicketsGet$Params, context?: HttpContext): Observable<void> {
    return this.apiTicketTicketsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTicketTicketIdGet()` */
  static readonly ApiTicketTicketIdGetPath = '/api/Ticket/ticket/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketTicketIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketIdGet$Response(params: ApiTicketTicketIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTicketTicketIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketTicketIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketIdGet(params: ApiTicketTicketIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiTicketTicketIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTicketTicketIdPut()` */
  static readonly ApiTicketTicketIdPutPath = '/api/Ticket/ticket/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketTicketIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketTicketIdPut$Response(params: ApiTicketTicketIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTicketTicketIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketTicketIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketTicketIdPut(params: ApiTicketTicketIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiTicketTicketIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTicketTicketIdDelete()` */
  static readonly ApiTicketTicketIdDeletePath = '/api/Ticket/ticket/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketTicketIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketIdDelete$Response(params: ApiTicketTicketIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTicketTicketIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketTicketIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketIdDelete(params: ApiTicketTicketIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiTicketTicketIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTicketTicketPost()` */
  static readonly ApiTicketTicketPostPath = '/api/Ticket/ticket';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketTicketPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketTicketPost$Response(params?: ApiTicketTicketPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTicketTicketPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketTicketPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTicketTicketPost(params?: ApiTicketTicketPost$Params, context?: HttpContext): Observable<void> {
    return this.apiTicketTicketPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiTicketTicketsRegistrationIdGet()` */
  static readonly ApiTicketTicketsRegistrationIdGetPath = '/api/Ticket/tickets/{registrationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTicketTicketsRegistrationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketsRegistrationIdGet$Response(params: ApiTicketTicketsRegistrationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiTicketTicketsRegistrationIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTicketTicketsRegistrationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTicketTicketsRegistrationIdGet(params: ApiTicketTicketsRegistrationIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiTicketTicketsRegistrationIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
