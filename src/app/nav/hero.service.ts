import { Injectable } from '@angular/core';
import { Hero } from '../card-image/hero.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroesChanged = new Subject<Hero[]>();
  private heroes: Hero[] = [];

  constructor() {}
  getHeroes() {
    return this.heroes.slice();
  }

  getHero(id: number) {
    return this.heroes.find((hero) => hero.id === id);
  }
  addHero(hero: Hero) {
    this.heroes.push(hero);
    this.heroesChanged.next(this.heroes.slice());
  }
  updateHero(index: number, newHero: Hero) {
    this.heroes[index] = newHero;
    this.heroesChanged.next(this.heroes.slice());
  }
  deleteHero(id: number) {
    this.heroes.splice(id, 1);
    this.heroesChanged.next(this.heroes.slice());
  }
}
