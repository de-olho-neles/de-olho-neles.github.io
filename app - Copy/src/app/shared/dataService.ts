import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Deputado } from "./deputado";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public deputados: Deputado[] = [];

  loadDeputados(): Observable<boolean> {
    return this.http.get("/api/search")
      .pipe(
        map((data: any[]) => {
          this.deputados = data;
          return true;
        })
      );
  }

  searchDeputados(name: string): Observable<boolean> {
    return this.http.get("/api/search"+"?"+"name="+name)
      .pipe(
        map((data: any[]) => {
          this.deputados = data;
          return true;
        })
      );
  }

}
