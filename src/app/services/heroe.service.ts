import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../models/Heroe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private baseUrl = "http://localhost:8080/heroes";

  constructor( protected http: HttpClient ) {}
  
  public getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>( this.baseUrl );
  }
  
  public getHeroe( index: number ): Observable<Heroe> {
    return this.http.get<Heroe>( `${this.baseUrl}/${index}` );
  }

  public searchHeroe( value: string ): Observable<Heroe[]> {
    return this.http.get<Heroe[]>( `${this.baseUrl}/filter/${value}` );
  }

}