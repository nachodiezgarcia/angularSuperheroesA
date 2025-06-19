import { Component } from '@angular/core';
import { HeroList } from './components/hero-list/hero-list';

@Component({
  selector: 'app-root',
  imports: [HeroList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-renissance-workshop';
}
