import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {SuiModule} from 'ng2-semantic-ui';
import { CountUpModule } from 'countup.js-angular2';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/menus/top-menu/top-menu.component';
import { SideMenuComponent } from './components/menus/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { MacroFormComponent } from './components/macro-form/macro-form.component';

import { NutritionService } from './services/nutrition.service';
import { MealPlanFormComponent } from './components/meal-plan-form/meal-plan-form.component';
import { MealsListComponent } from './components/meals-list/meals-list.component';
import { NutritionAnalysisComponent } from './components/nutrition-analysis/nutrition-analysis.component';
import { MacroResultPanelComponent } from './components/macro-result-panel/macro-result-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    HomeComponent,
    MacroFormComponent,
    MealPlanFormComponent,
    MealsListComponent,
    NutritionAnalysisComponent,
    MacroResultPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountUpModule
  ],
  providers: [
    NutritionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
