import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RandomFood } from 'src/app/data/random-food';

@Injectable({
  providedIn: 'root'
})
export class CodexService {
  randMeal:string = "https://www.themealdb.com/api/json/v1/1/random.php";

  constructor(private http:HttpClient) { }

  fetchRandom(){
    return this.http.get(this.randMeal).toPromise().then((response) => {
      console.log(response);
      return new RandomFood(response.meals[0]);
    });
  }
}
