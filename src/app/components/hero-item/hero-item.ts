import { Component, computed, input, output } from '@angular/core';
import { Hero, keyStat } from '../../shared/interfaces/hero.interface';
import { HeroStatsChange } from '../../shared/interfaces/hero-stats-change.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-item.html',
})
export class HeroItem {
  hero = input.required<Hero>();
  readonly = input<boolean>(false);

  // output(devolvemos) de lo que queremos cambiar del heroe
  statsChange = output<HeroStatsChange>();
  removeHeroChange = output<Hero>();

  isVillain = computed(() => this.hero().alignment === 'bad');

  decrementStats(heroStat: keyStat): void {
    //heroStat es la stat que nos dan
    this.statsChange.emit({ hero: this.hero(), abilitie: heroStat, value: -1});
  }
  
  increment (heroStat: keyStat): void {
    this.statsChange.emit({ hero: this.hero(), abilitie: heroStat, value: 1});
  }

  removeEvent (hero: Hero): void {
    this.removeHeroChange.emit(hero);
  }
}