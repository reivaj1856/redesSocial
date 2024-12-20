import { Component, inject } from '@angular/core';
import { FormBuilder,  FormControl,  ReactiveFormsModule,  Validators,} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { hasEmailError, isRequired } from '../../../segurity/validators';
import { HeadComponent } from '../../head/head.component';
import { BotonGoogleComponent } from '../../button-google/boton-google.component';
import { AuthService } from '../../../services/auth.service';
import { toast } from 'ngx-sonner';
import { FooterComponent } from '../../footer/footer.component';
import { TableComponent } from '../../private/home-reals/utils/utils.component';

interface FormSignIn {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [HeadComponent, ReactiveFormsModule, RouterLink, BotonGoogleComponent,FooterComponent],
  templateUrl: './login.component.html',
  styles: ``,
})

export default class SingUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  constructor(private router: Router,public auth: AuthService ) {}
  

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }
  isEmailRequired() {
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormSignIn>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      const { email, password } = this.form.value;
      if (!email || !password) return;

      await this._authService.singIn( email, password );
      await this._authService.reloadUser();

      if (this._authService.isEmailVerified$) {
        toast.success('Inicio de sesion autenticado');
        this.router.navigateByUrl('/content');
      } else {
        toast.info('Verifica tu correo para continuar');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      toast.error('Ups, ocurrió un error');
    }
  }

  async submitWithGoogle(){
    try{
      await this._authService.singInWithGoogle()
      this.router.navigateByUrl('/content'); 
      toast.success('Inicio de sesion autenticado')

    }catch(error){
      toast.success('Cuenta no valida')
    }
  }
}
