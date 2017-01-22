import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;

}
  
const HEROES: Hero[] = [
  {id: 11, name: 'Barack Obama'},
  {id: 12, name: 'Aécio Neves'},
  {id: 13, name: 'Eduardo Cunha'},
  {id: 14, name: 'Karl Marx'},
  {id: 15, name: 'Che Guevara'},
  {id: 16, name: 'Lula'},
  {id: 17, name: 'Dilma Roussef'},
  {id: 18, name: 'João Dória Jr.'},
  {id: 19, name: 'Fernando Haddad'},
  {id: 20, name: 'Jair Bolsonaro'}
];

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

}
