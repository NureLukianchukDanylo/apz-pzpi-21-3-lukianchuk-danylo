/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiRegistrationRegistrationIdDelete } from '../fn/registration/api-registration-registration-id-delete';
import { ApiRegistrationRegistrationIdDelete$Params } from '../fn/registration/api-registration-registration-id-delete';
import { apiRegistrationRegistrationIdGet } from '../fn/registration/api-registration-registration-id-get';
import { ApiRegistrationRegistrationIdGet$Params } from '../fn/registration/api-registration-registration-id-get';
import { apiRegistrationRegistrationIdPut } from '../fn/registration/api-registration-registration-id-put';
import { ApiRegistrationRegistrationIdPut$Params } from '../fn/registration/api-registration-registration-id-put';
import { apiRegistrationRegistrationPost } from '../fn/registration/api-registration-registration-post';
import { ApiRegistrationRegistrationPost$Params } from '../fn/registration/api-registration-registration-post';
import { apiRegistrationRegistrationsEventIdGet } from '../fn/registration/api-registration-registrations-event-id-get';
import { ApiRegistrationRegistrationsEventIdGet$Params } from '../fn/registration/api-registration-registrations-event-id-get';
import { apiRegistrationRegistrationsGet } from '../fn/registration/api-registration-registrations-get';
import { ApiRegistrationRegistrationsGet$Params } from '../fn/registration/api-registration-registrations-get';
import { apiRegistrationUserRegistrationsUserIdGet } from '../fn/registration/api-registration-user-registrations-user-id-get';
import { ApiRegistrationUserRegistrationsUserIdGet$Params } from '../fn/registration/api-registration-user-registrations-user-id-get';
import { Registration } from '../models/registration-model';

@Injectable({ providedIn: 'root' })
export class RegistrationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRegistrationRegistrationsGet()` */
  static readonly ApiRegistrationRegistrationsGetPath = '/api/Registration/registrations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegistrationRegistrationsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationsGet$Response(params?: ApiRegistrationRegistrationsGet$Params, context?: HttpContext): Observable<Registration[]> {
    return apiRegistrationRegistrationsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRegistrationRegistrationsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationsGet(params?: ApiRegistrationRegistrationsGet$Params, context?: HttpContext): Observable<Registration[]> {
    return this.apiRegistrationRegistrationsGet$Response(params, context).pipe(
      map((r: Registration[]): Registration[] => r)
    );
  }

  /** Path part for operation `apiRegistrationRegistrationIdGet()` */
  static readonly ApiRegistrationRegistrationIdGetPath = '/api/Registration/registration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegistrationRegistrationIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationIdGet$Response(params: ApiRegistrationRegistrationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRegistrationRegistrationIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRegistrationRegistrationIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationIdGet(params: ApiRegistrationRegistrationIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiRegistrationRegistrationIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRegistrationRegistrationIdPut()` */
  static readonly ApiRegistrationRegistrationIdPutPath = '/api/Registration/registration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegistrationRegistrationIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegistrationRegistrationIdPut$Response(params: ApiRegistrationRegistrationIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRegistrationRegistrationIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRegistrationRegistrationIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegistrationRegistrationIdPut(params: ApiRegistrationRegistrationIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiRegistrationRegistrationIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRegistrationRegistrationIdDelete()` */
  static readonly ApiRegistrationRegistrationIdDeletePath = '/api/Registration/registration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegistrationRegistrationIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationIdDelete$Response(params: ApiRegistrationRegistrationIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRegistrationRegistrationIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRegistrationRegistrationIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationIdDelete(params: ApiRegistrationRegistrationIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiRegistrationRegistrationIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRegistrationRegistrationPost()` */
  static readonly ApiRegistrationRegistrationPostPath = '/api/Registration/registration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegistrationRegistrationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegistrationRegistrationPost$Response(params?: ApiRegistrationRegistrationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRegistrationRegistrationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRegistrationRegistrationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRegistrationRegistrationPost(params?: ApiRegistrationRegistrationPost$Params, context?: HttpContext): Observable<void> {
    return this.apiRegistrationRegistrationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRegistrationRegistrationsEventIdGet()` */
  static readonly ApiRegistrationRegistrationsEventIdGetPath = '/api/Registration/registrations/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegistrationRegistrationsEventIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationsEventIdGet$Response(params: ApiRegistrationRegistrationsEventIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRegistrationRegistrationsEventIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRegistrationRegistrationsEventIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationRegistrationsEventIdGet(params: ApiRegistrationRegistrationsEventIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiRegistrationRegistrationsEventIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRegistrationUserRegistrationsUserIdGet()` */
  static readonly ApiRegistrationUserRegistrationsUserIdGetPath = '/api/Registration/user-registrations/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRegistrationUserRegistrationsUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationUserRegistrationsUserIdGet$Response(params: ApiRegistrationUserRegistrationsUserIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiRegistrationUserRegistrationsUserIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRegistrationUserRegistrationsUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRegistrationUserRegistrationsUserIdGet(params: ApiRegistrationUserRegistrationsUserIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiRegistrationUserRegistrationsUserIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
