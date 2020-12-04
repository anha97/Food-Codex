import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RandomFood } from 'src/app/data/random-food';
import { CodexService } from '../codex.service';

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {
  foods:RandomFood[] = [];
  rowFoods:any[] = [];  // 2D array for rows of boxes (cards for bootstrap 4)
  selectedFood?:RandomFood;
  @Output() parentFood = new EventEmitter();

  constructor(private codex:CodexService) { }

  ngOnInit(): void {
    this.getRandom();
  }

  getRandom() {
    var check = 0;
    var testFood:any = [];
    for(var i = 0; i < 20; i++){
      this.codex.fetchRandom().then((response) => {
        this.foods.push(response);
        testFood.push(response);
        check++;
        if(check == 3){
          check = 0;
          this.rowFoods.push(testFood);
          testFood = [];
        }
      });
    }
    console.log(this.rowFoods);
  }

  EventForFood(event:any){
    // console.log('Button clicked!');
    this.selectedFood = event;
    // console.log(this.selectedFood);
    this.parentFood.emit(this.selectedFood);
  }


}
