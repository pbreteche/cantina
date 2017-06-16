import { Component, OnInit } from '@angular/core';
import {RestaurantStoreService} from '../restaurant-store.service';
import {RestaurantList} from '../model/restaurantList';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  private restos: RestaurantList;

  constructor(private store: RestaurantStoreService) {
    this.restos = this.store.getRestoList();
  }

  ngOnInit() {
    this.store.getObservable().subscribe(restoList => this.log(restoList));
  }

  private log(restoList: RestaurantList) {
    console.log('Store observed by ObservableComponent', restoList)
  }
}
