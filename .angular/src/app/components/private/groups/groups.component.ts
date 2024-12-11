import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [HeadComponent,FooterComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export default class GroupsComponent {

}
