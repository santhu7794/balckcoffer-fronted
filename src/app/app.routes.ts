import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},{path:'login',component:LoginComponent},{path:'home',component:HomeComponent},{path:'view',component:ViewComponent}
];
