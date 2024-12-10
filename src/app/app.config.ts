import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'redsocial-e5135',
        appId: '1:388583778589:web:1690bb0b9bb2583ce0d9f4',
        storageBucket: 'redsocial-e5135.firebasestorage.app',
        apiKey: 'AIzaSyC1jjalXSgxJDZI10fE5sfXcVi7fNYvo7c',
        authDomain: 'redsocial-e5135.firebaseapp.com',
        messagingSenderId: '388583778589',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
