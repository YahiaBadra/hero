import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  heroForm: FormGroup;

  constructor(
    private shared: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.heroForm = new FormGroup({
      name: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      power: new FormControl(0, Validators.required),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let name = '';
    let imgUrl = '';
    let power = 0;
  }
  add() {
    console.log('Form', this.heroForm?.value);

    this.shared.fetchHeroes().subscribe((response) => {
      let lengthHero = 0;
      if (response !== null) {
        lengthHero = response.length;
      }
      this.shared
        .addHero(
          {
            ...this.heroForm?.value,
            id: lengthHero,
          },
          lengthHero
        )
        .subscribe(
          (response) => {
            console.log('Hero added successfully!', response);
            this.router.navigateByUrl('/list');
          },
          (error) => {
            console.error('Error adding hero:', error);
          }
        );
    });
  }
}
