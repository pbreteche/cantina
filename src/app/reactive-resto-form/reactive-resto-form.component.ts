import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Restaurant} from '../model/restaurant';

@Component({
  selector: 'app-reactive-resto-form',
  templateUrl: './reactive-resto-form.component.html',
  styleUrls: ['./reactive-resto-form.component.css']
})
export class ReactiveRestoFormComponent implements OnInit {
  private restoForm: FormGroup;
  @Output()
  restaurantCreated = new EventEmitter<Restaurant>();

  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.restoForm = new FormGroup({
      name: new FormControl('Oh mon restooOOooo', Validators.required),
      address: new FormControl('', Validators.pattern('[a-zA-Z0-9_-]+'))
    });
  }

  createRestaurant() {
    let formData = this.restoForm.value;
    let newResto = new Restaurant();
    Object.assign(newResto, formData);
    this.restaurantCreated.emit(newResto);
    this.restoForm.reset();
  }

}
