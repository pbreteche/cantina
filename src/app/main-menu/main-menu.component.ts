import {Component, OnInit, Input} from '@angular/core';
import {RestaurantList} from '../model/restaurantList';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Input()
  menuList: RestaurantList;

  constructor() {
    this.menuList = new RestaurantList();
  }

  ngOnInit() {
  }

}
