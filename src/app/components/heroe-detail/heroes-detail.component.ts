import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroe.service';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  private id: number;
  public heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private service: HeroeService ) {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
      }
    });
  }

  ngOnInit(): void {
    if( this.id ) {
      this.service.getHeroe( this.id ).subscribe( heroe => {
        this.heroe = heroe;
      } );
    }
  }
}