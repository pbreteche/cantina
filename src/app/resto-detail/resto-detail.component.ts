import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Restaurant} from '../model/restaurant';
import {RestaurantStoreService} from '../restaurant-store.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-resto-detail',
  templateUrl: './resto-detail.component.html',
  styleUrls: ['./resto-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class RestoDetailComponent implements OnInit {

  activeRestaurant: Restaurant = null;
  title='';

  constructor(
    private restaurantStore: RestaurantStoreService,
    private activatedRoute: ActivatedRoute

  ) {
    this.restaurantStore.currentRestaurant.subscribe(
      resto => this.activeRestaurant = resto
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) =>
        this.restaurantStore.setCurrentId(+params['id'])
    );
  }

}
