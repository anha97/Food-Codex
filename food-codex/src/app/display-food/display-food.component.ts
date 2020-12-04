import { Component, OnInit, Input } from '@angular/core';
import { RandomFood } from 'src/app/data/random-food';

@Component({
  selector: 'app-display-food',
  templateUrl: './display-food.component.html',
  styleUrls: ['./display-food.component.css']
})
export class DisplayFoodComponent implements OnInit {
  @Input() food?:RandomFood;  // Have to make the property optional (?) in order to stop getting initialzer error...

  constructor() { }

  ngOnInit(): void {
    this.test();
  }

  test(){
    console.log(this.food);
  }

}
