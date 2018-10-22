import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sidebarToggled = false;

  // sidebar visibility depends on sidebarToggled variable
  onToggle() {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
