import { Component, OnInit } from '@angular/core';
import { OsobyService } from '../osoby.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  title = 'test-app';
  imie = 'Przemek';
  wyswietl = true;
  osoby = [];
  urodzony = new Date(1988, 5, 8);
  kasa = 3.55;

  constructor ( private osobyService:OsobyService,
    private route:ActivatedRoute,
    private location: Location ){}

  ngOnInit(){
    this.kasa = +this.route.snapshot.paramMap.get('kasa');
    console.log('component init');
    this.osoby = this.osobyService.wszystkieOsoby();
  }
  ngOnDestroy(){
    console.log('component zniszczony');
  }


  wyslij = function(event) {
    this.location.back();
  };

}
