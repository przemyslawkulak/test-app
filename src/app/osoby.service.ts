import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  private osoby = [
    {imie: 'Damian', wiek:21},
    {imie: 'Krystian', wiek:35},
  ];

  constructor() { }

  wszystkieOsoby(){
    return this.osoby;
  }
}
