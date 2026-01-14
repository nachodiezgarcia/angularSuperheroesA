import { Component, computed, inject, input } from '@angular/core';
import { HeroItem } from '../../../components/hero-item/hero-item';
import { HeroService } from '../../../shared/services/hero';
import { Hero } from '../../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-detail',
  imports: [HeroItem],
  templateUrl: './hero-detail.html',
})
export class HeroDetail {
  id = input<string>('1');//, { transform: numberAttribute}
  readonly #heroService = inject(HeroService);
  hero = computed<Hero>(() =>this.#heroService.findOne(parseInt(this.id())));// Con computed pasa a ser una señal
}
