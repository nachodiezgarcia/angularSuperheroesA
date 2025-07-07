import { Component, inject } from '@angular/core';
import { HeroForm } from "../../../components/hero-form/hero-form";
import { Hero } from '../../../shared/interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../../shared/services/hero';

@Component({
  selector: 'app-hero-update',
  imports: [HeroForm],
  template: `
  <div class="flex flex-col items-center bg-[rgb(94,104,255)]">
    <h3 class="font-bold">Update Hero</h3>
    <app-hero-form [hero]="hero" (update)="updateHero($event)" />
  </div>
  `,
})
export class HeroUpdate {
  //Para enrutar injectamos el router
  readonly #heroService = inject(HeroService);
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);
  hero: Hero = this.#activatedRoute.snapshot.data['hero'];
  updateHero(hero: any) {
    console.log('Updating Hero', hero.id);
    this.#heroService.update(hero);
    this.#router.navigate(['/home']);
  }
}
