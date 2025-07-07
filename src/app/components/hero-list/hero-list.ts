import { Component, inject, input } from '@angular/core';
import { HeroItem } from '../hero-item/hero-item';
import { Hero } from '../../shared/interfaces/hero.interface';
import { HeroStatsChange } from '../../shared/interfaces/hero-stats-change.interface';
import { HeroService } from '../../shared/services/hero';

@Component({
  selector: 'app-hero-list',
  imports: [HeroItem],
  templateUrl: './hero-list.html',
})
export class HeroList {
  heroes = input.required<Hero[]>();
  readonly #heroService = inject(HeroService);
  
  saveStats({ hero, abilitie, value }: HeroStatsChange) {
    this.#heroService.updateStat(hero, abilitie, value);
  }
}
