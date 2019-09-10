import { OnInit, Component, ViewChild } from '@angular/core';
import { DataService } from 'src/shared/dataService';

@Component({
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ["signup.component.css"]
})
export class SignupComponent implements OnInit {

    constructor(private dataService: DataService) { }

    public errorMessage = "";
    public credentials = {
        email: "",
        password: "",
        remember: false
    }
    public passwordConfirmation = "";

    ngOnInit() { }

    onSignup() {
        if (this.passwordConfirmation == this.credentials.password) {
            this.dataService.signup(this.credentials)
                .subscribe(success => {
                    if (success) {
                        console.log("Cadastro funcionou");
                    }
                }, err => this.errorMessage = "O cadastro falhou");
        }
        else { this.errorMessage = "As senhas inseridas devem ser iguais" }
    }
}
