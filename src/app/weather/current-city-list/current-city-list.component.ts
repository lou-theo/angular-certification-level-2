import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { CurrentWeatherModel } from '../../core/models/weather/current-weather.model';
import { WeatherService } from '../weather.service';

@Component({
    selector: 'app-current-city-list',
    templateUrl: './current-city-list.component.html',
    styleUrls: ['./current-city-list.component.css'],
})
export class CurrentCityListComponent implements OnInit {
    public currentWeathers: CurrentWeatherModel[] = [];

    constructor(private cityService: CityService, private weatherService: WeatherService) {}

    ngOnInit(): void {}

    public addCity(zipCode: string): void {
        this.weatherService.getCurrentWeather(zipCode).subscribe((weather: CurrentWeatherModel) => this.currentWeathers.push(weather));
    }
}
