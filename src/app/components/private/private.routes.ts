import { Routes } from "@angular/router";

export default [
    
    {
        path: 'feeds',
        loadChildren: () => import('./home-feeds/task.routes'),
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
    },
    {
        path: 'events',
        loadComponent: () => import('./events/events.component'),
    },
    {
        path: 'group',
        loadComponent: () => import('./groups/groups.component'),
    },
    {
        path: 'message',
        loadComponent: () => import('./message/message.component'),
    },
  
    {
        path: '**',
        redirectTo: 'feeds',
    },
] as Routes