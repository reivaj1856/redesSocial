import { Component, inject } from '@angular/core';
import { HeadComponent } from '../../../head/head.component';
import { FormBuilder,  FormControl,  ReactiveFormsModule,  Validators,} from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../../services/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';

interface FormSignIn {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [HeadComponent, ReactiveFormsModule ,RouterLink],
  templateUrl: './sing-in.component.html',
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

      this.auth.login()
      console.log(this.auth.logueado())
      
      this.router.navigateByUrl('/home'); 

    } catch (error) {
      toast.success('Ocurrio un error')
    }
  }
}
