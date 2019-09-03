import { Component, OnInit, Input } from "@angular/core";
import { Deputado } from "../../shared/deputado";
import { DataService } from "../../shared/dataService";
import { ListResultComponent } from "../list-result/list-result.component";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
    selector: "search-list",
    templateUrl: "search-list.component.html",
    styleUrls: ["search-list.component.css"]
})

export class SearchListComponent implements OnInit {
    constructor(private dataservice: DataService, private router: Router) { }
    public deputados: Deputado[] = [];
    ngOnInit() {
        this.router.events.subscribe((val) => {
            if(val instanceof NavigationStart) {
            }
            else if(val instanceof NavigationEnd) {
                this.dataservice.searchDeputados(this.router.url)
                .subscribe(success => {
                    if (success) {
                        this.deputados = this.dataservice.deputados;
                    }
                });
            }
        });
    }
}