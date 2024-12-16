import { Component, effect, input } from '@angular/core';
import { Post } from '../../../../interface/post';

@Component({
  selector: 'app-utils',
  standalone: true,
  imports: [],
  templateUrl: './utils.component.html',
})
export class TableComponent {
 
  post = input.required<Post[]>();
  
}
