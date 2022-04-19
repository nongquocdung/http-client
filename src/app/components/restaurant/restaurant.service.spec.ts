import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';

import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RestaurantService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected restaurant (HttpClient called once)', (done: DoneFn) => {
    const expectedRestaurant: Restaurant = {
      id: 1,
      name: 'Tokyo',
      address: '123 Cong Hoa',
    };

    httpClientSpy.get.and.returnValue(of(expectedRestaurant));

    service.getRestaurant(1).subscribe({
      next: (restaurant) => {
        expect(restaurant)
          .withContext('expected restaurant')
          .toEqual(expectedRestaurant);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
