import {Injectable, Inject} from '@angular/core';
import {RESTAURANT_DATA} from '../fixtures/restaurant-data';

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
}

export class RestaurantListBis extends RestaurantList{}
