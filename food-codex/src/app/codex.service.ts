import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RandomFood } from 'src/app/data/random-food';

@Injectable({
  providedIn: 'root'
})
export class CodexService {

  constructor(private http:HttpClient) { }

  // Make request to get a random food
  private sendRandom():Promise<any> {
    let promise = this.http.get("https://www.themealdb.com/api/json/v1/1/random.php").toPromise();
    return Promise.resolve(promise); 
  }

  // Make request to filter food by category
  private sendFilter(category:string):Promise<any> {
    let promise = this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category).toPromise();
    return Promise.resolve(promise);
  }

  // Make request to lookup food by id
  private sendId(id:string):Promise<any>{
    let promise = this.http.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id).toPromise();
    return Promise.resolve(promise);
  }

  // Get foods under a filtered category
  fetchFilter(category:string){
    return this.sendFilter(category).then((response) => {
      return response['meals'];
    })
  }

  // Get food that matches an id
  fetchID(id:string){
    return this.sendId(id).then((response) => {
      return new RandomFood(response['meals'][0]);
    })
  }

  // Get a random food
  fetchRandom(){
    return this.sendRandom().then((response) => {
      return new RandomFood(response['meals'][0]);
    });
  }
}
