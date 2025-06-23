import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-new',
  imports: [ReactiveFormsModule],
  templateUrl: './hero-new.html',
  styleUrl: './hero-new.scss'
})
export class HeroNew {
  //devolvemos el heroe
  add = output<Hero>();
  //creamos el FormBuilder (herramienta que te hace más facil hacer un formulario)
  readonly #formBuilder = inject(FormBuilder);
  hForm: FormGroup = this.#formBuilder.group({
    name: ['Joker', Validators.required],
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
  addHero(){
    if(this.hForm.invalid) {
      this.message = 'Please correct the errors and resubmit the form';
    }else{
      this.message= '';
      //Vamos a devolver un hero
      const hero : Hero = {
        id: Math.floor(Math.random()*1000)+1,
        ...this.hForm.value,
        stats: { ...this.hForm.value.stats }
      };
      console.log('Creating Hero', hero);
      this.add.emit(hero);
    };
  }
}
