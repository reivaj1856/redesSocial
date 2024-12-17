import { Routes } from "@angular/router";

export default [
    
   
    {
        path: '',
        loadComponent: () => import('./event/event.component'),
    },
    
    
] as Routes