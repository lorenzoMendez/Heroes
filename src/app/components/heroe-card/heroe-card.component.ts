import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {
  
  /*
    Una propiedad es recibidad desde afuera con el Input
  */
  @Input() public heroe: Heroe;
  @Input() public index: number;
  
  // @Output() public heroeSelected: EventEmitter<number>;

  constructor() {
    // Se necesita iniciarlizar
    //this.heroeSelected = new EventEmitter();
  }

  ngOnInit(): void {
    // this.heroeSelected.emit( this.index );
  }

}
