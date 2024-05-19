/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { Venue } from '../../models/venue-model';


export interface ApiVenueVenuesGet$Params {
  'PageInfo.Size'?: number;
  'PageInfo.Number'?: number;
}

export function apiVenueVenuesGet(http: HttpClient, rootUrl: string, params?: ApiVenueVenuesGet$Params, context?: HttpContext): Observable<Venue[]> {
  const rb = new RequestBuilder(rootUrl, apiVenueVenuesGet.PATH, 'get');
  if (params) {
    rb.query('PageInfo.Size', params['PageInfo.Size'], {"style":"form"});
    rb.query('PageInfo.Number', params['PageInfo.Number'], {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<Venue[]> => r instanceof HttpResponse),
    map((r: HttpResponse<Venue[]>) => {
      return r.body as Venue[];
    })
  );
}

apiVenueVenuesGet.PATH = '/api/Venue/venues';
