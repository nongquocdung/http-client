import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/components/restaurant/restaurant.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService
      .getRestaurants()
      .pipe(take(1))
      .subscribe((res) => (this.restaurants = res));
  }

  onSubmit() {
    if (!this.profileForm.value.name) alert('Name must not be empty');
    else {
      this.restaurantService
        .addRestaurant({
          name: this.profileForm.value.name,
          id: 0,
          address: this.profileForm.value.address,
        })
        .subscribe((restaurant) => {
          this.restaurants.push(restaurant);
        });
    }
  }
}
