import { Component, OnInit, Input } from '@angular/core';
import { MacrosPlan } from '../../classes/MacrosPlan';
import { Meal } from '../../classes/Meal';
import { NutritionService } from '../../services/nutrition.service';

@Component({
  selector: 'nutrition-analysis',
  templateUrl: './nutrition-analysis.component.html',
  styleUrls: ['./nutrition-analysis.component.scss']
})
export class NutritionAnalysisComponent implements OnInit {
  @Input() desiredMacrosPlan: MacrosPlan;

  constructor(private nutritionSerice: NutritionService) { }

  ngOnInit() {
  }

  getNutritionInfoForMeal(meal: Meal) {
    const query = {
      title: meal.title,
      yield: meal.servings + ' servings',
      ingr: meal.ingrs
    };

    this.nutritionSerice.getNutrition(query).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
