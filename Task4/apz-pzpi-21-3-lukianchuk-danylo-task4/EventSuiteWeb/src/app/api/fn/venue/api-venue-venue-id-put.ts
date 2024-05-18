/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { VenueRequest } from '../../models/venue-request';

export interface ApiVenueVenueIdPut$Params {
  id: number;
      body?: VenueRequest
}

export function apiVenueVenueIdPut(http: HttpClient, rootUrl: string, params: ApiVenueVenueIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiVenueVenueIdPut.PATH, 'put');
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

apiVenueVenueIdPut.PATH = '/api/Venue/venue/{id}';
