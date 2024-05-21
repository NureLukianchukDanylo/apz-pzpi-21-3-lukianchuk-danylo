/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { EventResource } from '../../models/event-resource-model';


export interface ApiEventResourceEventResourcesGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiEventResourceEventResourcesGet(http: HttpClient, rootUrl: string, params?: ApiEventResourceEventResourcesGet$Params, context?: HttpContext): Observable<EventResource[]> {
  const rb = new RequestBuilder(rootUrl, apiEventResourceEventResourcesGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<EventResource[]> => r instanceof HttpResponse),
    map((r: HttpResponse<EventResource[]>) => {
      return r.body as EventResource[];
    })
  );
}

apiEventResourceEventResourcesGet.PATH = '/api/EventResource/event-resources';
