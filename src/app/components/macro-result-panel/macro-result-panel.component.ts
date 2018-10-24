import { Component, OnInit, Input } from '@angular/core';
import { MacroComparison } from '../../classes/MacroComparison';

@Component({
  selector: 'macro-result-panel',
  templateUrl: './macro-result-panel.component.html',
  styleUrls: ['./macro-result-panel.component.scss']
})
export class MacroResultPanelComponent implements OnInit {
  @Input() info: MacroComparison;

  constructor() { }

  ngOnInit() {
  }

}
