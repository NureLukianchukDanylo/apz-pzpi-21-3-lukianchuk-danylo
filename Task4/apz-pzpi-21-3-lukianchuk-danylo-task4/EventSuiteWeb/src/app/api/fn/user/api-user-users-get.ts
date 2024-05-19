/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { User } from '../../models/user-model';


export interface ApiUserUsersGet$Params {
}

export function apiUserUsersGet(http: HttpClient, rootUrl: string, params?: ApiUserUsersGet$Params, context?: HttpContext): Observable<User[]> {
  const rb = new RequestBuilder(rootUrl, apiUserUsersGet.PATH, 'get');
  if (params) {
  }

  return http.request<User[]>(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<User[]> => r instanceof HttpResponse),
    map((r: HttpResponse<User[]>) => {
      return r.body as User[];
    })
  );
}    

apiUserUsersGet.PATH = '/api/User/users';
