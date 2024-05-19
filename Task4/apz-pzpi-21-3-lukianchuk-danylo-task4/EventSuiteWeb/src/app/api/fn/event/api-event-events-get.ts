/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { Event } from '../../models/event-model';


export interface ApiEventEventsGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiEventEventsGet(http: HttpClient, rootUrl: string, params?: ApiEventEventsGet$Params, context?: HttpContext): Observable<Event[]> {
  const rb = new RequestBuilder(rootUrl, apiEventEventsGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<Event[]> => r instanceof HttpResponse),
    map((r: HttpResponse<Event[]>) => {
      return r.body as Event[];
    })
  );
}

apiEventEventsGet.PATH = '/api/Event/events';
