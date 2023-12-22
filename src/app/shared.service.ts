import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './card-image/hero.module';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  private apiKey = 'AIzaSyDuDpAQp6GLbdlgYFQlA8B26lMeu4qfVTc';

  heros: any[] = [];

  addHero(hero: any, heroId: number) {
    const heroWithId = { ...hero, id: heroId };
    return this.http.post(
      `https://app1-ce190-default-rtdb.firebaseio.com/heroes/${heroId}.json`,
      heroWithId
    );
  }

  deleteHero(id: number) {
    return this.http.delete(
      `https://app1-ce190-default-rtdb.firebaseio.com/heroes/${id}.json`
    );
  }

  updateHero(heroId: number, hero: Hero) {
    return this.http.patch(
      `https://app1-ce190-default-rtdb.firebaseio.com/heroes/${heroId}.json`,
      hero
    );
  }

  getHeroById(id: any) {
    // const getUrl = `${this.firestoreUrl}/${id}`;
    // return this.http.get(getUrl);
  }
  
  fetchHeroes() {
    return this.http.get<Hero[]>(
      'https://app1-ce190-default-rtdb.firebaseio.com/heroes.json'
    );
  }
}
