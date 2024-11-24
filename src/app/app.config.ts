import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"redessociales-1d230",
    "appId":"1:195247275875:web:5888767395ee5dbdb7dd56",
    "storageBucket":"redessociales-1d230.firebasestorage.app",
    "apiKey":"AIzaSyC3JFHqreQ1slsiLoDLezzcvCc2gl41RSY",
    "authDomain":"redessociales-1d230.firebaseapp.com",
    "messagingSenderId":"195247275875"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]

};
