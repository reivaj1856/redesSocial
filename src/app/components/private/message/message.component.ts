import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [HeadComponent,FooterComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export default class MessageComponent {

}
