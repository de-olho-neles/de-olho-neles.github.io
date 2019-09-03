import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onSearchClick(name: string) {
    this._router.navigateByUrl("search?name="+name+"&partido="+partido+"&uf="+uf);
  }

  onKey(event: any) { // without type info
    if (event.target.value[event.target.value.lenght] == "\n") {
      this.onSearchClick(event.target.value);
    }
  }
}
