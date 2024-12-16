import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthStateService } from '../../segurity/acces/auth-state.service';


@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  private _authState = inject(AuthStateService);
  private _router = inject(Router);

  async logOut() {
    await this._authState.logOut();

    this._router.navigateByUrl('/auth/sign-in');
  }
}
