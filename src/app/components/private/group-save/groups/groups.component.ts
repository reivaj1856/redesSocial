import { Component, effect, inject, input, signal } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { FooterComponent } from '../../../footer/footer.component';
import { FeedsServiceService } from '../../../../services/feeds-service.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { realsCreate, realService } from '../../../../services/reals.service';
import { toast } from 'ngx-sonner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { GroupsModelDocComponent, groupCreate } from '../groups-model/groups-model.component';
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

  group = inject(realService).getGroup;

  
     publicar():void{
      this._publicEmergente.open(GroupsModelDocComponent, {width: '900px'});
     }

    
}