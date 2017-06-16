import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {RestaurantList} from '../model/restaurantList';
import {Restaurant} from '../model/restaurant';
import {RestaurantStoreService} from '../restaurant-store.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  menuList: RestaurantList;
  @Output()
  restaurantSelection = new EventEmitter();

  constructor(private restaurantStore: RestaurantStoreService) {
    this.menuList = this.restaurantStore.getRestoList();
  }

  ngOnInit() {
    this.restaurantStore.getObservable().subscribe(restoList => this.menuList = restoList);
  }

  select(restaurant: Restaurant) {
    this.restaurantSelection.emit(restaurant);
  }

  sendFilter(needle: string) {
    this.restaurantStore.filter(needle);
  }
}
