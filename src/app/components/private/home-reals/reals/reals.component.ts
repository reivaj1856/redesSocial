import { Component, effect, inject, input } from '@angular/core';

import { RouterLink } from '@angular/router';

import { TableComponent } from '../ui/ui.component';
import { FooterComponent } from '../../../footer/footer.component';
import { FeedsServiceService, Publicacion } from '../../../../services/feeds-service.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent, RouterLink, FooterComponent],
  templateUrl: './reals.component.html',
})
export default class TaskListComponent {
 
  publicaciones = inject(FeedsServiceService).getPublicacion;
  
}