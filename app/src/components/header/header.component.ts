import { OnInit, Component } from "@angular/core"
import { DataService } from 'src/shared/dataService';
import { Router } from '@angular/router';

@Component({
    selector: "header-bar",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})

export class HeaderComponent implements OnInit {

    constructor(private dataService: DataService, private router: Router) { }

    public buttonText = "Login";
    ngOnInit() {
    }
    ngDoCheck() {
        this.dataService.loginRequired ? this.buttonText = "Login" : this.buttonText = "Logout";
    }

    logButtonClicked() {
        if (this.dataService.loginRequired) { this.router.navigateByUrl("login") }
        else { this.dataService.logout() }
    }
}
