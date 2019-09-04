import { OnInit, Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from 'src/shared/dataService';

@Component({
    selector: 'search-bar',
    templateUrl: 'search.component.html',
    styleUrls: ["search.component.css"]
})
export class SearchComponent implements OnInit {
    searchText: string = "";
    partido: string = "";
    estado: string = "";
    partidos: string[] = [];
    estados: string[] = [];
    isPartidosLoaded: boolean = false;
    isEstadosLoaded: boolean = false;

    constructor(private router: Router, private dataService: DataService) { }

    ngOnInit() {
        this.dataService.loadPartidos()
            .subscribe(success => {
                if (success) {
                    this.partidos = success;
                    this.isPartidosLoaded = true;
                }
            });
        this.dataService.loadEstados()
            .subscribe(success => {
                if (success) {
                    this.estados = success;
                    this.isEstadosLoaded = true;
                }
            });
    }

    searchButtonClicked() {
        var url = this.queryBuilder();
        this.router.navigateByUrl("search" + url);
    }

    isFilterTrayOpen(filter: string) {
        return document.getElementById(filter + "Option").classList.contains("show");
    }

    queryBuilder() {
        //builds the query URL based on the state of the component
        var query = "?";
        var wasNameQueried = false;
        var wasPartidoQueried = false;
        var wasEstadoQueried = false;
        if (this.searchText != "") {
            query = query.concat("name=" + this.searchText);
            wasNameQueried = true;
        }
        if (this.partido != "" && this.isFilterTrayOpen("partido")) {
            //checking if the last one was printed or not
            if (wasNameQueried) { query = query.concat("&"); }
            query = query.concat("partido=" + this.partido);
            wasPartidoQueried = true;
        }
        if (this.estado != "" && this.isFilterTrayOpen("estado")) {
            if (wasPartidoQueried || wasNameQueried) { query = query.concat("&"); }
            query = query.concat("estado=" + this.estado);
            wasEstadoQueried = true;
        }
        return query;
    }
}