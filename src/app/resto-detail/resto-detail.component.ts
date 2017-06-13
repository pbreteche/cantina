import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../model/restaurant';
import {RestaurantList} from '../model/restaurantList';

@Component({
  selector: 'app-resto-detail',
  templateUrl: './resto-detail.component.html',
  styleUrls: ['./resto-detail.component.css']
})
export class RestoDetailComponent implements OnInit {

  activeRestaurant: Restaurant;

  constructor() {
    this.activeRestaurant = (new RestaurantList()).data[0];
  }
  ngOnInit() {
  }

}
