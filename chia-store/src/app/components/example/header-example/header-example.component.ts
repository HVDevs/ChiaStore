import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-example',
  templateUrl: './header-example.component.html',
  styleUrls: ['./header-example.component.css']
})
export class HeaderExampleComponent implements OnInit {

  constructor() { }

  cart = []

  ngOnInit(): void {
  }

}
