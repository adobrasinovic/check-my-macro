import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'macro-form',
  templateUrl: './macro-form.component.html',
  styleUrls: ['./macro-form.component.scss']
})
export class MacroFormComponent implements OnInit {
  macroForm: FormGroup;

  macroSelected: boolean = false;
  // values contain saved macro values and unit
  selectedCarbsValue: number;
  selectedProteinsValue: number;
  selectedFatsValue: number;
  selectedUnitOfMeasurement: string;
  
  yourMacroString: string;

  unitOfMeasurement: string = '%';

  // importing FormBuilder through dependecy injection
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createMacroForm();
  }

  changeUnitOfMeasurement(value: string) {
    this.unitOfMeasurement = value;
  }

  saveCurrentMacro() {

    const macroFormValue = this.macroForm.getRawValue();

    this.macroSelected = true;
    this.selectedCarbsValue = macroFormValue.carbs;
    this.selectedFatsValue = macroFormValue.fats;
    this.selectedProteinsValue = macroFormValue.proteins;
    this.selectedUnitOfMeasurement = this.unitOfMeasurement;

    this.formMacroString();

  }

  private formMacroString() {
    const unit = this.selectedUnitOfMeasurement;
    let carbsString, fatsString, proteinsString;

    if (this.selectedCarbsValue) {
      carbsString = ' Carbohydrates: ' + this.selectedCarbsValue + unit;
    }

    if (this.selectedFatsValue) {
      fatsString = ' Fats: ' + this.selectedFatsValue + unit;
    }

    if (this.selectedCarbsValue) {
      proteinsString = ' Proteins: ' + this.selectedProteinsValue + unit;
    }

    this.yourMacroString = ':' + carbsString + fatsString + proteinsString;
  }

  private createMacroForm() {
    this.macroForm = this.fb.group({
      carbs: [null, Validators.min(0)],
      proteins: [null, Validators.min(0)],
      fats: [null, Validators.min(0)]
    }, {
      validator: this.percentageSumValidator.bind(this)
    });
  }

   percentageSumValidator(form: FormGroup) {

    console.log(form.validator);
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
