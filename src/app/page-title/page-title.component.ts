import { Component, OnInit } from '@angular/core';
import {RestaurantList} from '../model/restaurantList';
import {Restaurant} from '../model/restaurant';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  activeRestaurant: Restaurant;

  constructor() {
    this.activeRestaurant = (new RestaurantList()).data[0];
  }


  ngOnInit() {
  }

}
