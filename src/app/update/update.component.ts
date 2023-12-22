import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  hero: any;
  id: any;
  constructor(private act: ActivatedRoute, private shared: SharedService) {}

  update() {}

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    // this.shared.getHeroById(this.id).subscribe({
    //   next(res) {
    //     // this.hero=res;
    //     console.log(res);
    //   },
    //   error(err) {
    //     console.log(err);
    //   },
    // });
    console.log(this.id);
  }
}
