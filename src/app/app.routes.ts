import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren: () => import('./guards/feature/auth.routes'),
    },
    {
        path: 'task',
        loadChildren: ()=> import('./task/features/task.routes')
    },
    { 
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    { 
        path: 'home',
        loadComponent: ()=> import('./home/home.component').then(m=>m.HomeComponent),
        canActivate: [authGuard] 
    },
    { 
        path: 'login',
        loadComponent: ()=> import('./login/login.component').then(m=>m.LoginComponent) 
    },
   
];
