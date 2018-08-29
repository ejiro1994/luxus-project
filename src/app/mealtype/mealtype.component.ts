import { Component, OnInit } from '@angular/core';
import bulmaCarousel from '../../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js';

@Component({
  selector: 'app-mealtype',
  templateUrl: './mealtype.component.html',
  styleUrls: ['./mealtype.component.css']
})
export class MealtypeComponent implements OnInit {

  constructor() { }
  
  hideLunchAndSalads = true;
  hideRecipes = true;

  ngOnInit() {
    var carousels = bulmaCarousel.attach();
  }

  toggleLunchAndSalads() {
    this.hideLunchAndSalads = !this.hideLunchAndSalads;
    this.hideRecipes = true;
  }

  toggleRecipes() {
    this.hideRecipes = !this.hideRecipes;
  }
}
