import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/shared/dataService';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailedDeputado } from 'src/shared/detailedDeputado';
import { LoadingAnimationComponent } from '../loading-animation/loading-animation.component';
import { FrenteElementComponent } from '../display-elements/frente/frente-element.component';

@Component ({
    selector: "deputado-display",
    templateUrl: "deputado-display.component.html",
    styleUrls: ["deputado-display.component.css"]
})

export class DeputadoDisplayComponent implements OnInit {

    constructor(private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService){}

        public detailedDeputado: DetailedDeputado;
        public loadingBasics: boolean = true;
        public loadingDespesas: boolean = true;
        public loadingFrentes: boolean = true;
        public loadingOrgaos: boolean = true;
        public id: number = this.route.snapshot.params["id"];

    ngOnInit(){
        this.dataService.getDetailedDeputado(this.id)
        .subscribe(success => {
            if(success != null){
                this.detailedDeputado = success;
                //After loading the basic info we can build the component and request the rest of the info
                this.loadedBasics();
            }
        })
    }
    loadedBasics(){
        //Loading the rest of the information
        this.loadingBasics = false;
        this.dataService.populateDespesasDetailedDeputado(this.id)
        .subscribe(success => {
            if(success != null){
                this.detailedDeputado.despesas = success.despesas;
                this.loadingDespesas = false;
            }
        })
        this.dataService.populateFrentesDetailedDeputado(this.id)
        .subscribe(success => {
            if(success != null){
                this.detailedDeputado.frentes = success.frentes;
                this.loadingFrentes = false;
            }
        })
        this.dataService.populateOrgaosDetailedDeputado(this.id)
        .subscribe(success => {
            if(success != null){
                this.detailedDeputado.orgaos = success.orgaos;
                this.loadingOrgaos = false;
            }
        })
    }
}