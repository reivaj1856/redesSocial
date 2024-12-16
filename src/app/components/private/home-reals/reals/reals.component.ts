import { Component, effect, inject, input, signal } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { FooterComponent } from '../../../footer/footer.component';
import { FeedsServiceService } from '../../../../services/feeds-service.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { realsCreate, realService } from '../../../../services/reals.service';
import { toast } from 'ngx-sonner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModelDocComponent, pouestCreate } from '../model-doc/model-doc.component';
import { TableComponent } from "../utils/utils.component";
import { Post } from '../../../../interface/post';



@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, MatIconModule, TableComponent],
  templateUrl: './reals.component.html',
})
export default class TaskListComponent {

  constructor(private _publicEmergente: MatDialog){
   
  } 

  post = inject(realService).getPost;

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

     publicar():void{
      this._publicEmergente.open(ModelDocComponent, {width: '900px'});
     }

    
}