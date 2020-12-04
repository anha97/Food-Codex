import { Component, OnInit} from '@angular/core';
import { RandomFood } from '../app/data/random-food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  food?:RandomFood;

  selectedFood(selected:RandomFood){
    this.food = selected;
    console.log(this.food);
  }
}
