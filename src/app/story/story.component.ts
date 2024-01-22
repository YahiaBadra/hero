import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Hero } from '../card-image/hero.module';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  id?: number;
  route = inject(ActivatedRoute);
  sharedService = inject(SharedService);
  description?: string;
  imgUrl?: string;
  name?: string;
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

}
