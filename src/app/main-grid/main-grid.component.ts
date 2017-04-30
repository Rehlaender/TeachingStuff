import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  pictures = [
    {id: 1, route: 'assets/1.png'},
    {id: 2, route: 'assets/2.jpg'},
    {id: 3, route: 'assets/3.jpg'},
    {id: 4, route: 'assets/4.jpg'},
    {id: 5, route: 'assets/5.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
