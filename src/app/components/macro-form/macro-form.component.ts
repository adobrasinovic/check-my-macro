import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MacrosPlan } from '../../classes/MacrosPlan';

@Component({
  selector: 'macro-form',
  templateUrl: './macro-form.component.html',
  styleUrls: ['./macro-form.component.scss']
})
export class MacroFormComponent implements OnInit {
  @Output() macrosPlanSet: EventEmitter<MacrosPlan> = new EventEmitter();

  macrosForm: FormGroup;
  macrosSelected: boolean = false;
  // values contain saved macro values and unit
  selectedMacrosPlan: MacrosPlan;
  selectedUnitOfMeasurement: string;
  yourMacrosString: string;

  // we measure macros either in percentage or in max grams intake
  unitOfMeasurement: string = '%';

  // importing FormBuilder through dependecy injection
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createMacrosForm();
  }

  changeUnitOfMeasurement(value: string) {
    this.unitOfMeasurement = value;
  }

  // onformsubmit this function is called
  saveCurrentMacros() {

    const macrosFormValue = this.macrosForm.getRawValue();
    this.selectedMacrosPlan = {
      carbs: macrosFormValue.carbs,
      fats: macrosFormValue.fats,
      proteins: macrosFormValue.proteins,
      unitOfMeasurement: this.unitOfMeasurement
    };

    this.macrosSelected = true;
    this.selectedUnitOfMeasurement = this.unitOfMeasurement;

    this.macrosPlanSet.emit(this.selectedMacrosPlan);

    this.formMacrosString();

  }

  // presenting selected macros to the user as string
  private formMacrosString() {
    const unit = this.selectedUnitOfMeasurement;
    let carbsString, fatsString, proteinsString;
    const carbs = this.selectedMacrosPlan.carbs;
    const fats = this.selectedMacrosPlan.fats;
    const proteins = this.selectedMacrosPlan.proteins;

    if (carbs) {
      carbsString = ' Carbohydrates: ' + carbs + unit;
    }

    if (fats) {
      fatsString = ' Fats: ' + fats + unit;
    }

    if (proteins) {
      proteinsString = ' Proteins: ' + proteins + unit;
    }

    this.yourMacrosString = ':' + carbsString + fatsString + proteinsString;
  }

  private createMacrosForm() {
    this.macrosForm = this.fb.group({
      carbs: [null, Validators.min(0)],
      proteins: [null, Validators.min(0)],
      fats: [null, Validators.min(0)]
    }, {
      validator: this.percentageSumValidator.bind(this)
    });
  }

  // custom validator to check if percentage sum is 100, can be moved to separate component
   percentageSumValidator(form: FormGroup) {

    if (this.unitOfMeasurement === 'g') {
      return null;
    }

    const sum = form.controls.carbs.value + form.controls.proteins.value  + form.controls.fats.value;

    if ( sum === 100) {
      return null;
    }

    return {
      currentSum: sum
    };

  }

}
