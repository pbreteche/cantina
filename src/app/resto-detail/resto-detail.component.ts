import {Component, OnInit, Input} from '@angular/core';
import {Restaurant} from '../model/restaurant';

@Component({
  selector: 'app-resto-detail',
  templateUrl: './resto-detail.component.html',
  styleUrls: ['./resto-detail.component.css']
})
export class RestoDetailComponent implements OnInit {
  @Input()
  activeRestaurant: Restaurant;

  constructor() {
  }

  ngOnInit() {
  }

}
