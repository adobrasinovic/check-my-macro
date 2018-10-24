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
  totalMacros: TotalMacronutrients = new TotalMacronutrients();

  carbsInfo: MacroComparison;
  netCarbsInfo: MacroComparison;
  fatsInfo: MacroComparison;
  proteinsInfo: MacroComparison;

  showComparison = false;

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
        this.totalMacros.carbs += mealInfo.carbohydrates;
        this.totalMacros.netCarbs += mealInfo.netCarbohydrates;
        this.totalMacros.fats += mealInfo.fats;
        this.totalMacros.proteins += mealInfo.proteins;
        this.totalMacros.calculatePercentages();
        this.fillComparisonInfo();
        meal.nutritionInfo = mealInfo;
      },
      err => {
        // write error logic later
      }
    );

  }

  fillComparisonInfo(newPlan?: MacrosPlan) {

    let plan: MacrosPlan;

    if (!this.desiredMacrosPlan && !newPlan) {
      plan = new MacrosPlan();
    } else if (newPlan) {
      plan = newPlan;
    } else {
      plan = this.desiredMacrosPlan;
    }


    this.totalMacros.calculatePercentages();
    this.showComparison = true;

    console.log(this.totalMacros);

    if (plan.unitOfMeasurement === '%') {

      this.carbsInfo = new MacroComparison('Carbs',
        plan.unitOfMeasurement, plan.carbs, this.totalMacros.carbsPercent);

      this.netCarbsInfo = new MacroComparison('Net carbs',
        plan.unitOfMeasurement, plan.carbs, this.totalMacros.netCarbsPercent);

      this.fatsInfo = new MacroComparison('Fats',
        plan.unitOfMeasurement, plan.fats, this.totalMacros.fatsPercent);

      this.proteinsInfo = new MacroComparison('Proteins',
        plan.unitOfMeasurement, plan.proteins, this.totalMacros.proteinsPercent);

    } else {

      this.carbsInfo = new MacroComparison('Carbs',
        plan.unitOfMeasurement, plan.carbs, this.totalMacros.carbs);

      this.netCarbsInfo = new MacroComparison('Net carbs',
        plan.unitOfMeasurement, plan.carbs, this.totalMacros.netCarbs);

      this.fatsInfo = new MacroComparison('Fats',
        plan.unitOfMeasurement, plan.fats, this.totalMacros.fats);

      this.proteinsInfo = new MacroComparison('Proteins',
        plan.unitOfMeasurement, plan.proteins, this.totalMacros.proteins);
    }

  }

}
