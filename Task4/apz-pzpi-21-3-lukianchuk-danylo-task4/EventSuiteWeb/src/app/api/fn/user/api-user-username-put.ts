/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserRequest } from '../../models/update-user-request';

export interface ApiUserUsernamePut$Params {
  username: string;
      body?: UpdateUserRequest
}

export function apiUserUsernamePut(http: HttpClient, rootUrl: string, params: ApiUserUsernamePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiUserUsernamePut.PATH, 'put');
  if (params) {
    rb.path('username', params.username, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiUserUsernamePut.PATH = '/api/User/{username}';
