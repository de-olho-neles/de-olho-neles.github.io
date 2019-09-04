import { Component, OnInit, Input } from "@angular/core";
import { Deputado } from "../../shared/deputado";
import { DataService } from "../../shared/dataService";
import { ListResultComponent } from "../list-result/list-result.component";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { LoadingAnimationComponent } from '../loading-animation/loading-animation.component';

@Component({
    selector: "search-list",
    templateUrl: "search-list.component.html",
    styleUrls: ["search-list.component.css"]
})

export class SearchListComponent implements OnInit {
    constructor(private dataservice: DataService, private router: Router) { }
    public deputados: Deputado[] = [];
    public loading: boolean = true;
    ngOnInit() {
        //Loading the list for the search query on the current URL
        this.dataservice.searchDeputados(this.router.url)
        .subscribe(success => {
            if (success) {
                this.deputados = this.dataservice.deputados;
                this.loading = false;
            }
        });

        //Listening to the router events to see if the query on the URL changes
        this.router.events.subscribe((val) => {
            if(val instanceof NavigationStart) {
                this.loading = true;
            }
            else if(val instanceof NavigationEnd && val.url.includes("/search?")) {
                this.dataservice.searchDeputados(this.router.url)
                .subscribe(success => {
                    if (success) {
                        this.deputados = this.dataservice.deputados;
                        this.loading = false;
                    }
                });
            }
        });
    }
}