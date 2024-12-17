import { Component, effect, inject, input, signal } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { FooterComponent } from '../../../footer/footer.component';
import { FeedsServiceService } from '../../../../services/feeds-service.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { realsCreate, realService } from '../../../../services/reals.service';
import { toast } from 'ngx-sonner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../../../interface/post';
import { ModelDocComponent } from '../../home-reals/model-doc/model-doc.component';
import EventUtilsComponent from '../event-utils/event-utils.component';
import EventModelComponent from '../event-model/event-model.component';





@Component({
  selector: 'app-event',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, MatIconModule, EventUtilsComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export default class EventComponent {
  
    constructor(private _publicEmergente: MatDialog){
     
    } 
  
    eventos = inject(realService).getEventos;
  
    
       publicar():void{
        this._publicEmergente.open(EventModelComponent, {width: '900px'});
       }
  
      
}
