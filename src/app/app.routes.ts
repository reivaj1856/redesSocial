import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
    { 
        path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
        canActivateChild: [publicGuard()],
        path:'auth',
        loadChildren: () => import('./guards/feature/auth.routes'),
    },
    {
        canActivateChild: [publicGuard()],
        path: 'task',
        loadChildren: ()=> import('./task/features/task.routes')
    },
    {
        canActivateChild: [privateGuard()],
        path: 'eventos',
        loadComponent: ()=> import('./eventos/eventos.component').then(m=>m.EventosComponent) 
    },
    { 
        
        path: 'home',
        loadComponent: ()=> import('./home/home.component').then(m=>m.HomeComponent)
    },
    { 
        path: 'login',
        loadComponent: ()=> import('./login/login.component').then(m=>m.LoginComponent) 
    },
   
];
