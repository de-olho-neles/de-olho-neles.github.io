import { OnInit, Component, ViewChild } from '@angular/core';
import { DataService } from 'src/shared/dataService';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit {

    constructor(private dataService: DataService) { }

    public errorMessage = "";
    public credentials = {
        email: "",
        password: "",
        remember: false
    }

    ngOnInit() { }

    onLogin() {
        this.dataService.login(this.credentials)
            .subscribe(success => {
                if (success) {
                    console.log("Login funcionou");
                }
            }, err => this.errorMessage = "O Login falhou");
    }
}
