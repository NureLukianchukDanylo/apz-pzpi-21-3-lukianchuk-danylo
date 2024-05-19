/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';
import { User } from '../../models/user-model';


export interface ApiUserUserNameGet$Params {
  userName: string;
}

export function apiUserUserNameGet(http: HttpClient, rootUrl: string, params: ApiUserUserNameGet$Params, context?: HttpContext): Observable<User> {
  const rb = new RequestBuilder(rootUrl, apiUserUserNameGet.PATH, 'get');
  if (params) {
    rb.path('userName', params.userName, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<User> => r instanceof HttpResponse),
    map((r: HttpResponse<User>) => {
      return r.body as User;
    })
  );
}

apiUserUserNameGet.PATH = '/api/User/{userName}';
