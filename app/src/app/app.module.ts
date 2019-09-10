import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../shared/dataService';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from '../components/search/search.component';
import { HeaderComponent } from '../components/header/header.component';
import { SearchListComponent } from '../components/search-list/search-list.component';
import { ListResultComponent } from '../components/list-result/list-result.component';
import { FooterComponent } from '../components/footer-bar/footer-bar.component';
import { HomeComponent } from '../components/home/home.component';
import { DeputadoDisplayComponent } from '../components/deputado-display/deputado-display.component';
import { LoadingAnimationComponent } from '../components/loading-animation/loading-animation.component';
import { FrenteElementComponent } from '../components/display-elements/frente/frente-element.component';
import { OrgaoElementComponent } from '../components/display-elements/orgao/orgao-element.component';
import { DespesaElementComponent } from '../components/display-elements/despesa/despesa-element.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        HeaderComponent,
        SearchListComponent,
        ListResultComponent,
        FooterComponent,
        HomeComponent,
        DeputadoDisplayComponent,
        LoadingAnimationComponent,
        FrenteElementComponent,
        OrgaoElementComponent,
        DespesaElementComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
