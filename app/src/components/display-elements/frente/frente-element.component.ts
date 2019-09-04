import { Component, OnInit, Input } from "@angular/core";
import { Frente } from 'src/shared/detailedDeputado';

@Component ({
    selector: "frente-element",
    templateUrl: "frente-element.component.html",
    styleUrls: ["frente-element.component.css"]
})

export class FrenteElementComponent implements OnInit {
    @Input() frentes: Frente[];
    ngOnInit(){}
}