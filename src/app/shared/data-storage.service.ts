import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

 storeRecipes(){
   console.log("store recipes fun from data.storage service", this.recipeService.getRecipes());
    return this.http.put("https://foodapp-610f6.firebaseio.com/recipes.json", this.recipeService.getRecipes());
 };

 getRecipes(){
   this.http.get('https://foodapp-610f6.firebaseio.com/recipes.json')
   .subscribe(
     (response:Response)=>{
       const recipes:Recipe[]=response.json();
       console.log(recipes);
      this.recipeService.setRecipes(recipes);
     }
   )
 }
}
