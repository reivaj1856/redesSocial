import { Component, effect, input } from '@angular/core';
import { Publicacion } from '../../../../services/reals.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './ui.component.html',
})
export class TableComponent {
 
  publicaciones = input.required<Publicacion[]>();
  
}
