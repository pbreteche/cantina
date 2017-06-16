import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {RestaurantList} from './model/restaurantList';
import {Http} from '@angular/http';
import {Restaurant} from './model/restaurant';

@Injectable()
export class RestaurantStoreService {
  observableStore: Subject<RestaurantList>;
  private data: RestaurantList;
  public restos: RestaurantList;


  constructor(private http: Http) {
    this.observableStore = new Subject<RestaurantList>();
    this.data = new RestaurantList([]);
    this.restos = this.data;
  }

  getObservable() {
    return Observable.from(this.observableStore);
  }

  getRestoList(): RestaurantList {
    return this.restos;
  }

  init() {
    this.http.get('/assets/restos.json')
      .subscribe(response => {
        this.data = new RestaurantList(response.json().data.map(
          restoData => Object.assign(new Restaurant, restoData)
        ) as Restaurant[]);
        this.restos = this.data;
        this.observableStore.next(this.restos);
      })
  }

  filter(needle: string) {
    this.restos = new RestaurantList(this.data.searchName(needle));
    this.observableStore.next(this.restos);
  }
}
