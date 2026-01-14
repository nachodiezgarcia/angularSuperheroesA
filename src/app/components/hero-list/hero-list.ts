import { Component, inject, input } from '@angular/core';
import { HeroItem } from '../hero-item/hero-item';
import { Hero } from '../../shared/interfaces/hero.interface';
import { HeroStatsChange } from '../../shared/interfaces/hero-stats-change.interface';
import { HeroService } from '../../shared/services/hero';

@Component({
  selector: 'app-hero-list',
  imports: [HeroItem],
  templateUrl: './hero-list.html',
  /*
  <div class="flex flex-wrap gap-4">
    @for(hero of heroes(); track hero.id){
        <app-hero-item [hero]="hero"
        (statsChange)="saveStats($event)"/>
    }@empty{
        <h1>There are no heroes :v</h1>
    }
  </div>
  */
})
export class HeroList {
  heroes = input.required<Hero[]>();
  readonly #heroService = inject(HeroService);

  saveStats({ hero, abilitie, value }: HeroStatsChange) {
    this.#heroService.updateStat(hero, abilitie, value);
  }

  removeHeroEvent(hero: Hero): void {
    this.#heroService.remove(hero);
  }
}
