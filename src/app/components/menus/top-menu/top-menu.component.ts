import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menus-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  @Output() toggle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.toggle.emit('toggle');
  }

}
