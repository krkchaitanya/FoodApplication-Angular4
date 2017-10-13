import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
recipesChanged=new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty EggBread',
      'A super-tasty Vegbread - just awesome!',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Veg Mix',
      'What else you need to say?',
      'https://static01.nyt.com/images/2016/08/22/dining/22COOKING-KOREAN-RICE-CAKES2/22COOKING-KOREAN-RICE-CAKES2-videoSixteenByNineJumbo1600.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

 updateRecipe(index:number,newRecipe:Recipe){
   this.recipes[index]=newRecipe;
   this.recipesChanged.next(this.recipes.slice());
 }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
 }
    
}
