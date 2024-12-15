import { Component, inject } from '@angular/core';
import { FormBuilder,  FormControl,  ReactiveFormsModule,  Validators,} from '@angular/forms';
import { hasEmailError, isRequired } from '../../../segurity/validators';
import { AuthService } from '../../../services/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';
import { BotonGoogleComponent } from '../../button-google/boton-google.component';
import { HeadComponent } from '../../head/head.component';
import { FooterComponent } from '../../footer/footer.component';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  nombre: FormControl<string | null>;
  apellido: FormControl<string | null>;
  codigo: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [HeadComponent, ReactiveFormsModule,BotonGoogleComponent,FooterComponent],
  templateUrl: './register.component.html',
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

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
    nombre: this._formBuilder.control('',Validators.required),
    apellido: this._formBuilder.control('',Validators.required),
    codigo: this._formBuilder.control('',Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      const { email, password, nombre, apellido, codigo } = this.form.value;

      if (!email || !password || !nombre || !apellido || !codigo) return;
      
      
      this._authService.singUP( {email, password , nombre, apellido, codigo});
      
      this.router.navigateByUrl('/auth');
      toast.success('Usuario creado correctamente')
      
      

    } catch (error) {
      toast.success('Ocurrio un error')
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
