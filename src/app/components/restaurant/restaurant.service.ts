import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  uri = 'http://127.0.0.1:8080/restaurant';
  constructor(private http: HttpClient) {}
  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.uri}/restaurants`);
  }

  getRestaurant(id: number) {
    return this.http.get<Restaurant>(`${this.uri}/restaurants/${id}`);
  }

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(
      `${this.uri}/restaurants`,
      restaurant,
      httpOptions
    );
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(
      `${this.uri}/restaurants/${id}`,
      restaurant,
      httpOptions
    );
  }

  deleteRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.delete<Restaurant>(
      `${this.uri}/restaurants/${restaurant.id}`,
      httpOptions
    );
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
