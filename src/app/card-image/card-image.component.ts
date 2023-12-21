import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';

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
  heroes: any[] = [];

  ngOnInit(): void {
    this.shared.getallHeroes().subscribe({
      error: (error) => {
        console.log(error);
      },
      next: (res: any) => {
        if (res.documents)
          for (let index = 0; index < res.documents.length; index++) {
            const element = res.documents[index];
            this.heroes.push(element.fields);
          }
          console.log(this.heroes);
          
      },
    });
  }

  delete(id: number) {
    console.log(id);
      this.shared.deleteHero(id).subscribe({
      next: (res: any) => {
        console.log('Hero deleted:', res);
      },
      error: (err: any) => {
        console.error('Error deleting hero:', err);
        // Handle error
      },
    });
  }
  // updateHero() {
  //   this.shared.updateHero(this.id ,this.hero).subscribe({
  //     next: (res: any) => {
  //       console.log('Hero deleted:', res);
  //     },
  //     error: (err: any) => {
  //       console.error('Error deleting hero:', err);
  //     },
  //   });
  // }
}
