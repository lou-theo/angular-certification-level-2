import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@app/shared/shared.module";
import { WeatherRoutingModule } from "@app/weather/weather-routing.module";
import { CurrentCityListComponent } from "@app/weather/current-city-list/current-city-list.component";
import { ForecastCityComponent } from "@app/weather/forecast-city/forecast-city.component";
import { CurrentCityComponent } from "@app/weather/current-city/current-city.component";

@NgModule({
    imports: [CommonModule, WeatherRoutingModule, SharedModule],
    declarations: [CurrentCityListComponent, ForecastCityComponent, CurrentCityComponent],
})
export class WeatherModule {}
