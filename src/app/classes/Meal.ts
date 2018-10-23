import { NutritionResponse } from './NutritionResponse';

export class Meal {
    title: string;
    prep: string = '';
    servings: number;
    ingrs: string[];
    nutritionInfo: NutritionResponse;

    constructor(formData: any) {
        this.title = formData.title;
        this.prep = formData.prep;
        this.servings = formData.servings;
        this.ingrs = formData.ingrs.split(/\n/);
    }
}
