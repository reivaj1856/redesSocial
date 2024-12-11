import { Component, inject, signal } from '@angular/core';
import { HeadComponent } from '../../../head/head.component';
import { FooterComponent } from '../../../footer/footer.component';
import { TableComponent } from '../ui/table/table.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from '../../../../segurity/validators';
import { FeedsServiceService, PublicacionCreate } from '../../../../services/feeds-service.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [HeadComponent,FooterComponent,TableComponent,ReactiveFormsModule],
  templateUrl: './feeds.component.html',
})
export default class FeedsComponent {
  private _formBuilder = inject(FormBuilder);
  private _taskService = inject(FeedsServiceService)
  private _router = inject(Router)

  loading = signal(false);

  form = this._formBuilder.group({
    titulo: this._formBuilder.control('',Validators.required),
    subtitulo: this._formBuilder.control('',Validators.required),
    fecha: this._formBuilder.control('',Validators.required),
    texto: this._formBuilder.control('',Validators.required),
    enlace: this._formBuilder.control('',Validators.required),
  })
  async submit(){
    if(this.form.invalid) return;
    
    try{
      this.loading.set(true);

      const  {titulo,subtitulo,fecha,texto,enlace} = this.form.value;
      const publicacion :PublicacionCreate = {
        titulo: titulo || '',
        subtitulo: subtitulo||'',
        fecha: fecha||'',
        texto: texto||'',
        enlace: enlace||''
      };

    await this._taskService.create(publicacion)
    toast.success('publicacion exitosa')
    this._router.navigateByUrl('/content')
    }catch(error){
      toast.success('upds algo salio mal')
    } finally{
      this.loading.set(false);
    }
  }
}

