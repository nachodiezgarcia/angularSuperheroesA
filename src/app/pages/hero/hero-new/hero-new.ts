import { Component, inject } from '@angular/core';
import { HeroForm } from "../../../components/hero-form/hero-form";
import { HeroService } from '../../../shared/services/hero';
import { Hero } from '../../../shared/interfaces/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-new',
  imports: [HeroForm],
  template: `
  <div class="flex flex-col items-center bg-sky-300">
    <h3 class="font-bold">Add Hero</h3>
    <app-hero-form (sendHero)="addHero($event)" />
  </div>
  `,
  styles: `
  app-hero-form {
    font-size: 110%;
  }
  `
})
export class HeroNew {
  readonly #heroService = inject(HeroService);
  readonly #router = inject(Router);
  addHero(hero: Hero){
    console.log("Hero id:", hero.id)
    this.#heroService.add(hero);
    this.#router.navigate(['/home']);
  }
}
