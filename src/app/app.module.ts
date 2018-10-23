import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {SuiModule} from 'ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/menus/top-menu/top-menu.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { MacroFormComponent } from './components/macro-form/macro-form.component';

import { NutritionService } from './services/nutrition.service';
import { MealPlanFormComponent } from './components/meal-plan-form/meal-plan-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    HomeComponent,
    MacroFormComponent,
    MealPlanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NutritionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
