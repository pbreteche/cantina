import { Component } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Restaurant} from './model/restaurant';
import {RestaurantList} from './model/restaurantList';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestaurantService]
})
export class AppComponent {
  restaurantService: RestaurantService;
  restaurantList: RestaurantList;
  selectedRestaurant: Restaurant;

  constructor(restaurantService: RestaurantService) {
    this.restaurantList = new RestaurantList([]);
    this.restaurantService = restaurantService;
    this.restaurantService.loadRestaurants().then(
      restos => {
        this.restaurantList = restos;
        this.selectedRestaurant = this.restaurantList.data[0];
      }
    );
    this.selectedRestaurant = new Restaurant("chargement", "ça arrive...")
  }

  selectRestaurant(restaurant: Restaurant) {
    this.selectedRestaurant = restaurant;
  }

  addRestaurant(restaurant: Restaurant) {
    this.restaurantList.data.push(restaurant);
  }
}
