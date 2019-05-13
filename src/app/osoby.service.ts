import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  naszObservable$ = new Observable( observer=> {
    observer.next();

  });

  private osoby = [
    {imie: 'Damian', wiek:21},
    {imie: 'Krystian', wiek:35},
    {imie: 'John', wiek:31},
  ];

  constructor() { }

  wszystkieOsoby(){
    return this.osoby;
  }
}
