export class RandomFood {
    name:string;
    id:string;
    category:string;
    ingredients:string[];
    measurements:string[];
    instructions:string;
    imageURL:string;
    source:string;
    area:string;
    youtubeURL:any;

    constructor(object:any){
        this.name = object.strMeal;
        this.id = object.idMeal;
        this.category = object.strCategory;
        this.ingredients = [];
        this.measurements = [];

        Object.keys(object).forEach((element) => {
          if (element.includes("strIngredient") && !(object[element] === "") && !(object[element] === null)) {
            this.ingredients.push(object[element]);
          }
          if (element.includes("strMeasure") && !(object[element] === "") && !(object[element] === null)) {
            this.measurements.push(object[element]);
          }
        })

        this.instructions = object.strInstructions;
        this.imageURL = object.strMealThumb;
        this.source = object.strSource;
        this.area = object.strArea;
        this.youtubeURL = object.strYoutube;
    }
}
