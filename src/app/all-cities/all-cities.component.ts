import { Component, OnInit } from '@angular/core';
import { ApiMapppingService } from '../service/api-mappping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.scss']
})
export class AllCitiesComponent implements OnInit {

  constructor(public api: ApiMapppingService, public router: Router) { }
  allCities: String[] = ['paris', 'london', 'rome', 'munich', 'dublin']
  cityWeatherDtl = [];
  finalRes = [];

  ngOnInit(): void {
    this.getAllCitiesData()
  }

  getAllCitiesData() {
    this.allCities.forEach(data => {
      this.api.getCitiesCurrentWeather({ q: data, appid: this.api.apiKey }).subscribe(data => {
        console.log(this.finalRes);
        this.cityWeatherDtl.push({
          city: data['name'],
          temp: (data['main'].temp / 10).toFixed(0),
          sunrise: new Date(data['sys'].sunrise).toLocaleTimeString(),
          sunset: new Date(data['sys'].sunset).toLocaleTimeString(),
          date: new Date().toDateString()
        })
      })
    });
  }
  getDetails(city) {
    this.router.navigate(['cities', city.city]);
  }
}
