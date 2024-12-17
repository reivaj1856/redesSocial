import { Component, inject } from '@angular/core';
import { FormBuilder,  FormControl,  ReactiveFormsModule,  Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import { hasEmailError, isRequired } from '../../../segurity/validators';
import { AuthService } from '../../../services/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { BotonGoogleComponent } from '../../button-google/boton-google.component';
import { HeadComponent } from '../../head/head.component';
import { FooterComponent } from '../../footer/footer.component';
import { User } from '../../../interface/user';
import { authState } from '@angular/fire/auth';
import { AuthStateService } from '../../../segurity/acces/auth-state.service';

  

export type UserCreate = Omit<User,'id'>


export interface FormSignUp {
  nombre: FormControl<string | null>;
  apellido: FormControl<string | null>;
  codigo: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [HeadComponent, ReactiveFormsModule,BotonGoogleComponent,FooterComponent,RouterLink],
  templateUrl: './register.component.html',
  styles: ``,
})
export default class SingUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);
   private _authState = inject(AuthStateService);

  // Validación para el correo institucional
  unajmaEmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value || '';
    const domain = '@unajma.edu.pe';
    return email.endsWith(domain) ? null : { unajmaEmail: true }; 
  }

  // Comprobación de errores
  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError() {
    return hasEmailError(this.form);
  }

  hasDomainError() {
    const emailControl = this.form.get('email');
    return emailControl?.hasError('unajmaEmail') && emailControl?.touched;
  }

  // Formulario reactivo
  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
      //this.unajmaEmailValidator,
    ]),
    password: this._formBuilder.control('', Validators.required),
    nombre: this._formBuilder.control('',Validators.required),
    apellido: this._formBuilder.control('',Validators.required),
    codigo: this._formBuilder.control('',Validators.required),
  });

  async submit() {
    if (this.form.invalid) {
      if (this.hasDomainError()) {
        toast.error('Por favor, usa el correo institucional (@unajma.edu.pe).');
      }
      return;
    }

    try {
      const { email, password, nombre, apellido, codigo } = this.form.value;

      if (!email || !password || !nombre || !apellido || !codigo) return;

      // Crear usuario y enviar correo de verificación
      await this._authService.signUp({email, password , nombre, apellido, codigo} );

      
      toast.success('Cuenta creada revise su correo')
      this.logOut()
      // Redirigir a la página de inicio de sesión
      authState.
      this._router.navigateByUrl('/auth/login');
    } catch (error) {
      
    }
  }
  async logOut() {
    await this._authState.logOut();

    this._router.navigateByUrl('/auth/sign-in');
  }

  // Google Sign In
  async submitWithGoogle() {
    try {
    
      toast.success('Bienvenido de nuevo');
      this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Upss Ocurrió un error');
    }
  }
}
