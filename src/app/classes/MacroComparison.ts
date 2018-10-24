export class MacroComparison {
    name: string;
    unitOfMeasurement: string;
    goal: number;
    result: number;
    // absolute difference between result and goal
    absDiff: number;
    // percent difference between result and goal
    percentDiff: number;

    constructor(macroName: string, macroUnitOfMeasurement: string, macroGoal: number, macroResult: number) {
        this.name = macroName;
        this.unitOfMeasurement = macroUnitOfMeasurement;
        this.goal = macroGoal;
        this.result = macroResult;

        this.absDiff = this.result - this.goal;
        if (this.goal !== 0) {
        this.percentDiff = (( this.result / this.goal ) - 1) * 100;
        } else {
            this.percentDiff = 0;
        }
    }
}
