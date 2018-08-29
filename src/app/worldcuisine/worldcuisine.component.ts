import { Component, OnInit } from '@angular/core';
import bulmaCarousel from '../../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js';

@Component({
  selector: 'app-worldcuisine',
  templateUrl: './worldcuisine.component.html',
  styleUrls: ['./worldcuisine.component.css']
})
export class WorldcuisineComponent implements OnInit {

  constructor() { }

  hideWhatToCook = true;
  hideMainIngredient = true;
  hideRecipes = true;

  ngOnInit() {
    var carousels = bulmaCarousel.attach();
  }

  toggleWhatToCook() {
    this.hideWhatToCook = !this.hideWhatToCook;
    this.hideMainIngredient = true;
    this.hideRecipes = true;
  }

  toggleMainIngredient() {
    this.hideMainIngredient = !this.hideMainIngredient;
    this.hideRecipes = true;
  }

  toggleRecipes() {
    this.hideRecipes = !this.hideRecipes;
  }
}
