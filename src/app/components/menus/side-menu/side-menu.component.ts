import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menus-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() sidebarVisibility: Boolean;
  @Output() sidebarVisibilityChange: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  visibilityChanged(event) {
    this.sidebarVisibilityChange.next(event);
  }

}
