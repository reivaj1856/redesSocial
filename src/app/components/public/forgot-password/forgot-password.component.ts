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
  imports: [HeadComponent, ReactiveFormsModule,],
  templateUrl: './forgot-password.component.html',
  styles: ``,
})
export default class SingUpComponent {
  isEmailRequired() {
    throw new Error('Method not implemented.');
    }
      private _formBuilder = inject(FormBuilder);
      private _authService = inject(AuthService);
    
      constructor(private _router: Router) {}
    
    goToSignIn() {
      this._router.navigate(['/auth/sign-in']);
    }
    
      form = this._formBuilder.group({
        email: this._formBuilder.control('', [Validators.required, Validators.email]),
      });
    
      async submit() {
        if (this.form.invalid) {
          toast.error('Por favor, ingresa un correo válido');
          return;
        }
    
        try {
          const { email } = this.form.value;
    
          if (!email) return;
    
          await this._authService.recoverPassword({
            email,
            password: ''
          });
    
          toast.success('Solicitud Autenticada, revise su bandeja');
        } catch (error) {
          toast.error('Solicitud no verificada intente de nuevo mas tarde');
        }
      }
    }

    