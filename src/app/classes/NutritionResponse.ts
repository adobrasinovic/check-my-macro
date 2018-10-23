export class NutritionResponse {
    carbohydrates: number;
    netCarbohydrates: number;
    fats: number;
    proteins: number;
    carbsPercentage: number;
    fatsPercentage: number;
    proteinsPercentage: number;

    // this constructor take a json response from EDAMAM api and converts it to ts class object
    // we calculate ammount of macronutrients per serving and relative percentages of macro nutrients here
    constructor(JSONNutritionResponse: any) {
        console.log(JSONNutritionResponse);
       const nutritionInfo = JSONNutritionResponse.totalNutrients;
       const servings = JSONNutritionResponse.yield;

        this.carbohydrates = nutritionInfo.CHOCDF.quantity / servings;
        this.netCarbohydrates = (nutritionInfo.CHOCDF.quantity - nutritionInfo.FIBTG.quantity) / servings;
        this.fats = nutritionInfo.FAT.quantity / servings;
        this.proteins = nutritionInfo.PROCNT.quantity / servings;

        const sum = nutritionInfo.CHOCDF.quantity + nutritionInfo.FAT.quantity + nutritionInfo.PROCNT.quantity;

        this.carbsPercentage = nutritionInfo.CHOCDF.quantity / sum;
        this.fatsPercentage = nutritionInfo.FAT.quantity / sum;
        this.proteinsPercentage = nutritionInfo.PROCNT.quantity / sum;
    }
}
