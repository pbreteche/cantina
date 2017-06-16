import { TestBed, inject } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

class HttpStub {
  get(url: string) {
    return new Observable();
  }
}

describe('RestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RestaurantService,
        { provide: Http, useClass: HttpStub }
      ]
    });
  });

  it('should be created', inject([RestaurantService], (service: RestaurantService) => {
    expect(service).toBeTruthy();
  }));
});
