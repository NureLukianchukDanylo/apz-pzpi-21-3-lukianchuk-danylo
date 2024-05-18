/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiEventResourceEventResourceIdGet$Params {
  id: number;
}

export function apiEventResourceEventResourceIdGet(http: HttpClient, rootUrl: string, params: ApiEventResourceEventResourceIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiEventResourceEventResourceIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
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

apiEventResourceEventResourceIdGet.PATH = '/api/EventResource/event-resource/{id}';
