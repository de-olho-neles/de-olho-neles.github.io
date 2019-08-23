import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import { HomeComponent } from './Pages/home/home.component';
import { ListComponent } from './Pages/list/list.component';
import { LoginComponent } from './Pages/login/login.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
