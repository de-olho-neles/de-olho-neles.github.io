import { Component, OnInit, Input } from "@angular/core";
import { Deputado } from "../../shared/deputado";

@Component({
    selector: "list-result",
    templateUrl : "list-result.component.html",
    styleUrls: ["list-result.component.css"]
})

export class ListResultComponent implements OnInit {
    @Input() deputado: Deputado;
    ngOnInit(){}
}