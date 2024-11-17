import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public auth: AuthService ,private router: Router){

  }
  login(){
    this.auth.login();
    console.log("intento");
    this.router.navigate(['/home']);
  }

  logout(){
    this.auth.logout();
  }
}
