import { Routes } from "@angular/router";

export default [
    
    {
        path: 'new',
        loadComponent: () => import('./feeds/feeds.component'),
    },
    {
        path: '',
        loadComponent: () => import('./feeds-forms/feeds-forms.component'),
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./feeds-forms/feeds-forms.component'),
    },
    
] as Routes