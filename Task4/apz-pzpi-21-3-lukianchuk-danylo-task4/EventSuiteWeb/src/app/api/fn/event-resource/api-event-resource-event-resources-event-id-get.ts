/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiEventResourceEventResourcesEventIdGet$Params {
  eventId: number;
}

export function apiEventResourceEventResourcesEventIdGet(http: HttpClient, rootUrl: string, params: ApiEventResourceEventResourcesEventIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiEventResourceEventResourcesEventIdGet.PATH, 'get');
  if (params) {
    rb.path('eventId', params.eventId, {"style":"simple"});
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

apiEventResourceEventResourcesEventIdGet.PATH = '/api/EventResource/event-resources/{eventId}';
