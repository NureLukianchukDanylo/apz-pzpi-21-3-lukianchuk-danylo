/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { SmartBracelet } from '../../models/smart-bracelet-model';


export interface ApiSmartBraceletSmartBraceletsGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiSmartBraceletSmartBraceletsGet(http: HttpClient, rootUrl: string, params?: ApiSmartBraceletSmartBraceletsGet$Params, context?: HttpContext): Observable<SmartBracelet[]> {
  const rb = new RequestBuilder(rootUrl, apiSmartBraceletSmartBraceletsGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<SmartBracelet[]> => r instanceof HttpResponse),
    map((r: HttpResponse<SmartBracelet[]>) => {
      return r.body as SmartBracelet[];
    })
  );
}

apiSmartBraceletSmartBraceletsGet.PATH = '/api/SmartBracelet/smart-bracelets';
