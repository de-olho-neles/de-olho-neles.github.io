import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { DeputiesInfo } from 'src/app/model/deputies';
import { Params } from '../../model/params';

@Injectable()
export class SearchService {
  readonly API_URL = '/mocks/deputies-list.json';

  constructor(private http: HttpClient) { }

  createHttpParams(options: Params[]): { params: HttpParams } {
    const httpParams = options.reduce((params: HttpParams, option: Params) => (
      params.append(option.key, option.value)
    ), new HttpParams());

    return { params: httpParams };
  }

  getByName(name: string): Observable<DeputiesInfo[]> {
    const params = [new Params('name', name)];
    const options = this.createHttpParams(params);

    return this.http.get(this.API_URL, options)
      .pipe(
        tap(event => console.log(`Http getByName() result: ${event}`)),
        map((result: any): DeputiesInfo[] => result.dados || [] as DeputiesInfo[]),
        catchError((error: HttpErrorResponse) => {
          console.log(`Http error response: ${error.error.message}`);
          return of([]);
        })
      );
  }
}
