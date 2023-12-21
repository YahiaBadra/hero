import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient ) {}
  private firestoreUrl =
    'https://firestore.googleapis.com/v1/projects/app1-ce190/databases/(default)/documents/heroes';

  private apiKey = 'AIzaSyDuDpAQp6GLbdlgYFQlA8B26lMeu4qfVTc';
  private urlWithApiKey = `${this.firestoreUrl}?key=${this.apiKey}`;

  heros: any[] = [];

  createNewHero(hero: any) {
    return this.http.post(this.urlWithApiKey, hero, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getallHeroes() {
    return this.http.get(this.urlWithApiKey);
  }

  deleteHero(id: number) {
    const deleteUrl = `${this.firestoreUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }

  updateHero(id: any, hero: any) {
    return this.http.put(this.urlWithApiKey + 'hero/update' + id, hero);
  }
  getHeroById(id: any) {
    const getUrl = `${this.firestoreUrl}/${id}`;
    return this.http.get(getUrl);
  }
}
