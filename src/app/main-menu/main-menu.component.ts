import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {RestaurantList} from '../model/restaurantList';
import {Restaurant} from '../model/restaurant';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Input()
  menuList: RestaurantList;
  @Output()
  restaurantSelection = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  select(restaurant: Restaurant) {
    this.restaurantSelection.emit(restaurant);
  }
}
