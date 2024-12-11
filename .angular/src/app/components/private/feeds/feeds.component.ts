import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [HeadComponent,FooterComponent],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.css'
})
export default class FeedsComponent {

}
