import { Component, OnInit } from '@angular/core';

import { HeroeService } from '../../services/heroe.service';
import { Heroe } from 'src/app/models/Heroe';

// Para navegar entre paginas
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];
  
  constructor( private service: HeroeService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( params => {
      const value: string = params[ 'search' ];
      if( value ) {
        this.service.searchHeroe( value ).subscribe( heroes => this.heroes = heroes );
      } else {
        this.service.getHeroes().subscribe( heroes => this.heroes = heroes );
      }
    } );
  }

  public seeHeroe( index: number ): void {
    this.router.navigate( [ '/heroes', index ] );
  }

  // Este metodo se ejecutara desde el componente hijo.
  public showDataBetweenComponents( index: number ) {
    console.log( index );
  }
}
