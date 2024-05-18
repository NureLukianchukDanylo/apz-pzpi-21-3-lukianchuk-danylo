/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiMallMallsLocationIdGet$Params {
  locationId: number;
}

export function apiMallMallsLocationIdGet(http: HttpClient, rootUrl: string, params: ApiMallMallsLocationIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiMallMallsLocationIdGet.PATH, 'get');
  if (params) {
    rb.path('locationId', params.locationId, {"style":"simple"});
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

apiMallMallsLocationIdGet.PATH = '/api/Mall/malls/{locationId}';
