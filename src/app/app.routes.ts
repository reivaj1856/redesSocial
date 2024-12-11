import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './segurity/auth.guard';

export const routes: Routes = [
    {
        canActivateChild:[publicGuard()],
        path: 'auth',
        loadChildren: () => import('./components/public/auth.routs'),
    },
    {
        canActivateChild:[privateGuard()],
        path: 'content',
        loadComponent: () =>import('./redirect/LayoutComponent'),
        loadChildren: () => import('./components/private/private.routes'),
    },
    {
        path: '**',
        redirectTo: 'auth',
    }
    
];
