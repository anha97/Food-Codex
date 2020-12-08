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
  @Output() mouseOutFood = new EventEmitter();
  @Output() mouseOverFood = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hoverEffect(event:any){
    this.mouseOverFood.emit(event);
  }

  hoverEffectOut(event:any){
    this.mouseOutFood.emit(event);
  }

  EventForFood(event:any){
    this.childFood.emit(event);
  }

}
