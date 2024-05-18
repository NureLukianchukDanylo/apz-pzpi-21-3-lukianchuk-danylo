/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiEventEventIdDelete } from '../fn/event/api-event-event-id-delete';
import { ApiEventEventIdDelete$Params } from '../fn/event/api-event-event-id-delete';
import { apiEventEventIdGet } from '../fn/event/api-event-event-id-get';
import { ApiEventEventIdGet$Params } from '../fn/event/api-event-event-id-get';
import { apiEventEventIdPut } from '../fn/event/api-event-event-id-put';
import { ApiEventEventIdPut$Params } from '../fn/event/api-event-event-id-put';
import { apiEventEventPost } from '../fn/event/api-event-event-post';
import { ApiEventEventPost$Params } from '../fn/event/api-event-event-post';
import { apiEventEventsGet } from '../fn/event/api-event-events-get';
import { ApiEventEventsGet$Params } from '../fn/event/api-event-events-get';
import { apiEventEventsUserIdGet } from '../fn/event/api-event-events-user-id-get';
import { ApiEventEventsUserIdGet$Params } from '../fn/event/api-event-events-user-id-get';
import { apiEventFinishedEventsUserIdGet } from '../fn/event/api-event-finished-events-user-id-get';
import { ApiEventFinishedEventsUserIdGet$Params } from '../fn/event/api-event-finished-events-user-id-get';

@Injectable({ providedIn: 'root' })
export class EventService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEventEventsGet()` */
  static readonly ApiEventEventsGetPath = '/api/Event/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventEventsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventsGet$Response(params?: ApiEventEventsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventEventsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventEventsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventsGet(params?: ApiEventEventsGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventEventsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventFinishedEventsUserIdGet()` */
  static readonly ApiEventFinishedEventsUserIdGetPath = '/api/Event/finished-events/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventFinishedEventsUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventFinishedEventsUserIdGet$Response(params: ApiEventFinishedEventsUserIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventFinishedEventsUserIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventFinishedEventsUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventFinishedEventsUserIdGet(params: ApiEventFinishedEventsUserIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventFinishedEventsUserIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventEventIdGet()` */
  static readonly ApiEventEventIdGetPath = '/api/Event/event/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventEventIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventIdGet$Response(params: ApiEventEventIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventEventIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventEventIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventIdGet(params: ApiEventEventIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventEventIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventEventIdPut()` */
  static readonly ApiEventEventIdPutPath = '/api/Event/event/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventEventIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventEventIdPut$Response(params: ApiEventEventIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventEventIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventEventIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventEventIdPut(params: ApiEventEventIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiEventEventIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventEventIdDelete()` */
  static readonly ApiEventEventIdDeletePath = '/api/Event/event/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventEventIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventIdDelete$Response(params: ApiEventEventIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventEventIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventEventIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventIdDelete(params: ApiEventEventIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiEventEventIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventEventPost()` */
  static readonly ApiEventEventPostPath = '/api/Event/event';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventEventPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventEventPost$Response(params?: ApiEventEventPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventEventPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventEventPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventEventPost(params?: ApiEventEventPost$Params, context?: HttpContext): Observable<void> {
    return this.apiEventEventPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventEventsUserIdGet()` */
  static readonly ApiEventEventsUserIdGetPath = '/api/Event/events/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventEventsUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventsUserIdGet$Response(params: ApiEventEventsUserIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventEventsUserIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventEventsUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventEventsUserIdGet(params: ApiEventEventsUserIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventEventsUserIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
