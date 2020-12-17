import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RandomFood } from 'src/app/data/random-food';
import { CodexService } from '../codex.service';

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {
  rowFoods:any[] = [];  // 2D array for rows of boxes (cards for bootstrap 4)
  selectedFood?:RandomFood;
  
  // SO MANY FOOD CATEGORIES!!!
  category:string[] = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian", "Breakfast", "Goat"]
  
  beefRow:any[] = [];
  chickenRow:any[] = [];
  dessertRow:any[] = [];
  lambRow:any[] = [];
  miscellaneousRow:any[] = [];
  pastaRow:any[] = [];
  porkRow:any[] = [];
  seafoodRow:any[] = [];
  sideRow:any[] = [];
  starterRow:any[] = [];
  veganRow:any[] = [];
  vegetarianRow:any[] = [];
  breakfastRow:any[] = [];
  goatRow:any[] = [];
  @Output() parentFood = new EventEmitter();

  constructor(private codex:CodexService) { }

  ngOnInit(): void {
    this.getRandom();
    this.getAllData();
  }

  // Assign values into the category array
  getID(response:any, row:any[], category:string){
    var check = 0;
    var colFood:any = [];
    for(var j = 0; j < response.length; j++){
      this.codex.fetchID(response[j].idMeal).then((data) => {
        colFood.push(data);
        check++;
        if(check == 4){
          // Push 4 columns per row
          check = 0;
          row.push(colFood);
          colFood = [];
        }
        // These categories have less than 4 foods...
        if(category == "Goat" || category == "Vegan"){
          if(check == 1){
            row.push(colFood);
          }
        }
      })
    }
  }

  // This is where it will acquire all foods from all categories.
  getAllData(){
    for(var i = 0; i < this.category.length; i++){
      if (this.category[i] == "Beef"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.beefRow, "Beef");
        });
      }
      else if(this.category[i] == "Chicken"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.chickenRow, "Chicken");
        });
      }
      else if(this.category[i] == "Dessert"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.dessertRow, "Dessert");
        });
      }
      else if(this.category[i] == "Lamb"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.lambRow, "Lamb");
        });
      }
      else if(this.category[i] == "Miscellaneous"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.miscellaneousRow, "Miscellaneous");
        });
      }
      else if(this.category[i] == "Pasta"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.pastaRow, "Pasta");
        });
      }
      else if(this.category[i] == "Pork"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.porkRow, "Pork");
        });
      }
      else if(this.category[i] == "Seafood"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.seafoodRow, "Seafood");
        });
      }
      else if(this.category[i] == "Side"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.sideRow, "Side");
        });
      }
      else if(this.category[i] == "Starter"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.starterRow, "Starter");
        });
      }
      else if(this.category[i] == "Vegan"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.veganRow, "Vegan");
        });
      }
      else if(this.category[i] == "Vegetarian"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.vegetarianRow, "Vegetarian");
        });
      }
      else if(this.category[i] == "Breakfast"){
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.breakfastRow, "Breakfast");
        });
      }
      else{
        this.codex.fetchFilter(this.category[i]).then((response) => {
          this.getID(response, this.goatRow, "Goat");
        });
      }
    }
  }

  // Filter foods after click event (from the tab)
  filter(category:string){
    this.rowFoods = [];
    if(category == "Beef"){
      this.rowFoods = this.beefRow;
    }
    else if(category == "Breakfast"){
      this.rowFoods = this.breakfastRow;
    }
    else if(category == "Chicken"){
      this.rowFoods = this.chickenRow;
    }
    else if(category == "Dessert"){
      this.rowFoods = this.dessertRow;
    }
    else if(category == "Goat"){
      this.rowFoods = this.goatRow;
    }
    else if(category == "Lamb"){
      this.rowFoods = this.lambRow;
    }
    else if(category == "Miscellaneous"){
      this.rowFoods = this.miscellaneousRow;
    }
    else if(category == "Pasta"){
      this.rowFoods = this.pastaRow;
    }
    else if(category == "Pork"){
      this.rowFoods = this.porkRow;
    }
    else if(category == "Seafood"){
      this.rowFoods = this.seafoodRow;
    }
    else if(category == "Side"){
      this.rowFoods = this.sideRow;
    }
    else if(category == "Starter"){
      this.rowFoods = this.starterRow;
    }
    else if(category == "Vegan"){
      this.rowFoods = this.veganRow;
    }
    else{
      this.rowFoods = this.vegetarianRow
    }
  }

  // Get 20 random foods
  getRandom() {
    var check = 0;
    var colFood:any = [];
    this.rowFoods = [];
    for(var i = 0; i < 20; i++){
      this.codex.fetchRandom().then((response) => {
        colFood.push(response);
        check++;
        if(check == 4){
          check = 0;
          this.rowFoods.push(colFood);
          colFood = [];
        }
      });
    }
  }

  // Mouse hovers over a food to trigger display on right
  mouseOverFood(event:any){
    this.parentFood.emit(event);
  }

  // Mouse hovers off a food to remove display on right
  mouseOutFood(){
    this.parentFood.emit(this.selectedFood);
  }

  EventForFood(event:any){
    this.selectedFood = event;
    this.parentFood.emit(event);
  }


}
