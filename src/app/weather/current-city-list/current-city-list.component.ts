import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { CurrentWeatherModel } from '../../core/models/weather/current-weather.model';
import { WeatherService } from '../weather.service';
import { CityModel } from '../../core/models/weather/city.model';

@Component({
    selector: 'app-current-city-list',
    templateUrl: './current-city-list.component.html',
    styleUrls: ['./current-city-list.component.css'],
})
export class CurrentCityListComponent implements OnInit {
    public currentWeathers: CurrentWeatherModel[] = [];

    constructor(private cityService: CityService, private weatherService: WeatherService) {}

    ngOnInit(): void {
        this.cityService.getZipCodes().forEach((zipCode: string) => this.addCity(zipCode));
    }

    public addCity(zipCode: string): void {
        if (this.currentWeathers.map((cw: CurrentWeatherModel) => cw.city.zipCode).includes(zipCode)) {
            console.error('city has already been added');
            return;
        }

        this.weatherService.getCurrentWeather(zipCode).subscribe((weather: CurrentWeatherModel) => {
            this.currentWeathers.push(weather);
            this.cityService.addZipCode(zipCode);
        });
    }

    public removeCity(city: CityModel): void {
        this.cityService.removeZipCode(city.zipCode);
        this.currentWeathers = this.currentWeathers.filter((cw) => cw.city.zipCode != city.zipCode);
    }
}
