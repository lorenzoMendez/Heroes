import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(  private router: Router ) { }

  ngOnInit(): void {
  }

  public searchHeroe( value: string) {
    this.router.navigate( ['/heroes' ], { queryParams: { 'search': value } } );
  }
}
