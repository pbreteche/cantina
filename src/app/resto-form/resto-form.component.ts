import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Restaurant} from '../model/restaurant';
import {Agencies} from '../model/agencies';

@Component({
  selector: 'app-resto-form',
  templateUrl: './resto-form.component.html',
  styleUrls: ['./resto-form.component.css']
})
export class RestoFormComponent {

  newRestaurant = new Restaurant();
  cities: string[];
  newDish = '';

  constructor() {
    let agenciesData = Object.keys(Agencies).map(k => Agencies[k]);
    this.cities = agenciesData.filter(v => typeof v === "string") as string[];
  }

  @Output()
  restaurantCreated = new EventEmitter<Restaurant>();

  createRestaurant() {
    this.restaurantCreated.emit(this.newRestaurant);
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
