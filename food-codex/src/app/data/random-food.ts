export class RandomFood {
    name:string;
    id:string;
    category:string;
    ingredient:string[];
    measure:string[];
    instruction:string;
    imageURL:string;
    source:string;
    nationality:string;

    constructor(object:any){
      // console.log(object);
        this.name = object.strMeal;
        this.id = object.idMeal;
        this.category = object.strCategory;
        this.ingredient = [];
        this.measure = [];

        Object.keys(object).forEach((element) => {
          if (element.includes("strIngredient") && !(object[element] === "") && !(object[element] === null)) {
            this.ingredient.push(object[element]);
          }
          if (element.includes("strMeasure") && !(object[element] === "") && !(object[element] === null)) {
            this.measure.push(object[element]);
          }
        })

        this.instruction = object.strInstructions;
        this.imageURL = object.strMealThumb;
        this.source = object.strSource;
        this.nationality = object.strArea;
    }
}
