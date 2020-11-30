import { Component, OnInit } from '@angular/core';
import { RandomFood } from 'src/app/data/random-food';
import { CodexService } from '../codex.service';

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {
  foods:RandomFood[] = [];

  constructor(private codex:CodexService) { }

  ngOnInit(): void {
    this.getRandom();
  }

  getRandom() {
    for(var i = 0; i < 20; i++){
      this.codex.fetchRandom().then((response) => {
        console.log(response);
        this.foods.push(response);
      });
    }
  }

}
