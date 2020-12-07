import { Component, OnInit, Input } from '@angular/core';
import { RandomFood } from 'src/app/data/random-food';

@Component({
  selector: 'app-random-meal-card',
  templateUrl: './random-meal-card.component.html',
  styleUrls: ['./random-meal-card.component.css']
})
export class RandomMealCardComponent implements OnInit {
  @Input() food!: RandomFood;

  constructor() { }

  ngOnInit() {
  }

}
