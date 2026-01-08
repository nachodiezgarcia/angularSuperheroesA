import { Component, computed, inject, input } from '@angular/core';
import { HeroItem } from '../../../components/hero-item/hero-item';
import { HeroService } from '../../../shared/services/hero';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [HeroItem, JsonPipe],
  templateUrl: './hero-detail.html',
})
export class HeroDetail {
  id = input<string>('1');
  readonly #heroService = inject(HeroService);
  hero = computed(() =>this.#heroService.findOne(parseInt(this.id())));// Con computed pasa a ser una señal
}
