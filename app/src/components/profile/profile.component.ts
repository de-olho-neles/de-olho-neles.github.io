import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/shared/dataService';
import { Router } from "@angular/router";

@Component({
    selector: "profile",
    templateUrl: "profile.component.html",
    styleUrls: ["profile.component.css"]
})

export class ProfileComponent implements OnInit{
    constructor(private dataService: DataService, private router: Router) { }
    ngOnInit() {
        this.dataService.loginRequired ? this.router.navigateByUrl("login") : this.dataService.getUserData();
    }
}
