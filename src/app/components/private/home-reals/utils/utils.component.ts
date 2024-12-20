import { Component, effect, inject, input } from '@angular/core';
import { Post } from '../../../../interface/post';
import { pouestCreate } from '../model-doc/model-doc.component';
import { realService } from '../../../../services/reals.service';

@Component({
  selector: 'app-utils',
  standalone: true,
  imports: [],
  templateUrl: './utils.component.html',
})
export class TableComponent {
 
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
