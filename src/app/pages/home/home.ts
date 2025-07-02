import { Component, inject } from '@angular/core';
import { HeroList } from "../../components/hero-list/hero-list";
import { HeroService } from '../../shared/services/hero';

@Component({
  selector: 'app-home',
  imports: [HeroList],
  template: '<app-hero-list [heroes]="heroes" />',
})
// heros es el array de heroes que tenemos lo podemos ver en services hero.ts
// Con este array tenemos tres funcionalidades que una de ellas findAll, la vamos a utilizar aquí y new hero el add
export class Home {
  //Hacemos una variable que solo se pueda leer
  readonly #heroService = inject(HeroService);
  heroes = this.#heroService.findAll();
}
