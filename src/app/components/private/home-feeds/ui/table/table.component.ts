import { Component, effect, input } from '@angular/core';
import { Publicacion } from '../../../../../interface/publicacion';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 
  publicaciones = input.required<Publicacion[]>();
  
}
