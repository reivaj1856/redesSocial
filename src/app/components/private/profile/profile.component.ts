import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { getAuth,  } from "firebase/auth";

const auth = getAuth();
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export default class ProfileComponent {
  public valor: string = String(auth.currentUser?.email);
  public valor1: string = String(auth.currentUser?.phoneNumber);
  public valor2: string = String(auth.currentUser?.displayName);
  public valor3: string = String(auth.currentUser?.photoURL);
}
