import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchListComponent } from "../components/search-list/search-list.component";
import { HomeComponent } from '../components/home/home.component';
import { DeputadoDisplayComponent } from '../components/deputado-display/deputado-display.component';

const routes: Routes = [
  { path: 'search', component: SearchListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'deputado/:id', component: DeputadoDisplayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
