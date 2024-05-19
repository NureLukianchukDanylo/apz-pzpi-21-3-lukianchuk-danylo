/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserUserNameDelete } from '../fn/user/api-user-user-name-delete';
import { ApiUserUserNameDelete$Params } from '../fn/user/api-user-user-name-delete';
import { apiUserUserNameGet } from '../fn/user/api-user-user-name-get';
import { ApiUserUserNameGet$Params } from '../fn/user/api-user-user-name-get';
import { apiUserUsernamePut } from '../fn/user/api-user-username-put';
import { ApiUserUsernamePut$Params } from '../fn/user/api-user-username-put';
import { apiUserUsersGet } from '../fn/user/api-user-users-get';
import { ApiUserUsersGet$Params } from '../fn/user/api-user-users-get';
import { User } from '../models/user-model';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserUsersGet()` */
  static readonly ApiUserUsersGetPath = '/api/User/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUsersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUsersGet$Response(params?: ApiUserUsersGet$Params, context?: HttpContext): Observable<User[]> {
    return apiUserUsersGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUsersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUsersGet(params?: ApiUserUsersGet$Params, context?: HttpContext): Observable<User[]> {
    return this.apiUserUsersGet$Response(params, context).pipe(
      map((r: User[]): User[] => r)
    );
  }

  /** Path part for operation `apiUserUserNameGet()` */
  static readonly ApiUserUserNameGetPath = '/api/User/{userName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserNameGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserNameGet$Response(params: ApiUserUserNameGet$Params, context?: HttpContext): Observable<User> {
    return apiUserUserNameGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserNameGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserNameGet(params: ApiUserUserNameGet$Params, context?: HttpContext): Observable<User> {
    return this.apiUserUserNameGet$Response(params, context).pipe(
      map((r: User): User => r)
    );
  }

  /** Path part for operation `apiUserUserNameDelete()` */
  static readonly ApiUserUserNameDeletePath = '/api/User/{userName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserNameDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserNameDelete$Response(params: ApiUserUserNameDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserUserNameDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserNameDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserNameDelete(params: ApiUserUserNameDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiUserUserNameDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserUsernamePut()` */
  static readonly ApiUserUsernamePutPath = '/api/User/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUsernamePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUsernamePut$Response(params: ApiUserUsernamePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiUserUsernamePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUsernamePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUsernamePut(params: ApiUserUsernamePut$Params, context?: HttpContext): Observable<void> {
    return this.apiUserUsernamePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
