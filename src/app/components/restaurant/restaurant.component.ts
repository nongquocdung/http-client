import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  @Input('restaurant') restaurant!: Restaurant;
  exist: boolean = true;
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {}

  deleteRestaurant() {
    this.restaurantService.deleteRestaurant(this.restaurant).subscribe();
    this.exist = false;
  }
}
