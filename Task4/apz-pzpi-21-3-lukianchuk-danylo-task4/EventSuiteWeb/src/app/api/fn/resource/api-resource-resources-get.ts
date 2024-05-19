/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { Resource } from '../../models/resource-model';


export interface ApiResourceResourcesGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiResourceResourcesGet(http: HttpClient, rootUrl: string, params?: ApiResourceResourcesGet$Params, context?: HttpContext): Observable<Resource[]> {
  const rb = new RequestBuilder(rootUrl, apiResourceResourcesGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<Resource[]> => r instanceof HttpResponse),
    map((r: HttpResponse<Resource[]>) => {
      return r.body as Resource[];
    })
  );
}

apiResourceResourcesGet.PATH = '/api/Resource/resources';
