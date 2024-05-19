/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { FinishedEvent } from '../../models/finished-event-model';


export interface ApiEventFinishedEventsUserIdGet$Params {
  userId: string;
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiEventFinishedEventsUserIdGet(http: HttpClient, rootUrl: string, params: ApiEventFinishedEventsUserIdGet$Params, context?: HttpContext): Observable<FinishedEvent[]> {
  const rb = new RequestBuilder(rootUrl, apiEventFinishedEventsUserIdGet.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {"style":"simple"});
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<FinishedEvent[]> => r instanceof HttpResponse),
    map((r: HttpResponse<FinishedEvent[]>) => {
      return r.body as FinishedEvent[];
    })
  );
}

apiEventFinishedEventsUserIdGet.PATH = '/api/Event/finished-events/{userId}';
