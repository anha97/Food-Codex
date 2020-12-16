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

  // When mouse hovers over a card it displays its information on the right side of screen 
  hoverEffect(event:any){
    this.mouseOverFood.emit(event);
  }

  // When mouse hovers off a card the display on the right disappears
  hoverEffectOut(event:any){
    this.mouseOutFood.emit(event);
  }

  EventForFood(event:any){
    this.childFood.emit(event);
  }

}
