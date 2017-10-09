import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
recipeSelected=new EventEmitter<Recipe>();

private recipes:Recipe[]=[
  new Recipe("new Recipe","testing recipe all over","https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg"),
  new Recipe("Second Recipe"," Second testing recipe all over","https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg")
];

getRecipes(){
  return this.recipes.slice();
}
}
