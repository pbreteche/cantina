import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Restaurant} from '../model/restaurant';
import {Agencies} from '../model/agencies';
import {RestaurantStoreService} from '../restaurant-store.service';

@Component({
  selector: 'app-resto-form',
  templateUrl: './resto-form.component.html',
  styleUrls: ['./resto-form.component.css']
})
export class RestoFormComponent {

  newRestaurant = new Restaurant();
  cities: string[];
  newDish = '';

  constructor(private restaurantStore: RestaurantStoreService) {
    let agenciesData = Object.keys(Agencies).map(k => Agencies[k]);
    this.cities = agenciesData.filter(v => typeof v === "string") as string[];
  }

  createRestaurant() {
    this.restaurantStore.add(this.newRestaurant);
    this.newRestaurant = new Restaurant();
  }

  addDish() {
    this.newRestaurant.dishes.push(this.newDish);
    this.newDish = '';
  }


  trackDishes(index: number, dish: string) {
    return index;
  }
}
