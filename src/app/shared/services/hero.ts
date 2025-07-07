import { Injectable } from '@angular/core';
import { Hero, keyStat } from '../interfaces/hero.interface';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = [
    {
      id: 1,
      name: "Spiderman",
      stats: {
        intelligence: 82,
        strength: 58,
        agility: 97,
        speed: 87,
        durability: 76,
        power: 73,
        combat: 81
      },
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQez8wx82M87bp6pTy3lkDXJF31Md6LyanfqA&s",
      alignment: "good"
    },
    {
      id: 2,
      name: "Doctor Octopus",
      stats: {
        intelligence: 76,
        strength: 46,
        agility: 88,
        speed: 90,
        durability: 66,
        power: 69,
        combat: 77
      },
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu2NmWT_VTy0Bjqhr7mD8P-KE9tPgLJsTFKV-357_88QENfvnef_JHSJWJHBXn_TZamA&usqp=CAU",
      alignment: "bad"
    },
    {
      id: 3,
      name: "Batman",
      stats: {
        intelligence: 97,
        strength: 86,
        agility: 99,
        speed: 77,
        durability: 49,
        power: 51,
        combat: 87
      },
      img: "https://media.desenio.com/site_images/67a5dd185d8e0ac40920a07f_WB0038-5.jpg?auto=compress%2Cformat&fit=max&w=3840",
      alignment: "good"
    },
  ];

  readonly defaultHero: Hero = {
    id: (Math.random() * 1000)+1000,
    name: 'Joker',
    img: 'https://i.pinimg.com/originals/86/75/02/867502a6701dc48f7b7643a92cd8a531.png',
    alignment: 'bad',
    stats: {
      intelligence: 70,
      strength: 60,
      agility: 70,
      speed: 50,
      durability: 50,
      power: 60,
      combat: 60
    }
  };

  readonly NullHero: Hero = {
    id: (Math.random() * 1000)+10000,
    name: 'Not Found',
    img: '/errorAvangular.png',
    alignment: 'bad',
    stats:{
      intelligence: -1, 
      strength: -1, 
      agility: -1, 
      speed: -1,
      durability: -1,
      power: -1,
      combat: -1
    }
  };

  //Antes era addHero pero como ahora estamos en nuestro servicio de HeroService no hace falta decir que es un huero por lo que solo ponemos add
  add(hero: Hero) {
    this.heroes.push(hero);
  }

  updateStat(hero: Hero, stat: keyStat, value: number) {
    hero.stats[stat] += value;
  }

  findAll(): Hero[] {
    return this.heroes;
  }

  findOne(id: number): Hero {
    console.log('Searching ID:', id);
    return this.heroes.find((hero) => hero.id === id) || this.NullHero;
  }

  isDefaultHero(hero: Hero): boolean {
    return hero.id === this.defaultHero.id;
  }

  isNullHero(hero: Hero): boolean {
    return hero.id === this.NullHero.id;
  }

  update(heroToUpdate: Hero) {
    this.heroes = this.heroes.map((hero) => hero.id === heroToUpdate.id ? heroToUpdate : hero);
  }

  remove(heroLast: Hero){
    const index = this.heroes.findIndex((hero) => hero.id === heroLast.id)
    if (index !== -1) {
      this.heroes.slice(index, 1)
    }
  }
}
