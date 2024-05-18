/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiEventFinishedEventsUserIdGet$Params {
  userId: string;
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiEventFinishedEventsUserIdGet(http: HttpClient, rootUrl: string, params: ApiEventFinishedEventsUserIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiEventFinishedEventsUserIdGet.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {"style":"simple"});
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
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

apiEventFinishedEventsUserIdGet.PATH = '/api/Event/finished-events/{userId}';
