import { Component, effect, inject, input, signal } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { FooterComponent } from '../../../footer/footer.component';
import { FeedsServiceService } from '../../../../services/feeds-service.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { realsCreate, realService } from '../../../../services/reals.service';
import { toast } from 'ngx-sonner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { GroupsModelDocComponent, pouestCreate } from '../groups-model/groups-model.component';
import { GroupUtilsComponent } from "../groups-utiles/groups-utiles.component";
import { Post } from '../../../../interface/post';
import { ModelDocComponent } from '../../home-reals/model-doc/model-doc.component';



@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, MatIconModule, GroupUtilsComponent],
  templateUrl: './groups.component.html',
})
export default class GroupsComponent {

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