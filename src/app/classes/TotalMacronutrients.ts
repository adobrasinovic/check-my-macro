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
        if (sum === 0) {
            this.carbsPercent = 0;
            this.netCarbsPercent = 0;
            this.fatsPercent = 0;
            this.proteinsPercent = 0;
        } else {
            this.carbsPercent = this.carbs / sum * 100;
            this.netCarbsPercent = this.netCarbs / sum * 100;
            this.fatsPercent = this.fats / sum * 100;
            this.proteinsPercent = this.proteins / sum * 100;
        }
    }
}
