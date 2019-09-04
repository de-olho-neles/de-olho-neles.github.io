import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Deputado } from "./deputado";
import { DetailedDeputado } from './detailedDeputado';

@Injectable({
    providedIn: "root"
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
            )
    }

    loadPartidos(): Observable<string[]> {
        return this.http.get("/api/search/partidos")
            .pipe(
                map((data: any[]) => {
                    return data;
                })
            )
    }

    loadEstados(): Observable<string[]> {
        return this.http.get("/api/search/estados")
            .pipe(
                map((data: any[]) => {
                    return data;
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

    getDetailedDeputado(id: number): Observable<DetailedDeputado> {
        return this.http.get("/api/deputado/"+id)
        .pipe(
            map((data: DetailedDeputado) => {
                return data;
            })
        );
    }

    populateDespesasDetailedDeputado(id: number): Observable<DetailedDeputado> {
        return this.http.get("/api/deputado/"+id+"?populateDespesas=true")
        .pipe(
            map((data: DetailedDeputado) => {
                return data;
            })
        );
    }

    populateFrentesDetailedDeputado(id: number): Observable<DetailedDeputado> {
        return this.http.get("/api/deputado/"+id+"?populateFrentes=true")
        .pipe(
            map((data: DetailedDeputado) => {
                return data;
            })
        );
    }

    populateOrgaosDetailedDeputado(id: number): Observable<DetailedDeputado> {
        return this.http.get("/api/deputado/"+id+"?populateOrgaos=true")
        .pipe(
            map((data: DetailedDeputado) => {
                return data;
            })
        );
    }
}