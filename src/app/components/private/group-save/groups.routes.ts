import { Routes } from "@angular/router";

export default [
    
   
    {
        path: '',
        loadComponent: () => import('./groups/groups.component'),
    },
    
    
] as Routes