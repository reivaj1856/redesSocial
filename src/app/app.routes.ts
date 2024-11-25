import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren: () => import('./guards/feature/auth.routes'),
    },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',
        loadComponent: ()=> import('./home/home.component').then(m=>m.HomeComponent),
        canActivate: [authGuard] 
    },
    {
        path: '**' , redirectTo: 'auth'
    },

];
