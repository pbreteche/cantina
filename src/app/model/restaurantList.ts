import {Injectable, Inject} from '@angular/core';
import {RESTAURANT_DATA} from '../fixtures/restaurant-data';
import {Restaurant} from './restaurant';

@Injectable()
export class RestaurantList {

  constructor(@Inject(RESTAURANT_DATA)public data) {
  }

  searchName(needle: string) {
    return this.data.filter(
      resto =>
        resto.name.toLowerCase().indexOf(needle.toLowerCase()) > -1
    );
  }

  byId(id: number) {
    console.log('Find id in collection', id, this);
    for (let datum of this.data) {
      if (datum.id == id) {
        console.log('FOUND!');
        return datum;
      }
    }
    return new Restaurant('Restaurant inexistant', 'triangle des bermudes');
  }
}

export class RestaurantListBis extends RestaurantList{}
