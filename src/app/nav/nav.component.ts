import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  private shared = inject(SharedService);
  private router = inject(Router);
  private id = 1;
  hero = {
    id: 1,
    name: '',
    power: 0,
    imgUrl: '',
  };

  heros: any[] = [];

  ngOnInit(): void {
    this.shared.getallHeroes().subscribe((heroes: any) => {
      if (heroes.documents && heroes.documents.length !== null) {
        this.id = heroes.documents.length + 1;
        this.hero.id = this.id;
      }
    });
  }

  add() {
    if (this.hero.name == '') {
      alert("Please enter the hero's name.");
      return;
    } else if (this.hero.imgUrl === '') {
      alert("Please enter the hero's image.");
      return;
    }

    const firestoreData = {
      fields: {
        id: {
          integerValue: this.hero.id,
        },
        name: {
          stringValue: this.hero.name,
        },
        power: {
          integerValue: this.hero.power,
        },
        imgUrl: {
          stringValue: this.hero.imgUrl,
        },
      },
    };
    this.shared.createNewHero(firestoreData).subscribe({
      error: (error) => {
        console.log(error);
        this.hero = {
          id: 0,
          name: '',
          power: 0,
          imgUrl: '',
        };
      },

      next: (hero) => {
        this.heros.push(hero);
        this.router.navigateByUrl('/list');
      },
    });
  }
}
