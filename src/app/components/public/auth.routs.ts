import { Routes } from "@angular/router";

export default [
    {
        path: 'login',
        loadComponent: ()=> import('./login/login.component'),    
    },
    {
        path: 'register',
        loadComponent: ()=> import('./register/register.component'),    
    },
    {
        path: '**',
        redirectTo: 'login',
    }
    // { 
        // path: '', redirectTo: 'home', pathMatch: 'full'
    // },
    // {
        // path: '**' , redirectTo: 'sign-in'
    // },
] as Routes