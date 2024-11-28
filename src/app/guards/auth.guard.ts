import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.logueado()) {
    console.log("logueado");
    return true;
  } else {
    router.navigate(['/auth/sing-in']);
    return false;
  }

};
