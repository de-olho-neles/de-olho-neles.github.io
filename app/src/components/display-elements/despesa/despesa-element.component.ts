import { Component, OnInit, Input } from "@angular/core";
import { Despesa } from 'src/shared/detailedDeputado';

@Component ({
    selector: "despesa-element",
    templateUrl: "despesa-element.component.html",
    styleUrls: ["despesa-element.component.css"]
})

export class DespesaElementComponent implements OnInit {
    @Input() despesas: Despesa[];
    ngOnInit(){}
}