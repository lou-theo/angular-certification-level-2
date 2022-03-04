import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CurrentWeatherResponseApiModel } from '../core/models/openweathermap/current-weather-response-api.model';
import { map, Observable } from 'rxjs';
import { CurrentWeatherModel } from '../core/models/weather/current-weather.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(private http: HttpClient) {}

    public getCurrentWeather(zipCode: string): Observable<CurrentWeatherModel> {
        const options = { params: new HttpParams().set('zip', zipCode + ',us') };
        return this.http
            .get<CurrentWeatherResponseApiModel>(
                new URL('weather', environment.openweathermapApi.rootUrl).toString(),
                options,
            )
            .pipe(
                map(
                    (response: CurrentWeatherResponseApiModel) =>
                        ({
                            city: {
                                zipCode: zipCode,
                                name: response.name,
                            },
                            weather: {
                                temperatureMin: response.main.temp_min,
                                temperatureMax: response.main.temp_max,
                                temperature: response.main.temp,
                                condition: response.weather[0]?.main,
                                datetime: new Date(response.dt),
                            },
                        } as CurrentWeatherModel),
                ),
            );
    }
}
