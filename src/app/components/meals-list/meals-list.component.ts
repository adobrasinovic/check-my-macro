import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../../classes/Meal';

@Component({
  selector: 'meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss']
})
export class MealsListComponent implements OnInit {
  @Input() mealList: Meal[];
  @Output() mealListChange: EventEmitter<Meal[]> = new EventEmitter();
  @Output() mealRemoved: EventEmitter<Meal> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeFromMealList(mealToRemove: Meal) {
    const index = this.mealList.indexOf(mealToRemove);
    if (index > -1) {
      this.mealList.splice(index, 1);
      this.mealListChange.emit(this.mealList);
      this.mealRemoved.emit(mealToRemove);
    }
  }

}
