/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiEventResourceEventResourceIdDelete } from '../fn/event-resource/api-event-resource-event-resource-id-delete';
import { ApiEventResourceEventResourceIdDelete$Params } from '../fn/event-resource/api-event-resource-event-resource-id-delete';
import { apiEventResourceEventResourceIdGet } from '../fn/event-resource/api-event-resource-event-resource-id-get';
import { ApiEventResourceEventResourceIdGet$Params } from '../fn/event-resource/api-event-resource-event-resource-id-get';
import { apiEventResourceEventResourceIdPut } from '../fn/event-resource/api-event-resource-event-resource-id-put';
import { ApiEventResourceEventResourceIdPut$Params } from '../fn/event-resource/api-event-resource-event-resource-id-put';
import { apiEventResourceEventResourcePost } from '../fn/event-resource/api-event-resource-event-resource-post';
import { ApiEventResourceEventResourcePost$Params } from '../fn/event-resource/api-event-resource-event-resource-post';
import { apiEventResourceEventResourcesEventIdGet } from '../fn/event-resource/api-event-resource-event-resources-event-id-get';
import { ApiEventResourceEventResourcesEventIdGet$Params } from '../fn/event-resource/api-event-resource-event-resources-event-id-get';
import { apiEventResourceEventResourcesGet } from '../fn/event-resource/api-event-resource-event-resources-get';
import { ApiEventResourceEventResourcesGet$Params } from '../fn/event-resource/api-event-resource-event-resources-get';
import { EventResource } from '../models/event-resource-model';

@Injectable({ providedIn: 'root' })
export class EventResourceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEventResourceEventResourcesGet()` */
  static readonly ApiEventResourceEventResourcesGetPath = '/api/EventResource/event-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventResourceEventResourcesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourcesGet$Response(params?: ApiEventResourceEventResourcesGet$Params, context?: HttpContext): Observable<EventResource[]> {
    return apiEventResourceEventResourcesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventResourceEventResourcesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourcesGet(params?: ApiEventResourceEventResourcesGet$Params, context?: HttpContext): Observable<EventResource[]> {
    return this.apiEventResourceEventResourcesGet$Response(params, context).pipe(
      map((r: EventResource[]): EventResource[] => r)
    );
  }

  /** Path part for operation `apiEventResourceEventResourceIdGet()` */
  static readonly ApiEventResourceEventResourceIdGetPath = '/api/EventResource/event-resource/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventResourceEventResourceIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourceIdGet$Response(params: ApiEventResourceEventResourceIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventResourceEventResourceIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventResourceEventResourceIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourceIdGet(params: ApiEventResourceEventResourceIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventResourceEventResourceIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventResourceEventResourceIdPut()` */
  static readonly ApiEventResourceEventResourceIdPutPath = '/api/EventResource/event-resource/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventResourceEventResourceIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventResourceEventResourceIdPut$Response(params: ApiEventResourceEventResourceIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventResourceEventResourceIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventResourceEventResourceIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventResourceEventResourceIdPut(params: ApiEventResourceEventResourceIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiEventResourceEventResourceIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventResourceEventResourceIdDelete()` */
  static readonly ApiEventResourceEventResourceIdDeletePath = '/api/EventResource/event-resource/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventResourceEventResourceIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourceIdDelete$Response(params: ApiEventResourceEventResourceIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventResourceEventResourceIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventResourceEventResourceIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourceIdDelete(params: ApiEventResourceEventResourceIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiEventResourceEventResourceIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventResourceEventResourcePost()` */
  static readonly ApiEventResourceEventResourcePostPath = '/api/EventResource/event-resource';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventResourceEventResourcePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventResourceEventResourcePost$Response(params?: ApiEventResourceEventResourcePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventResourceEventResourcePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventResourceEventResourcePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventResourceEventResourcePost(params?: ApiEventResourceEventResourcePost$Params, context?: HttpContext): Observable<void> {
    return this.apiEventResourceEventResourcePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiEventResourceEventResourcesEventIdGet()` */
  static readonly ApiEventResourceEventResourcesEventIdGetPath = '/api/EventResource/event-resources/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventResourceEventResourcesEventIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourcesEventIdGet$Response(params: ApiEventResourceEventResourcesEventIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiEventResourceEventResourcesEventIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventResourceEventResourcesEventIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventResourceEventResourcesEventIdGet(params: ApiEventResourceEventResourcesEventIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiEventResourceEventResourcesEventIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
