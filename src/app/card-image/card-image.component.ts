import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { Hero } from './hero.module';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit(): void {
    this.shared.fetchHeroes().subscribe((response: Hero[]) => {
      this.heroes = response;

      // this.heroes = Object.values(this.heroes)
      //   .filter((hero) => hero !== null)
      //   .map((heroObj) => Object.values(heroObj)[0]);
    });
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
