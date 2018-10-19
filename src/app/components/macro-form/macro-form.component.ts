import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'macro-form',
  templateUrl: './macro-form.component.html',
  styleUrls: ['./macro-form.component.scss']
})
export class MacroFormComponent implements OnInit {
  macroForm: FormGroup;

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
    // if (this.unitOfMeasurement === '%') {
    // }
  }

  createMacroForm() {
    this.macroForm = this.fb.group({
      carbs: [null],
      proteins: [null],
      fats: [null]
    });
  }

}
