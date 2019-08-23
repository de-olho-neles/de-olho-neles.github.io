import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
