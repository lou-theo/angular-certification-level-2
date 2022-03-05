import { Component, OnInit } from '@angular/core';
import { CurrentWeatherModel } from '@app/core/models/weather/current-weather.model';
import { CityService } from '@app/weather/services/city.service';
import { WeatherService } from '@app/weather/services/weather.service';
import { CityModel } from '@app/core/models/weather/city.model';

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
            console.error('City has already been added');
            return;
        }

        this.weatherService.getCurrentWeather(zipCode).subscribe({
            next: (weather: CurrentWeatherModel) => {
                this.currentWeathers.push(weather);
                this.cityService.addZipCode(zipCode);
            },
            error: (error) => (error.status === 404 ? console.log("The city doesn't exist") : console.error(error)),
        });
    }

    public removeCity(city: CityModel): void {
        this.cityService.removeZipCode(city.zipCode);
        this.currentWeathers = this.currentWeathers.filter((cw) => cw.city.zipCode !== city.zipCode);
    }
}
