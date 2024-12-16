import { Component, effect, inject, input } from '@angular/core';
import { Post } from '../../../../interface/post';
import { pouestCreate } from '../groups-model/groups-model.component';
import { realService } from '../../../../services/reals.service';

@Component({
  selector: 'app-groups-utiles',
  standalone: true,
  imports: [],
  templateUrl: './groups-utiles.component.html',
})
export class GroupUtilsComponent {
 
  post = input.required<Post[]>();
  presionado :boolean=false;
  private _taskService = inject(realService)
  
  setPresionado(){
    this.presionado=false;
  }
  meGusta(id:string,titulo:string,usuario:string,texto:string,fecha:string,enlace:string,like:number){
    if(this.presionado&&like>1){
      this.presionado=false
      like--
    }else{
      this.presionado=true
      like++
    }
    const pouest :pouestCreate = {
              titulo: titulo || '',
              usuario:usuario||'',
              fecha: fecha|| '',
              texto: texto || '',
              enlace: enlace || '',
              like : like ,
            };
    this._taskService.update(pouest,id)
  }

}
