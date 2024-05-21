/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationRequest } from '../../models/reservation-request';

export interface ApiReservationReservationIdPut$Params {
  id: number;
      body?: ReservationRequest
}

export function apiReservationReservationIdPut(http: HttpClient, rootUrl: string, params: ApiReservationReservationIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiReservationReservationIdPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiReservationReservationIdPut.PATH = '/api/Reservation/reservation/{id}';
