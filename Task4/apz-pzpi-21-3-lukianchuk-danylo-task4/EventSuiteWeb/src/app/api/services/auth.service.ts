/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthLoginPost } from '../fn/auth/api-auth-login-post';
import { ApiAuthLoginPost$Params } from '../fn/auth/api-auth-login-post';
import { apiAuthRefreshPost } from '../fn/auth/api-auth-refresh-post';
import { ApiAuthRefreshPost$Params } from '../fn/auth/api-auth-refresh-post';
import { apiAuthRegisterAdminPost } from '../fn/auth/api-auth-register-admin-post';
import { ApiAuthRegisterAdminPost$Params } from '../fn/auth/api-auth-register-admin-post';
import { apiAuthRegisterPost } from '../fn/auth/api-auth-register-post';
import { ApiAuthRegisterPost$Params } from '../fn/auth/api-auth-register-post';
import { apiAuthRevokePost } from '../fn/auth/api-auth-revoke-post';
import { ApiAuthRevokePost$Params } from '../fn/auth/api-auth-revoke-post';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthLoginPost()` */
  static readonly ApiAuthLoginPostPath = '/api/Auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Response(params?: ApiAuthLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost(params?: ApiAuthLoginPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthRegisterPost()` */
  static readonly ApiAuthRegisterPostPath = '/api/Auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRegisterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRegisterPost$Response(params?: ApiAuthRegisterPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthRegisterPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRegisterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRegisterPost(params?: ApiAuthRegisterPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthRegisterPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthRegisterAdminPost()` */
  static readonly ApiAuthRegisterAdminPostPath = '/api/Auth/register-admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRegisterAdminPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRegisterAdminPost$Response(params?: ApiAuthRegisterAdminPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthRegisterAdminPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRegisterAdminPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRegisterAdminPost(params?: ApiAuthRegisterAdminPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthRegisterAdminPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthRefreshPost()` */
  static readonly ApiAuthRefreshPostPath = '/api/Auth/refresh';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshPost$Response(params?: ApiAuthRefreshPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthRefreshPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshPost(params?: ApiAuthRefreshPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthRefreshPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAuthRevokePost()` */
  static readonly ApiAuthRevokePostPath = '/api/Auth/revoke';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRevokePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRevokePost$Response(params?: ApiAuthRevokePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAuthRevokePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRevokePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRevokePost(params?: ApiAuthRevokePost$Params, context?: HttpContext): Observable<void> {
    return this.apiAuthRevokePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
