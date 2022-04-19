import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { RestaurantService } from 'src/app/components/restaurant/restaurant.service';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
})
export class RestaurantDetailComponent implements OnInit {
  id!: number;
  restaurantInfo!: Restaurant;
  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getRestaurantInfo();
  }

  getRestaurantInfo() {
    this.restaurantService
      .getRestaurant(this.id)
      .pipe(take(1))
      .subscribe((res) => {
        this.restaurantInfo = res;
        this.profileForm.setValue({
          name: this.restaurantInfo.name,
          address: this.restaurantInfo.address,
        });
      });
  }

  onSubmit() {
    this.restaurantService
      .updateRestaurant(this.id, {
        id: this.id,
        name: this.profileForm.value.name,
        address: this.profileForm.value.address,
      })
      .subscribe((res) => console.log(res));
  }
}
