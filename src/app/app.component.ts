import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <input #newHero
      (keyup.enter)="addHero(newHero.value); newHero.value=''"
      (blur)="addHero(newHero.value); newHero.value='' ">
    <button (click)="addHero(newHero.value)">Add</button>

    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <ul>
      <li *ngFor="let hero of heroes">
        <p (mouseover)="setFavHero(hero)">{{hero.name}}</p>
      </li>
    </ul>
    <button (click)="onclickMe()">Click Me button</button>
    {{mensaje}}
    <br><br><br>
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>

    <br><br><br>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
    `
})
export class AppComponent {
  title:string;
  myHero:string;
  heroes:any;
  values:string;
  mensaje:string;

  constructor(){
    this.title="Tour of Heroes";
    this.values= '';
    // this.heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero=this.heroes[0];
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(new Hero(22,newHero));
    }
  }

  setFavHero(hero: Hero){
    this.myHero = hero;
  }

  onclickMe(){
    this.mensaje = 'You are my Hero!'
  }

  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
