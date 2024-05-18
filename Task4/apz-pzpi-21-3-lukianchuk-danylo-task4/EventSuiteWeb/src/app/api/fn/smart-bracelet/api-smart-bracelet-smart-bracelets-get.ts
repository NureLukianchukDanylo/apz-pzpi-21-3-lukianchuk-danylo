/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiSmartBraceletSmartBraceletsGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiSmartBraceletSmartBraceletsGet(http: HttpClient, rootUrl: string, params?: ApiSmartBraceletSmartBraceletsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiSmartBraceletSmartBraceletsGet.PATH, 'get');
  if (params) {
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

apiSmartBraceletSmartBraceletsGet.PATH = '/api/SmartBracelet/smart-bracelets';
