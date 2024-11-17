import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-no-login',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './no-login.component.html',
  styleUrl: './no-login.component.css'
})
export class NoLoginComponent {

}
