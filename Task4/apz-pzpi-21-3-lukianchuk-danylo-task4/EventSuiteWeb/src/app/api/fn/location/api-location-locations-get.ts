/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { Location } from '../../models/location-model';


export interface ApiLocationLocationsGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiLocationLocationsGet(http: HttpClient, rootUrl: string, params?: ApiLocationLocationsGet$Params, context?: HttpContext): Observable<Location[]> {
  const rb = new RequestBuilder(rootUrl, apiLocationLocationsGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request<Location[]>(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<Location[]> => r instanceof HttpResponse),
    map((r: HttpResponse<Location[]>) => {
      return r.body as Location[];
    })
  );
}

apiLocationLocationsGet.PATH = '/api/Location/locations';
