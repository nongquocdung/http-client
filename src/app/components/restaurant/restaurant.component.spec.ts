import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurant } from 'src/app/models/restaurant';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantService } from './restaurant.service';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let restaurantService: any;
  let fixture: ComponentFixture<RestaurantComponent>;
  const restaurant: Restaurant = {
    id: 1,
    name: 'Tokyo',
    address: '123 CH',
  };
  beforeEach(async () => {
    restaurantService = jasmine.createSpyObj(['deleteRestaurant']);
    restaurantService.deleteRestaurant.and.returnValue(restaurant);
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RestaurantComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should disappear', () => {
  //   restaurantService.deleteRestaurant.and.returnValue(restaurant);
  //   expect(component.exist).withContext('true at first').toBe(true);
  //   // component.deleteRestaurant();
  //   // expect(component.exist).withContext('false after delete').toBe(false);
  // });
});
