import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {

  
  @Input public heroe: Heroe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
