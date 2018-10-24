import { Component, OnInit, Input } from '@angular/core';
import { MacrosPlan } from '../../classes/MacrosPlan';
import { Meal } from '../../classes/Meal';
import { NutritionService } from '../../services/nutrition.service';
import { TotalMacronutrients } from '../../classes/TotalMacronutrients';
import { MacroComparison } from '../../classes/MacroComparison';

@Component({
  selector: 'nutrition-analysis',
  templateUrl: './nutrition-analysis.component.html',
  styleUrls: ['./nutrition-analysis.component.scss']
})
export class NutritionAnalysisComponent implements OnInit {
  @Input() desiredMacrosPlan: MacrosPlan;
  totalCarbs = 0;
  totalMacros: TotalMacronutrients = new TotalMacronutrients();

  carbsInfo: MacroComparison;
  netCarbsInfo: MacroComparison;
  fatsInfo: MacroComparison;
  proteinsInfo: MacroComparison;

  constructor(private nutritionSerice: NutritionService) { }

  ngOnInit() {
  }

  // change the return value of this function
  getNutritionInfoForMeal(meal: Meal): any {
    const query = {
      title: meal.title,
      yield: meal.servings + ' servings',
      ingr: meal.ingrs
    };

    this.nutritionSerice.getNutrition(query).subscribe(
      mealInfo => {
        this.totalCarbs += mealInfo.carbohydrates;
        this.totalMacros.carbs += mealInfo.carbohydrates;
        this.totalMacros.netCarbs += mealInfo.netCarbohydrates;
        this.totalMacros.fats += mealInfo.fats;
        this.totalMacros.proteins += mealInfo.proteins;
        this.totalMacros.calculatePercentages();
        this.fillComparisonInfo();
        return mealInfo;
      },
      err => {
        return false;
      }
    );

  }

    fillComparisonInfo() {
      this.carbsInfo = new MacroComparison('Carbohydrates',
       this.desiredMacrosPlan.unitOfMeasurement, this.desiredMacrosPlan.carbs, this.totalMacros.carbs);

       this.netCarbsInfo = new MacroComparison('Net carbohydrates',
       this.desiredMacrosPlan.unitOfMeasurement, this.desiredMacrosPlan.carbs, this.totalMacros.netCarbs);

       this.fatsInfo = new MacroComparison('Fats',
       this.desiredMacrosPlan.unitOfMeasurement, this.desiredMacrosPlan.fats, this.totalMacros.fats);

       this.proteinsInfo = new MacroComparison('Proteins',
       this.desiredMacrosPlan.unitOfMeasurement, this.desiredMacrosPlan.proteins, this.totalMacros.proteins);
    }

}
