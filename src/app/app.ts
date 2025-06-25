import { Component, inject } from '@angular/core';
import { HeroList } from './components/hero-list/hero-list';
import { HeroNew } from "./components/hero-new/hero-new";
import { HeroService } from './shared/services/hero';
import { Hero } from './shared/interfaces/hero.interface';

@Component({
  selector: 'app-root',
  imports: [HeroList, HeroNew],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-renissance-workshop';

  readonly #heroService = inject(HeroService);
  //vemos el html y decimos que queremos que salga de este
  heroes = this.#heroService.findAll();
  addHero(hero: Hero){
    this.#heroService.add(hero);
  }
}
