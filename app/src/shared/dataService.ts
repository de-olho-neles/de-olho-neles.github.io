import { HttpClient, HttpHeaders } from "@angular/common/http";
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

	//Basic search and display information functions
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
		return this.http.get("/api" + query)
			.pipe(
				map((data: any[]) => {
					this.deputados = data;
					return true;
				})
			);
	}

	getDetailedDeputado(id: number): Observable<DetailedDeputado> {
		return this.http.get("/api/deputado/" + id)
			.pipe(
				map((data: DetailedDeputado) => {
					return data;
				})
			);
	}

	populateDespesasDetailedDeputado(id: number): Observable<DetailedDeputado> {
		return this.http.get("/api/deputado/" + id + "?populateDespesas=true")
			.pipe(
				map((data: DetailedDeputado) => {
					return data;
				})
			);
	}

	populateFrentesDetailedDeputado(id: number): Observable<DetailedDeputado> {
		return this.http.get("/api/deputado/" + id + "?populateFrentes=true")
			.pipe(
				map((data: DetailedDeputado) => {
					return data;
				})
			);
	}

	populateOrgaosDetailedDeputado(id: number): Observable<DetailedDeputado> {
		return this.http.get("/api/deputado/" + id + "?populateOrgaos=true")
			.pipe(
				map((data: DetailedDeputado) => {
					return data;
				})
			);
	}

	//Implementing login
	private token: string = "";
	private tokenExpiration: Date;

	public get loginRequired(): boolean {
		return this.token.length == 0 || this.tokenExpiration > new Date();
	}

	login(credentials): Observable<boolean> {
		return this.http
			.post("/api/account/login", credentials)
			.pipe(
				map((data: any) => {
					this.token = data.token;
                    this.tokenExpiration = data.tokenExpiration;
                    console.log(this.token);
					return true;
				})
			);
	}

	logout() {
		this.token = "";
		this.tokenExpiration = new Date();
	}

	signup(credentials): Observable<boolean> {
		return this.http
			.post("/api/account/signup", credentials)
			.pipe(
				map((data: any) => {
					return true;
				})
			);
	}

	getUserData() {
		//retrieve deputado list
		console.log("Getting user data");
	}

	addDeputadoMonitor(id: number): Observable<boolean> {
		return this.http
			.post("/api/account/adddeputado", id, {
				headers: new HttpHeaders()
                    .set("Authorization", "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJrYXluYXJvZHJpZ3Vlc0BsaXZlLmNvbSIsImp0aSI6Ijc1ZTFhZTg4LTQwZTAtNGVlNC04NDc5LWFlNWE3OGZlMDI3ZiIsInVuaXF1ZV9uYW1lIjoia2F5bmFyb2RyaWd1ZXNAbGl2ZS5jb20iLCJleHAiOjE1NjgzMDA5NDYsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6InVzZXJzIn0.djBfySuRorIQoYLLMx9n9uK5rpDnaZcAN0M-inaYcfY")
					.set("Content-Type", "application/json")
			})
			.pipe(
				map((data: any) => {
					console.log(data);
					return true;
				})
			);
	}

}
