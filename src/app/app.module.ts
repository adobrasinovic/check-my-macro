import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SuiModule} from 'ng2-semantic-ui';
import { TopMenuComponent } from './components/menus/top-menu/top-menu.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
