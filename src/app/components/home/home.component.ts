import { Component, OnInit } from '@angular/core';
import { Meal } from '../../classes/Meal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listOfMeals: Meal[] = [];

  constructor() { }

  ngOnInit() {
  }

  onMealAdded(newMeal) {
    this.listOfMeals.push(newMeal);
    console.log(this.listOfMeals);
  }

}
