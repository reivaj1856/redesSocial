import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [HeadComponent,FooterComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export default class EventsComponent {

}
