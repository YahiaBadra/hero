import { Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../card-image/hero.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  heroForm: FormGroup;

  constructor(private shared: SharedService, private router: Router) {
    this.heroForm = new FormGroup({
      name: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      power: new FormControl(0, Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    // let name = '';
    // let imgUrl = '';
    // let power = 0;
    // let description = '';
  }
  add() {
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
            if (
              this.heroForm.controls['name'].value.length < 3 ||
              this.heroForm.controls['imgUrl'].value.length === 0 ||
              this.heroForm.controls['power'].value === 0 ||
              this.heroForm.controls['description'].value.length < 20
            ) {
              alert('error enter your information.');
            } else {
              console.log('Hero added successfully!', response);
              this.router.navigateByUrl('/list');
            }
          },
          (error) => {
            console.error('Error adding hero:', error);
          }
        );
    });
  }
}
