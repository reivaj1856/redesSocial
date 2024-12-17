import { Routes } from "@angular/router";

export default [
    
    {
        path: 'noticias',
        loadChildren: () => import('./home-feeds/task.routes'),
    },
    {
        path: 'inicio',
        loadChildren: () => import('./home-reals/task.routes'),
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
    },
    {
        path: 'events',
        loadComponent: () => import('./events/event/event.component'),
    },
    {
        path: 'group',
        loadComponent: () => import('./group-save/groups/groups.component'),
    },
    {
        path: 'message',
        loadComponent: () => import('./message/message.component'),
    },
    {
        path: 'polit',
        loadComponent: () => import('./politica-privacidad/politica-privacidad.component'),
    },
    {
        path: 'licens',
        loadComponent: () => import('./licens/licens.component'),
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component'),
    },
  
    {
        path: '**',
        redirectTo: 'inicio',
    },
] as Routes