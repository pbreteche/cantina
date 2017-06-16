import { TestBed, inject } from '@angular/core/testing';

import { RestaurantStoreService } from './restaurant-store.service';

describe('RestaurantStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantStoreService]
    });
  });

  it('should be created', inject([RestaurantStoreService], (service: RestaurantStoreService) => {
    expect(service).toBeTruthy();
  }));
});
