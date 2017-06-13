import { Component } from '@angular/core';
import {Restaurant} from './model/restaurant';
import {RestaurantList} from './model/restaurantList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  restaurantList: RestaurantList;

  constructor() {
    this.restaurantList = new RestaurantList();
  }
}
