/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { Mall } from '../../models/mall-model';


export interface ApiMallMallsGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiMallMallsGet(http: HttpClient, rootUrl: string, params?: ApiMallMallsGet$Params, context?: HttpContext): Observable<Mall[]> {
  const rb = new RequestBuilder(rootUrl, apiMallMallsGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<Mall[]> => r instanceof HttpResponse),
    map((r: HttpResponse<Mall[]>) => {
      return r.body as Mall[];
    })
  );
}

apiMallMallsGet.PATH = '/api/Mall/malls';
