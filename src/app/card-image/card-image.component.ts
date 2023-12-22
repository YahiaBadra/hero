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
  id?: number;
  update(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private shared = inject(SharedService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.shared.fetchHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }

  delete() {
    this.shared.deleteHero(this.id!).subscribe((response) => {
      this.router.navigateByUrl('/heroes');
    });
  }
  updateHero() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
