export class NutritionResponse {
    carbohydrates: number;
    netCarbohydrates: number;
    fats: number;
    proteins: number;

    // this constructor take a json response from EDAMAM api and converts it to ts class object
    // we calculate ammount of macronutrients per serving and relative percentages of macro nutrients here
    constructor(JSONNutritionResponse: any) {
        console.log(JSONNutritionResponse);
       const nutritionInfo = JSONNutritionResponse.totalNutrients;
       const servings = JSONNutritionResponse.yield;

        this.carbohydrates = nutritionInfo.CHOCDF.quantity / servings;
        if (nutritionInfo.FIBTG) {
            this.netCarbohydrates = (nutritionInfo.CHOCDF.quantity - nutritionInfo.FIBTG.quantity) / servings;
        } else {
            this.netCarbohydrates = nutritionInfo.CHOCDF.quantity / servings;
        }
        this.fats = nutritionInfo.FAT.quantity / servings;
        this.proteins = nutritionInfo.PROCNT.quantity / servings;


    }
}
