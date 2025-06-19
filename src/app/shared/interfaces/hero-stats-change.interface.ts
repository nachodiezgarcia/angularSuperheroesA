import { Hero, keyStat } from "./hero.interface";

export interface HeroStatsChange {
    hero: Hero;
    abilitie: keyStat;
    value: number;
}