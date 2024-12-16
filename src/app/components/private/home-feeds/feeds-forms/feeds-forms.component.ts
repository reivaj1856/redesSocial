import { Component, effect, inject, input } from '@angular/core';

import { RouterLink } from '@angular/router';

import { TableComponent } from '../ui/table/table.component';
import { FooterComponent } from '../../../footer/footer.component';
import { FeedsServiceService } from '../../../../services/feeds-service.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent, RouterLink, FooterComponent],
  templateUrl: './feeds-forms.component.html',
})
export default class TaskListComponent {
 
  publicaciones = inject(FeedsServiceService).getPublicacion;
  
}