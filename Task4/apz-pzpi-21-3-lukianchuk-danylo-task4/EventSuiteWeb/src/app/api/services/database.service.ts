/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDatabaseBackupPost } from '../fn/database/api-database-backup-post';
import { ApiDatabaseBackupPost$Params } from '../fn/database/api-database-backup-post';

@Injectable({ providedIn: 'root' })
export class DatabaseService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDatabaseBackupPost()` */
  static readonly ApiDatabaseBackupPostPath = '/api/Database/backup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDatabaseBackupPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDatabaseBackupPost$Response(params?: ApiDatabaseBackupPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiDatabaseBackupPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDatabaseBackupPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDatabaseBackupPost(params?: ApiDatabaseBackupPost$Params, context?: HttpContext): Observable<void> {
    return this.apiDatabaseBackupPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
