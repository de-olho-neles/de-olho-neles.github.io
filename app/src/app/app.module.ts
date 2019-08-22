import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ListComponent } from './Pages/list/list.component';
import { LoginComponent } from './Pages/login/login.component';
import { SearchComponent } from './Components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppMaterialModule} from './app-material/app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
