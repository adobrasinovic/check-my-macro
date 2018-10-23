import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NutritionConfig } from '../classes/nutritionConfig';
import { NutritionResponse } from '../classes/NutritionResponse';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  baseUrl: string;
  otherUrl: string;
  header: HttpHeaders;
  constructor(private http: HttpClient) {
    const config: NutritionConfig = new NutritionConfig();
    this.baseUrl = config.url;
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  convertJSONtoNutritionInfo(response: object) {
    return new NutritionResponse(response);
  }

  getNutrition(query: object): Observable<NutritionResponse> {
    const url  = this.baseUrl;

    return this.http.post<any[]>(url, query).pipe(map(
      (results) => this.convertJSONtoNutritionInfo(results))
    );
  }

  // getNutritionForFood() {
  //   console.log(this.otherUrl);
  //   return this.http.get<any[]>(this.otherUrl);
  // }
}
