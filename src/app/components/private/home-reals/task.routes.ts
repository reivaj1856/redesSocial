import { Routes } from "@angular/router";

export default [
    
   
    {
        path: '',
        loadComponent: () => import('./reals/reals.component'),
    },
    
    
] as Routes