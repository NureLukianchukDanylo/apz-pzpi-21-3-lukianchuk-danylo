/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { Event } from '../../models/event-model';


export interface ApiEventEventIdGet$Params {
  id: number;
}

export function apiEventEventIdGet(http: HttpClient, rootUrl: string, params: ApiEventEventIdGet$Params, context?: HttpContext): Observable<Event> {
  const rb = new RequestBuilder(rootUrl, apiEventEventIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<Event> => r instanceof HttpResponse),
    map((r: HttpResponse<Event>) => {
      return r.body as Event;
    })
  );
}

apiEventEventIdGet.PATH = '/api/Event/event/{id}';
