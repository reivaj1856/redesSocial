import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',
        loadComponent: ()=> import('./home/home.component').then(m=>m.HomeComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'login',
        loadComponent: ()=> import('./login/login.component').then(m=>m.LoginComponent) 
    },
    {
        path: '**' , redirectTo: 'no-login'
    },
    {
        path: 'no-login',
        loadComponent: ()=> import('./no-login/no-login.component').then(m=>m.NoLoginComponent) 
    },
];
