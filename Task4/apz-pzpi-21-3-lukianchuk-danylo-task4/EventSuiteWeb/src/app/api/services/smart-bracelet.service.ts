/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiSmartBraceletSmartBraceletIdCoordinatesPut } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-coordinates-put';
import { ApiSmartBraceletSmartBraceletIdCoordinatesPut$Params } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-coordinates-put';
import { apiSmartBraceletSmartBraceletIdDelete } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-delete';
import { ApiSmartBraceletSmartBraceletIdDelete$Params } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-delete';
import { apiSmartBraceletSmartBraceletIdGet } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-get';
import { ApiSmartBraceletSmartBraceletIdGet$Params } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-get';
import { apiSmartBraceletSmartBraceletIdGrantAccessGet } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-grant-access-get';
import { ApiSmartBraceletSmartBraceletIdGrantAccessGet$Params } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-grant-access-get';
import { apiSmartBraceletSmartBraceletIdPut } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-put';
import { ApiSmartBraceletSmartBraceletIdPut$Params } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-id-put';
import { apiSmartBraceletSmartBraceletPost } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-post';
import { ApiSmartBraceletSmartBraceletPost$Params } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelet-post';
import { apiSmartBraceletSmartBraceletsGet } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelets-get';
import { ApiSmartBraceletSmartBraceletsGet$Params } from '../fn/smart-bracelet/api-smart-bracelet-smart-bracelets-get';
import { SmartBracelet } from '../models/smart-bracelet-model';

@Injectable({ providedIn: 'root' })
export class SmartBraceletService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSmartBraceletSmartBraceletsGet()` */
  static readonly ApiSmartBraceletSmartBraceletsGetPath = '/api/SmartBracelet/smart-bracelets';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSmartBraceletSmartBraceletsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletsGet$Response(params?: ApiSmartBraceletSmartBraceletsGet$Params, context?: HttpContext): Observable<SmartBracelet[]> {
    return apiSmartBraceletSmartBraceletsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSmartBraceletSmartBraceletsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletsGet(params?: ApiSmartBraceletSmartBraceletsGet$Params, context?: HttpContext): Observable<SmartBracelet[]> {
    return this.apiSmartBraceletSmartBraceletsGet$Response(params, context).pipe(
      map((r: SmartBracelet[]): SmartBracelet[] => r)
    );
  }

  /** Path part for operation `apiSmartBraceletSmartBraceletIdGet()` */
  static readonly ApiSmartBraceletSmartBraceletIdGetPath = '/api/SmartBracelet/smart-bracelet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSmartBraceletSmartBraceletIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdGet$Response(params: ApiSmartBraceletSmartBraceletIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSmartBraceletSmartBraceletIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSmartBraceletSmartBraceletIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdGet(params: ApiSmartBraceletSmartBraceletIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiSmartBraceletSmartBraceletIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSmartBraceletSmartBraceletIdPut()` */
  static readonly ApiSmartBraceletSmartBraceletIdPutPath = '/api/SmartBracelet/smart-bracelet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSmartBraceletSmartBraceletIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSmartBraceletSmartBraceletIdPut$Response(params: ApiSmartBraceletSmartBraceletIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSmartBraceletSmartBraceletIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSmartBraceletSmartBraceletIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSmartBraceletSmartBraceletIdPut(params: ApiSmartBraceletSmartBraceletIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiSmartBraceletSmartBraceletIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSmartBraceletSmartBraceletIdDelete()` */
  static readonly ApiSmartBraceletSmartBraceletIdDeletePath = '/api/SmartBracelet/smart-bracelet/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSmartBraceletSmartBraceletIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdDelete$Response(params: ApiSmartBraceletSmartBraceletIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSmartBraceletSmartBraceletIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSmartBraceletSmartBraceletIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdDelete(params: ApiSmartBraceletSmartBraceletIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiSmartBraceletSmartBraceletIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSmartBraceletSmartBraceletPost()` */
  static readonly ApiSmartBraceletSmartBraceletPostPath = '/api/SmartBracelet/smart-bracelet';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSmartBraceletSmartBraceletPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSmartBraceletSmartBraceletPost$Response(params?: ApiSmartBraceletSmartBraceletPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSmartBraceletSmartBraceletPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSmartBraceletSmartBraceletPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSmartBraceletSmartBraceletPost(params?: ApiSmartBraceletSmartBraceletPost$Params, context?: HttpContext): Observable<void> {
    return this.apiSmartBraceletSmartBraceletPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSmartBraceletSmartBraceletIdCoordinatesPut()` */
  static readonly ApiSmartBraceletSmartBraceletIdCoordinatesPutPath = '/api/SmartBracelet/smart-bracelet/{id}/coordinates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSmartBraceletSmartBraceletIdCoordinatesPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdCoordinatesPut$Response(params: ApiSmartBraceletSmartBraceletIdCoordinatesPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSmartBraceletSmartBraceletIdCoordinatesPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSmartBraceletSmartBraceletIdCoordinatesPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdCoordinatesPut(params: ApiSmartBraceletSmartBraceletIdCoordinatesPut$Params, context?: HttpContext): Observable<void> {
    return this.apiSmartBraceletSmartBraceletIdCoordinatesPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSmartBraceletSmartBraceletIdGrantAccessGet()` */
  static readonly ApiSmartBraceletSmartBraceletIdGrantAccessGetPath = '/api/SmartBracelet/smart-bracelet/{id}/grant-access';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSmartBraceletSmartBraceletIdGrantAccessGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdGrantAccessGet$Response(params: ApiSmartBraceletSmartBraceletIdGrantAccessGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiSmartBraceletSmartBraceletIdGrantAccessGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSmartBraceletSmartBraceletIdGrantAccessGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSmartBraceletSmartBraceletIdGrantAccessGet(params: ApiSmartBraceletSmartBraceletIdGrantAccessGet$Params, context?: HttpContext): Observable<void> {
    return this.apiSmartBraceletSmartBraceletIdGrantAccessGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
