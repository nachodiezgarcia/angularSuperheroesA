import { identifierName } from '@angular/compiler';
import { Component, computed, input } from '@angular/core';
import { Hero, keyStats, Stats } from '../../shared/interfaces/hero.interface';
import { HeroList } from '../hero-list/hero-list';

@Component({
  selector: 'app-hero-item',
  imports: [],
  templateUrl: './hero-item.html',
  styleUrl: './hero-item.scss'
})
export class HeroItem {
  hero = input.required<Hero>();

  isVillain = computed(() => this.hero().alignment === 'bad');

  decrementStats(heroStat: keyStats): void {
    //heroStat es la stat que nos dan
    const value: number = this.hero().stats[heroStat];
    if (value > 1){
      this.hero().stats[heroStat]--;
    }
  }
  
  increment (heroStat: keyStats): void {
    const value: number = this.hero().stats[heroStat];
    if (value < 99) {
      this.hero().stats[heroStat]++;
    }
  }
}