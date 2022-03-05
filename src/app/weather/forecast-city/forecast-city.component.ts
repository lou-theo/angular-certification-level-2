import { Component, OnInit } from '@angular/core';
import { ForecastWeatherModel } from '../../core/models/weather/forecast-weather.model';
import { WeatherService } from '../weather.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, switchMap } from 'rxjs';

@Component({
    selector: 'app-forecast-city',
    templateUrl: './forecast-city.component.html',
    styleUrls: ['./forecast-city.component.css'],
})
export class ForecastCityComponent implements OnInit {
    public forecastWeather$: Observable<ForecastWeatherModel>;

    constructor(private weatherService: WeatherService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.forecastWeather$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                let selectedZipCode: string = params.get('zipCode');
                return this.weatherService.getForecastWeather(selectedZipCode);
            }),
        );
    }
}
