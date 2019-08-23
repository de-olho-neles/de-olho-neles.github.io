import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { DeputiesInfo, Params, Filter } from 'src/app/model';

@Injectable()
export class SearchService {
  readonly API_URL = '/mocks/deputies-list.json';

  constructor(private http: HttpClient) { }

  createOptions(filter: Filter): { params: HttpParams } {
    let httpParams = new HttpParams();

    Object.entries(filter).forEach(([key, value]) => {
      httpParams = httpParams.append(key, value);
    });

    return { params: httpParams };
  }

  getDeputies(filter: Filter = {}): Observable<DeputiesInfo[]> {
    const options = this.createOptions(filter);

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
