import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomMealComponent } from './random-meal/random-meal.component';
import { DisplayFoodComponent } from './display-food/display-food.component';
import { RandomMealCardComponent } from './random-meal-card/random-meal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomMealComponent,
    DisplayFoodComponent,
    RandomMealCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
