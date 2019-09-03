import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// PAGES
import { HomeComponent } from './Pages/home/home.component';
import { ListComponent } from './Pages/list/list.component';
import { LoginComponent } from './Pages/login/login.component';

import {AppMaterialModule} from './app-material/app-material.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Components/Search/search.component';
import { FilterComponent } from './Components/Filter/filter.component';
import { DataService } from './shared/dataService';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    HomeComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
