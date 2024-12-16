import { Component, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import {  NgxSonnerToaster } from 'ngx-sonner';
import { AuthStateService } from './segurity/acces/auth-state.service';
import { Router } from '@angular/router';
import { User } from './interface/user'
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'redesSociales';
  
  private _authState = inject(AuthStateService)
  private _router = inject(Router)

  async logOut(){
     await this._authState.logOut()
     this._router.navigateByUrl('/auth/login')
  }
}

