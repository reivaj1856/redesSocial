import { Component, inject } from '@angular/core';
import { FormBuilder,  FormControl,  ReactiveFormsModule,  Validators,} from '@angular/forms';
import { hasEmailError, isRequired } from '../../../segurity/validators';
import { AuthService } from '../../../services/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';
import { BotonGoogleComponent } from '../../button-google/boton-google.component';
import { HeadComponent } from '../../head/head.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [HeadComponent, ReactiveFormsModule,BotonGoogleComponent],
  templateUrl: './forgot-password.component.html',
  styles: ``,
})
export default class SingUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  constructor(private router: Router,public auth: AuthService   ) {}
  
  // ,private fireAuth: AngularFireAuth

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }
  isEmailRequired() {
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  ngOnInit(): void{

  }

  forgotPassword(email : string) {
      // this.fireAuth.sendPasswordResetEmail(email).then(() => {
      //   this.router.navigate(['/varify-email']);
      // }, err => {
      //   alert('Something went wrong');
      // })
  }

}
