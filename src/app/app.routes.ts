import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent ,canActivate:[authGuard]},
    { path: '**', loadComponent: () => import('./no-login/no-login.component').then(comp => comp.NoLoginComponent)},
    { path: 'login', component:LoginComponent}
];
