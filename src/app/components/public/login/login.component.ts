import { Component, inject } from '@angular/core';
import { FormBuilder,  FormControl,  ReactiveFormsModule,  Validators,} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { hasEmailError, isRequired } from '../../../segurity/validators';
import { HeadComponent } from '../../head/head.component';
import { BotonGoogleComponent } from '../../button-google/boton-google.component';
import { AuthService } from '../../../services/auth.service';
import { toast } from 'ngx-sonner';

interface FormSignIn {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [HeadComponent, ReactiveFormsModule, RouterLink, BotonGoogleComponent],
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
      
      await this._authService.singIn({ email, password });
      
      toast.success('Inicio de sesion autenticado')

      
      this.router.navigateByUrl('/content'); 

    } catch (error) {
      toast.success('Cuenta no existente o contraseña incorrecta')
 
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
