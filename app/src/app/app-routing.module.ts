import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchListComponent } from "../components/search-list/search-list.component";
import { HomeComponent } from '../components/home/home.component';
import { DeputadoDisplayComponent } from '../components/deputado-display/deputado-display.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ProfileComponent } from '../components/profile/profile.component';


const routes: Routes = [
    { path: 'search', component: SearchListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'deputado/:id', component: DeputadoDisplayComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
