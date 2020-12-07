import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RandomFood } from 'src/app/data/random-food';

@Component({
  selector: 'app-random-meal-card',
  templateUrl: './random-meal-card.component.html',
  styleUrls: ['./random-meal-card.component.css']
})
export class RandomMealCardComponent implements OnInit {
  @Input() food!: RandomFood;
  @Output() childFood = new EventEmitter();
  selectedFood?:RandomFood;

  constructor() { }

  ngOnInit() {
  }

  EventForFood(event:any){
    // console.log('Button clicked!');
    this.selectedFood = event;
    // console.log(this.selectedFood);
    this.childFood.emit(this.selectedFood);
  }

}
