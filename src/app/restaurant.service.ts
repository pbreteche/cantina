import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {RestaurantList} from './model/restaurantList';
import {Restaurant} from './model/restaurant';

@Injectable()
export class RestaurantService {

  restaurantPromise: Promise<RestaurantList>;
  restaurantList: RestaurantList;
  http: Http;

  constructor(http: Http) {
    this.http = http;
    this.restaurantList = new RestaurantList([]);
    this.restaurantPromise = this.http.get('/assets/restos.json')
      .toPromise()
      .then(response => {
        this.restaurantList = new RestaurantList(response.json().data.map(
          restoData => Object.assign(new Restaurant, restoData)
        ) as Restaurant[]);
        return this.restaurantList;
      })
      .catch();
  }

  loadRestaurants(): Promise<RestaurantList> {
    return this.restaurantPromise;
  }

  postNewOne(restaurant: Restaurant) {
    /*
    this.http.post('/index.php', restaurant)
      .toPromise()
      .then(response => {})
      */
  }

}
