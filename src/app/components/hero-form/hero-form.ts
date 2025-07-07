import { Component, computed, effect, inject, input, output, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';
import { heroNameValidators } from '../../shared/validators/hero-name.validators';
import { TitleCasePipe } from '@angular/common';
import { HeroService } from '../../shared/services/hero';

@Component({
  selector: 'app-hero-form',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './hero-form.html',
  styleUrl: './hero-form.scss'
})
export class HeroForm {

  textButton = computed(() => this.#heroService.isDefaultHero(this.hero()) ? "Create" : "Update" );

  readonly #heroService = inject(HeroService);
  //devolvemos el heroe
  add = output<Hero>({ alias: 'sendHero' });
  update = output<Hero>({});
  hero = input<Hero>(this.#heroService.defaultHero);
  //creamos el FormBuilder (herramienta que te hace más facil hacer un formulario)
  readonly #formBuilder = inject(FormBuilder);
  statsString: string[] = ["agility", "combat", "durability", "intelligence", "power", "speed", "strength"];
  names: string[] =["Joker", "Hulk", "Super-Man", "Green lantern", "Catwoman", "Bionic Woman", "Captein America", "Tanos"];
  enlaces: string[] =[
    "https://i.pinimg.com/originals/86/75/02/867502a6701dc48f7b7643a92cd8a531.png",
    "https://i.pinimg.com/564x/3f/f9/7d/3ff97d4156820b11ff86bf3862ebaee5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqq2zBtUyfU4PTsNQ9IosU08kKWGNGePrQd_h1FUl0xrT4jYDk7D6PS1DzQFMDtf0xGq4&usqp=CAU",
    "https://http2.mlstatic.com/D_NQ_NP_940641-MLA78614579494_082024-O.webp",
    "https://upload.wikimedia.org/wikipedia/en/e/e4/Catwoman_Infobox.jpg",
    "https://i.pinimg.com/736x/8d/41/6d/8d416d821e366aeb0853081dbcab9f0e.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGX-ljswJd6-9qa3bl2hmNummUmerrIw89YHG8uVzKaR2SmiLzLA1mfrJr0n1UhuP2Ae4&usqp=CAU",
    "https://thecouch.world/wp-content/uploads/2020/05/846115343.jpg"
  ]

  heroesData = this.names.map ((name, index)=>({
    name,
    enlace: this.enlaces[index]
  }));

  hForm: Signal<FormGroup> = computed(() => this.#formBuilder.group({
    name: [this.hero().name, Validators.required, heroNameValidators],
    stats: this.#formBuilder.group({
      agility: [this.hero().stats.agility, [Validators.required, Validators.min(1), Validators.max(99)]],
      combat: [this.hero().stats.combat, [Validators.required, Validators.min(1), Validators.max(99)]],
      durability: [this.hero().stats.durability, [Validators.required, Validators.min(1), Validators.max(99)]],
      intelligence: [this.hero().stats.intelligence, [Validators.required, Validators.min(1), Validators.max(99)]],
      power: [this.hero().stats.power, [Validators.required, Validators.min(1), Validators.max(99)]],
      speed: [this.hero().stats.speed, [Validators.required, Validators.min(1), Validators.max(99)]],
      strength: [this.hero().stats.strength, [Validators.required, Validators.min(1), Validators.max(99)]]
    }),
    img: [this.hero().img, Validators.required],
    alignment: [this.hero().alignment]
  }));
  message = '';
  constructor() {
    effect(() => {
      this.hForm().statusChanges.subscribe(() => {
        this.message = this.hForm().invalid ? 'Please correct the errors and submit the form': '';
      });
    });
  }
  
  addUpdate() {
    this.message = '';
    if (this.#heroService.isDefaultHero(this.hero())) {
      const hero: Hero = {
        id: Math.floor(Math.random()*1000)+1,
        ...this.hForm().value,
        stats: { ...this.hForm().value.stats }
      };
      console.log('Creating Hero', hero);
      this.add.emit(hero);
    } else {
      const hero: Hero = {
      id: this.hero().id,
      ...this.hForm().value,
      stats: { ...this.hForm().value.stats }
      };
      console.log('Updating Hero', hero);
      this.update.emit(hero);
    }
  }
}
