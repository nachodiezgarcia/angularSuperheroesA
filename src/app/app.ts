import { Component } from '@angular/core';
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ Header, Footer, RouterOutlet],
  // Hemos quitado grid-cols-2
  template: `
    <div class="grid grid-rows[auto-1fr-auto] min-h-screen max-w-screen-2xl justify-between mx-auto pt-4">
      <app-header class="col-span-3 bg-cyan-500 text-white m-2 text-2xl rounded-md"/>
      <router-outlet />
      <app-footer class="col-span-3 bg-emerald-500 text-white m-2 text-2xl rounded-md"/>
    </div>
  `
})
export class App {
  protected title = 'angular-renissance-workshop';
  /*
  readonly #heroService = inject(HeroService);
  //vemos el html y decimos que queremos que salga de este
  heroes = this.#heroService.findAll();
  addHero(hero: Hero){
    this.#heroService.add(hero);
  }
  */
}
