import { Component, OnInit, ViewChild } from '@angular/core';

import { NutritionAnalysisComponent } from '../nutrition-analysis/nutrition-analysis.component';

import { Meal } from '../../classes/Meal';
import { MacrosPlan } from '../../classes/MacrosPlan';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(NutritionAnalysisComponent) private nutritionAnalysis: NutritionAnalysisComponent;
  listOfMeals: Meal[] = [];
  currentMacrosPlan: MacrosPlan;

  constructor() { }

  ngOnInit() {
  }

  onMacrosPlanAdded(newMacrosPlan: MacrosPlan) {
    this.currentMacrosPlan = newMacrosPlan;
    this.nutritionAnalysis.fillComparisonInfo(newMacrosPlan);
  }

  onMealAdded(newMeal: Meal) {
    const mealInfo =  this.nutritionAnalysis.getNutritionInfoForMeal(newMeal);
    this.listOfMeals.push(newMeal);
  }

}
