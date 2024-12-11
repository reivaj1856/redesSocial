import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthStateService } from '../segurity/acces/auth-state.service';
import { HeadComponent } from '../components/head/head.component';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink,HeadComponent],
  selector: 'app-layout',
  template: `
    <app-head></app-head>
    
    <router-outlet />
    
  `,
})
export default class LayoutCompoent {
  private _authState = inject(AuthStateService);
  private _router = inject(Router);

  async logOut() {
    await this._authState.logOut();
    this._router.navigateByUrl('/auth/sign-in');
  }
}