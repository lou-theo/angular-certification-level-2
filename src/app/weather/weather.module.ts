import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCityListComponent } from './current-city-list/current-city-list.component';
import { ForecastCityComponent } from './forecast-city/forecast-city.component';
import { CurrentCityComponent } from './current-city/current-city.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CurrentCityListComponent, ForecastCityComponent, CurrentCityComponent],
})
export class WeatherModule {}
