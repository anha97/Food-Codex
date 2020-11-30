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
        this.name = object.strMeal;
        this.id = object.idMeal;
        this.category = object.strCategory;
        this.ingredient = [];
        this.measure = [];
        // for(var i = 0; i < 20; i++){ // Not sure how to loop this...
        //     this.ingredient.push(object.strIngredient1);
        // }

        // StrIngredient
        if(object.strIngredient1 !== "" || object.strIngredient1 !== null){
            this.ingredient.push(object.strIngredient1);
        }
        if(object.strIngredient2 !== "" || object.strIngredient2 !== null){
            this.ingredient.push(object.strIngredient2);
        }
        if(object.strIngredient3 !== "" || object.strIngredient3 !== null){
            this.ingredient.push(object.strIngredient3);
        }
        if(object.strIngredient4 !== "" || object.strIngredient4 !== null){
            this.ingredient.push(object.strIngredient4);
        }
        if(object.strIngredient5 !== "" || object.strIngredient5 !== null){
            this.ingredient.push(object.strIngredient5);
        }
        if(object.strIngredient6 !== "" || object.strIngredient6 !== null){
            this.ingredient.push(object.strIngredient6);
        }
        if(object.strIngredient7 !== "" || object.strIngredient7 !== null){
            this.ingredient.push(object.strIngredient7);
        }
        if(object.strIngredient8 !== "" || object.strIngredient8 !== null){
            this.ingredient.push(object.strIngredient8);
        }
        if(object.strIngredient9 !== "" || object.strIngredient9 !== null){
            this.ingredient.push(object.strIngredient9);
        }
        if(object.strIngredient10 !== "" || object.strIngredient10 !== null){
            this.ingredient.push(object.strIngredient10);
        }
        if(object.strIngredient11 !== "" || object.strIngredient11 !== null){
            this.ingredient.push(object.strIngredient11);
        }
        if(object.strIngredient12 !== "" || object.strIngredient12 !== null){
            this.ingredient.push(object.strIngredient12);
        }
        if(object.strIngredient13 !== "" || object.strIngredient13 !== null){
            this.ingredient.push(object.strIngredient13);
        }
        if(object.strIngredient14 !== "" || object.strIngredient14 !== null){
            this.ingredient.push(object.strIngredient14);
        }
        if(object.strIngredient15 !== "" || object.strIngredient15 !== null){
            this.ingredient.push(object.strIngredient15);
        }
        if(object.strIngredient16 !== "" || object.strIngredient16 !== null){
            this.ingredient.push(object.strIngredient16);
        }
        if(object.strIngredient17 !== "" || object.strIngredient17 !== null){
            this.ingredient.push(object.strIngredient17);
        }
        if(object.strIngredient18 !== "" || object.strIngredient18 !== null){
            this.ingredient.push(object.strIngredient18);
        }
        if(object.strIngredient19 !== "" || object.strIngredient19 !== null){
            this.ingredient.push(object.strIngredient19);
        }
        if(object.strIngredient20 !== "" || object.strIngredient20 !== null){
            this.ingredient.push(object.strIngredient20);
        }

        //StrMeasure
        if(object.strMeasure1 !== "" || object.strMeasure1 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure2 !== "" || object.strMeasure2 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure3 !== "" || object.strMeasure3 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure4 !== "" || object.strMeasure4 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure5 !== "" || object.strMeasure5 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure6 !== "" || object.strMeasure6 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure7 !== "" || object.strMeasure7 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure8 !== "" || object.strMeasure8 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure9 !== "" || object.strMeasure9 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure10 !== "" || object.strMeasure10 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure11 !== "" || object.strMeasure11 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure12 !== "" || object.strMeasure12 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure13 !== "" || object.strMeasure13 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure14 !== "" || object.strMeasure14 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure15 !== "" || object.strMeasure15 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure16 !== "" || object.strMeasure16 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure17 !== "" || object.strMeasure17 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure18 !== "" || object.strMeasure18 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure19 !== "" || object.strMeasure19 !== null){
            this.ingredient.push(object.strMeasure1);
        }
        if(object.strMeasure20 !== "" || object.strMeasure20 !== null){
            this.ingredient.push(object.strMeasure1);
        }

        // There are measurements for each ingredients. It's up to you guys if you want to add them. <-- ya

        this.instruction = object.strInstructions;
        this.imageURL = object.strMealThumb;
        this.source = object.strSource;
        this.nationality = object.strArea;
    }
}
