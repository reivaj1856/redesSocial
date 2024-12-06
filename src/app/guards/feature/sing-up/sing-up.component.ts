import { Component, inject } from '@angular/core';
import { HeadComponent } from '../../../head/head.component';
import { FormBuilder,  FormControl,  ReactiveFormsModule,  Validators,} from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../../services/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';
import { BotonGoogleComponent } from '../../ui/boton-google/boton-google.component';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [HeadComponent, ReactiveFormsModule],
  templateUrl: './sing-up.component.html',
  styles: ``,
})
export default class SingUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  constructor(private router: Router) {}


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

  async submit() {
    if (this.form.invalid) return;

    try {
      const { email, password } = this.form.value;

      if (!email || !password) return;
      
      this._authService.singUP({ email, password });
      
      toast.success('Usuario creado correctamente')
      
      this.router.navigateByUrl('/task');

    } catch (error) {
      toast.success('Ocurrio un error')
    }
  }
}
