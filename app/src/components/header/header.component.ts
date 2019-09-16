import { OnInit, Component } from "@angular/core"
import { Router } from '@angular/router';

@Component({
    selector: "header-bar",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})

export class HeaderComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    profileButtonClicked() {
        this.router.navigateByUrl("profile");
    }
}
