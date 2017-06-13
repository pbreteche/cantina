import { Component } from '@angular/core';
import {Restaurant} from './restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resto: Restaurant;

  constructor() {
    this.resto = new Restaurant();
    this.resto.name = 'La P\'tite Ardoise';
    this.resto.address = 'Bd Vincent Gache';
  }
}
