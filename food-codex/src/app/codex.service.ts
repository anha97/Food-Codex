import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RandomFood } from 'src/app/data/random-food';

@Injectable({
  providedIn: 'root'
})
export class CodexService {
  randMeal:string = "https://www.themealdb.com/api/json/v1/1/random.php";

  constructor(private http:HttpClient) { }

  private sendRequest():Promise<any> {
    let promise = this.http.get(this.randMeal).toPromise();
    return Promise.resolve(promise); 
  }

  private sendFilter(category:string):Promise<any> {
    let promise = this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category).toPromise();
    return Promise.resolve(promise);
  }

  private sendId(id:string):Promise<any>{
    let promise = this.http.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id).toPromise();
    return Promise.resolve(promise);
  }

  fetchFilter(category:string){
    return this.sendFilter(category).then((response) => {
      return response['meals'];
    })
  }

  fetchID(id:string){
    return this.sendId(id).then((response) => {
      return new RandomFood(response['meals'][0]);
    })
  }

  fetchRandom(){
    return this.sendRequest().then((response) => {
      //return new RandomFood(response.meals[0]);
      return new RandomFood(response['meals'][0]);
    });
  }
}
