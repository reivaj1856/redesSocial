import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  getgithub(){
    window.open("https://github.com/reivaj1856");
  }
  getlinkedin(){
    window.open("https://www.linkedin.com/in/javier-cruz-montaño-290ba0335/");
  }
}