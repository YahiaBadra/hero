import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Hero } from '../card-image/hero.module';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  hero?: Hero;
  id?: number;
  router = inject(Router);
  constructor(private act: ActivatedRoute, private shared: SharedService) {}

  update(id: number) {
    this.shared.updateHero(id, this.hero!).subscribe((response) => {
      alert('Updated successfully.');
      this.router.navigateByUrl('/list');
    });
  }

  ngOnInit(): void {
    this.id = parseInt(this.act.snapshot.paramMap.get('id')!);
    this.shared.getHeroById(this.id).subscribe((response: Hero) => {
      this.hero = response;
      // Object.values(response)[0];
    });
  }
}
