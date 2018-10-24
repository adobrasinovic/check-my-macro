import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { NutritionService } from '../../services/nutrition.service';
import { NutritionResponse } from '../../classes/NutritionResponse';
import { Meal } from '../../classes/Meal';

@Component({
  selector: 'meal-plan-form',
  templateUrl: './meal-plan-form.component.html',
  styleUrls: ['./meal-plan-form.component.scss']
})
export class MealPlanFormComponent implements OnInit {
  @Output() mealAdded: EventEmitter<Meal> = new EventEmitter();
  
  mealPlanForm: FormGroup;
  response: NutritionResponse;

  constructor(private fb: FormBuilder, private nutritionService: NutritionService) { }

  ngOnInit() {
    this.createMealPlanForm();
  }

  private createMealPlanForm() {
    this.mealPlanForm = this.fb.group({
      title: [null, Validators.required],
      prep: [null],
      servings: [1, Validators.required],
      ingrs: [null, Validators.required]
    });
  }

  submitMealForAnalysis() {
    const meal = new Meal(this.mealPlanForm.getRawValue());

    this.mealAdded.emit(meal);

    // after emiting the meal cleaning the form
    this.mealPlanForm.reset();
    this.createMealPlanForm();

    // const lines = recipeForm.recipe.split(/\n/);

    // const query = {
    //   title: recipeForm.title,
    //   yield: recipeForm.servings + 'servings',
    //   ingr: lines
    // };

    // this.nutritionService.getNutrition(query).subscribe(
    //   res => {
    //     this.response = res;
    //   }
    // );
  }

}
