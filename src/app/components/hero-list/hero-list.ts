import { Component, input } from '@angular/core';
import { HeroItem } from '../hero-item/hero-item';
import { Hero } from '../../shared/interfaces/hero.interface';
import { HeroStatsChange } from '../../shared/interfaces/hero-stats-change.interface';

@Component({
  selector: 'app-hero-list',
  imports: [HeroItem],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.scss'
})
export class HeroList {
  heroes = input.required<Hero[]>();
  saveStats({ hero, abilitie, value }: HeroStatsChange) {
    hero.stats[abilitie] += value;
  }
}
