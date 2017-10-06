import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected=new EventEmitter<Recipe>();
recipes:Recipe[]=[
  new Recipe("new Recipe","testing recipe all over","https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg"),
  new Recipe("Second Recipe"," Second testing recipe all over","https://www.ndtv.com/cooks/images/hyderabadi%20biryani%20new.jpg")
];

onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);
}
  constructor() { }

  ngOnInit() {
  }

}
