/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { Registration } from '../../models/registration-model';


export interface ApiRegistrationRegistrationsGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiRegistrationRegistrationsGet(http: HttpClient, rootUrl: string, params?: ApiRegistrationRegistrationsGet$Params, context?: HttpContext): Observable<Registration[]> {
  const rb = new RequestBuilder(rootUrl, apiRegistrationRegistrationsGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<Registration[]> => r instanceof HttpResponse),
    map((r: HttpResponse<Registration[]>) => {
      return r.body as Registration[];
    })
  );
}

apiRegistrationRegistrationsGet.PATH = '/api/Registration/registrations';
