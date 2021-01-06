import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMapppingService {

  baseUrl = "http://api.openweathermap.org/data/2.5"
  constructor(public http: HttpClient) { }
  public apiKey = '413913965c928c7b3da44d44e432ab91';

  getCitiesCurrentWeather(data) {
    return this.http.get(this.baseUrl + '/weather', { params: data });
  }
  getMoreDayWeater(data){
    return this.http.get(this.baseUrl + '/forecast', { params: data });
  }
}
