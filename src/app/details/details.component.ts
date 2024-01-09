import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Hero } from '../card-image/hero.module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  id?: number;
  route = inject(ActivatedRoute);
  sharedService = inject(SharedService);
  description?: string;
  imgUrl?: string;
  name?: string;
  expanded = false;
  toggleText = 'More';

  constructor() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.sharedService.getHeroById(this.id).subscribe({
      next: (response: Hero) => {
        this.description = response.description;
        this.imgUrl = response.imgUrl;
        this.name = response.name;
      },
    });
  }

  more() {
    this.expanded = !this.expanded;
  }
}
