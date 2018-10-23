import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NutritionService } from '../../services/nutrition.service';
import { NutritionResponse } from '../../classes/NutritionResponse';

@Component({
  selector: 'meal-plan-form',
  templateUrl: './meal-plan-form.component.html',
  styleUrls: ['./meal-plan-form.component.scss']
})
export class MealPlanFormComponent implements OnInit {
  mealPlanForm: FormGroup;
  response: NutritionResponse;

  constructor(private fb: FormBuilder, private nutritionService: NutritionService) { }

  ngOnInit() {
    this.createMealPlanForm();
  }

  private createMealPlanForm() {
    this.mealPlanForm = this.fb.group({
      title: [null, Validators.required],
      servings: [1, Validators.required],
      recipe: [null, Validators.required]
    });
  }

  submitRecipeForAnalysis() {
    const recipeForm = this.mealPlanForm.getRawValue();

    const lines = recipeForm.recipe.split(/\n/);

    const query = {
      title: recipeForm.title,
      yield: recipeForm.servings + 'servings',
      ingr: lines
    };

    console.log(query);

    this.nutritionService.getNutrition(query).subscribe(
      res => {
        this.response = res;
      }
    );
  }

}
