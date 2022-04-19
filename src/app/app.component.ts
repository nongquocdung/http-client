import { Component } from '@angular/core';
import { take } from 'rxjs';
import { RestaurantService } from './components/restaurant/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'http-client';

  constructor() {}
}
