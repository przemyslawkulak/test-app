import { Component, OnInit, OnDestroy } from '@angular/core';
import { OsobyService } from './osoby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'test-app';
  imie = 'Przemek';
  wyswietl = true;
  osoby = [];
  urodzony = new Date(1988, 5, 8);
  kasa = 3.55;

  constructor ( private osobyService:OsobyService){}

  ngOnInit(){
    console.log('component init');
    this.osoby = this.osobyService.wszystkieOsoby();
  }
  ngOnDestroy(){
    console.log('component zniszczony');
  }


  wyslij = function(event) {
    this.wyswietl = !this.wyswietl
  };
}
