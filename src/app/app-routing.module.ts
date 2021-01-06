import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {path:'',redirectTo:'allCities',pathMatch:'full'},
  { path: 'allCities', component: AllCitiesComponent },
  { path: 'cities/:city', component: CitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
