import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroResultPanelComponent } from './macro-result-panel.component';

describe('MacroResultPanelComponent', () => {
  let component: MacroResultPanelComponent;
  let fixture: ComponentFixture<MacroResultPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroResultPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroResultPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
