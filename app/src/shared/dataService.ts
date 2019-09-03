import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Deputado } from "./deputado";

@Injectable({
    providedIn: "root"
})

export class DataService {
    constructor(private http: HttpClient) { }

    public deputados: Deputado[] = [];
    public partidos: string[] = [];
    public estados: string[] = [];

    loadDeputados(): Observable<boolean> {
        return this.http.get("/api/search")
            .pipe(
                map((data: any[]) => {
                    this.deputados = data;
                    return true;
                })
            )
    }

    loadPartidos(): Observable<boolean> {
        return this.http.get("/api/search/partidos")
            .pipe(
                map((data: any[]) => {
                    this.partidos = data;
                    return true;
                })
            )
    }

    loadEstados(): Observable<boolean> {
        return this.http.get("/api/search/estados")
            .pipe(
                map((data: any[]) => {
                    this.estados = data;
                    return true;
                })
            )
    }

    searchDeputados(query: string): Observable<boolean> {
        return this.http.get("/api"+query)
            .pipe(
                map((data: any[]) => {
                    this.deputados = data;
                    return true;
                })
            );
    }
}