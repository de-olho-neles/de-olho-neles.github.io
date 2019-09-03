import { DataService } from "src/app/shared/dataService";
import { Deputado } from "src/app/shared/deputado";
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private _httpService: HttpClient, private data: DataService) { }
  public deputados: Deputado[] = [];
  ngOnInit() {
    this.data.loadDeputados()
      .subscribe(success => {
        if (success) {
          this.deputados = this.data.deputados;
        }
      });
  }
}
