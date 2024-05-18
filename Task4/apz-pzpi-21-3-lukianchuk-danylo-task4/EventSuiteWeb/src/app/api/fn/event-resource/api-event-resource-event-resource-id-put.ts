/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EventResourceRequest } from '../../models/event-resource-request';

export interface ApiEventResourceEventResourceIdPut$Params {
  id: number;
      body?: EventResourceRequest
}

export function apiEventResourceEventResourceIdPut(http: HttpClient, rootUrl: string, params: ApiEventResourceEventResourceIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiEventResourceEventResourceIdPut.PATH, 'put');
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

apiEventResourceEventResourceIdPut.PATH = '/api/EventResource/event-resource/{id}';
