import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Hero } from "../interfaces/hero.interface";
import { inject } from "@angular/core";
import { HeroService } from "../services/hero";

export const heroResolver: ResolveFn<Hero> = (route: ActivatedRouteSnapshot) =>
    inject(HeroService).findOne(parseInt(route.paramMap.get('id')!, 10));
/* Antes
export const heroResolver: ResolveFn<Hero> = (route: ActivatedRouteSnapshot) => {
    // Injectamos nuestro servicio
    const heroService = inject(HeroService);
    const hero = heroService.findOne(parseInt(route.paramMap.get('id')!, 10));
    return hero;
}
*/