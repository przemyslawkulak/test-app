import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  naszForm = new FormGroup({
      imie: new FormControl(''),
      nazwisko: new FormControl(''),
  })

  wyslij(){
    console.log(this.naszForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
