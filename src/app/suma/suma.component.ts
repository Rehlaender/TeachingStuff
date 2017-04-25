import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.sass']
})
export class SumaComponent implements OnInit {

  suma:number = 2;

  constructor() { }

  ngOnInit() {
  }

}
