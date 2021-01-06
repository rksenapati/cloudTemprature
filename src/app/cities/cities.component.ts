import { Component, OnInit } from '@angular/core';
import { ApiMapppingService } from '../service/api-mappping.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  city: String;
  consolidatedData = [];
  constructor(public api: ApiMapppingService, public route: ActivatedRoute, public router: Router) {
    this.city = this.route.snapshot.paramMap.get('city');
  }

  ngOnInit(): void {
    this.getCityDtl()
  }
  goBack() {
    this.router.navigate(['allCities']);
  }
  getCityDtl() {
    this.api.getMoreDayWeater({ q: this.city, appid: this.api.apiKey }).subscribe((data: []) => {
      if (data?.['list'].length > 0) {
        data['list'].map(res => {
          console.log(new Date(res['dt_txt']).toLocaleTimeString().trim());
          if (new Date(res['dt_txt']).toLocaleTimeString().trim() == '9:00:00 AM') {
            this.consolidatedData.push({ temp: (res['main']['temp'] / 10).toFixed(0), date: new Date(res['dt'] * 1000).toDateString() });
          }
        })
      }

    })
  }

}
