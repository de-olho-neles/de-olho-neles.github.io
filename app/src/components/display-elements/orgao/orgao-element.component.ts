import { Component, OnInit, Input } from "@angular/core";
import { Orgao } from 'src/shared/detailedDeputado';

@Component ({
    selector: "orgao-element",
    templateUrl: "orgao-element.component.html",
    styleUrls: ["orgao-element.component.css"]
})

export class OrgaoElementComponent implements OnInit {
    @Input() orgaos: Orgao[];
    ngOnInit(){}
}