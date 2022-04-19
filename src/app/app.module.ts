import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './pages/restaurants/restaurant-detail/restaurant-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    NavbarComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
