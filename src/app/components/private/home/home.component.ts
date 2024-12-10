import { Component } from '@angular/core';
import { HeadComponent } from '../../head/head.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
