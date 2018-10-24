export class TotalMacronutrients {
    carbs: number = 0;
    netCarbs: number = 0;
    fats: number = 0;
    proteins: number = 0;
    carbsPercent: number;
    netCarbsPercent: number;
    fatsPercent: number;
    proteinsPercent: number;

    calculatePercentages() {
        const sum = this.carbs + this.fats + this.proteins;
        this.carbsPercent = this.carbs / sum;
        this.netCarbsPercent = this.netCarbs / sum;
        this.fatsPercent = this.fats / sum;
        this.proteinsPercent = this.proteins / sum;
    }
}
