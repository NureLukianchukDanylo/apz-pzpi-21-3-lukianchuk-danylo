/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResourceRequest } from '../../models/resource-request';

export interface ApiResourceResourceIdPut$Params {
  id: number;
      body?: ResourceRequest
}

export function apiResourceResourceIdPut(http: HttpClient, rootUrl: string, params: ApiResourceResourceIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiResourceResourceIdPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
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

apiResourceResourceIdPut.PATH = '/api/Resource/resource/{id}';
