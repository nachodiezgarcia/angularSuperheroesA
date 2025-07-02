import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';
import { heroNameValidators } from '../../shared/validators/hero-name.validators';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './hero-form.html',
  styleUrl: './hero-form.scss'
})
export class HeroForm {
  //devolvemos el heroe
  add = output<Hero>({ alias: 'sendHero' });
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

  hForm: FormGroup = this.#formBuilder.group({
    name: ['Joker', Validators.required, heroNameValidators],
    stats: this.#formBuilder.group({
      agility: [70, [Validators.required, Validators.min(1), Validators.max(99)]],
      combat: [60, [Validators.required, Validators.min(1), Validators.max(99)]],
      durability: [50, [Validators.required, Validators.min(1), Validators.max(99)]],
      intelligence: [70, [Validators.required, Validators.min(1), Validators.max(99)]],
      power: [60, [Validators.required, Validators.min(1), Validators.max(99)]],
      speed: [50, [Validators.required, Validators.min(1), Validators.max(99)]],
      strength: [70, [Validators.required, Validators.min(1), Validators.max(99)]]
    }),
    img: ['https://i.pinimg.com/originals/86/75/02/867502a6701dc48f7b7643a92cd8a531.png'],
    alignment: ['bad', Validators.required]
  })
  message = '';
  constructor() {
    this.hForm.statusChanges.subscribe(() => {
      this.message = this.hForm.invalid ? 'Please correct the errors and submit the form': '';
    });
  }
  
  addHero(){
    this.message= '';
    //Vamos a devolver un hero
    const hero : Hero = {
      id: Math.floor(Math.random()*1000)+1,
      ...this.hForm.value,
      stats: { ...this.hForm.value.stats }
    };
    console.log('Creating Hero', hero);
    this.add.emit(hero);
  }
}
