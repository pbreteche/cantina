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
  public currentFilter: string = '';
  public currentRestaurant: Subject<Restaurant>;
  private currentId = -1;

  constructor(private http: Http) {
    this.observableStore = new Subject<RestaurantList>();
    this.currentRestaurant = new Subject<Restaurant>();
    this.data = new RestaurantList([]);
    this.restos = new RestaurantList(this.data.data);
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
        this.onChange();
      })
  }

  filter(needle: string) {
    this.currentFilter = needle;
    this.restos = new RestaurantList(this.data.searchName(needle));
    this.onChange();
  }

  add(newRestaurant: Restaurant) {
    this.data.data.push(newRestaurant);
    this.filter(this.currentFilter);
  }

  setCurrentId(id) {
    let previousId = this.currentId;
    this.currentId = id;
    if (this.currentId != previousId) {
      this.currentRestaurant.next(this.data.byId(this.currentId));
    }
  }

  onChange() {
    this.observableStore.next(this.restos);
    this.currentRestaurant.next(this.data.byId(this.currentId));
  }
}
