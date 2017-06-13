import { Component } from '@angular/core';
import {RestaurantList} from './model/restaurantList';
import {Restaurant} from './model/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  restaurantList: RestaurantList;
  selectedRestaurant: Restaurant;

  constructor() {
    this.restaurantList = new RestaurantList();
    this.selectedRestaurant = this.restaurantList.data[0];
  }

  selectRestaurant(restaurant: Restaurant) {
    this.selectedRestaurant = restaurant;
  }
}
