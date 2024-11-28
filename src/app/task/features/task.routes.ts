import { Routes } from "@angular/router";

export default [
    { 
        path: '', loadComponent:()=> import('./list/list.component'), 
    },    
] as Routes