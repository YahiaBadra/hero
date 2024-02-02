import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { Hero } from './hero.module';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
})
export class CardImageComponent implements OnInit {
  update(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private shared = inject(SharedService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  heroes: Hero[] = [];
  paragraph1?: any;
  paragraph2?: any;

  ngOnInit(): void {
    this.shared.fetchHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;

      // this.heroes = Object.values(this.heroes)
      //   .filter((hero) => hero !== null)
      //   .map((heroObj) => Object.values(heroObj)[0]);
    });
    this.paragraph1 = `In narratology and comparative mythology, the hero's journey, also
    known as the monomyth, is the common template of stories that involve
    a hero who goes on an adventure, is victorious in a decisive crisis,
    and comes home changed or transformed.`;

    this.paragraph2 = `The people of Ashkavor crowded around the temple square, eager to
    witness the ascension of their new guardian -- to stand near the man
    as he bound their souls to his own. But as his final brush strokes
    fell against the runestone, and the bond of a new Ascended One was
    forged, everyone -- even those who'd stayed in their homes -- could
    sense that something had gone terribly wrong.`;
  }

  details(id: number) {
    this.router.navigateByUrl(`/details/${id}`);
  }

  delete(id: number) {
    this.shared.deleteHero(id).subscribe((response) => {
      alert('Deleted successfully.');
      this.router.navigateByUrl('/add');
    });
  }
  updateHero(id: number) {
    this.router.navigateByUrl(`/update/${id}`);
  }
}
