import {Component, OnInit, Input} from '@angular/core';
import {Restaurant} from '../model/restaurant';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  @Input()
  activeRestaurant: Restaurant;

  constructor() {
  }

  ngOnInit() {
  }

}
