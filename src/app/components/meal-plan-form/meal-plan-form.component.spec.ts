import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanFormComponent } from './meal-plan-form.component';

describe('MealPlanFormComponent', () => {
  let component: MealPlanFormComponent;
  let fixture: ComponentFixture<MealPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
