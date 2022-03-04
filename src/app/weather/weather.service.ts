import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CurrentWeatherResponseApiModel } from '../core/models/openweathermap/current-weather-response-api.model';
import { map, Observable, of, tap } from 'rxjs';
import { CurrentWeatherModel } from '../core/models/weather/current-weather.model';
import { environment } from '../../environments/environment';
import { DateHelper } from '../core/helpers/date.helper';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private cachedCurrentWeathers: CurrentWeatherModel[] = [];

    constructor(private http: HttpClient) {}

    private getCachedCurrentWeather(zipCode: string): CurrentWeatherModel | null {
        let cachedCurrentWeather: CurrentWeatherModel = this.cachedCurrentWeathers.find(
            (cw) => cw.city.zipCode === zipCode,
        );
        if (
            cachedCurrentWeather &&
            DateHelper.differenceInMinutes(cachedCurrentWeather.weather.datetime, new Date()) >
                environment.currentWeatherCacheInMinutes
        ) {
            cachedCurrentWeather = null;
            this.cachedCurrentWeathers = this.cachedCurrentWeathers.filter(
                (cw: CurrentWeatherModel) => cw.city.zipCode !== zipCode,
            );
        }
        return cachedCurrentWeather;
    }

    public getCurrentWeather(zipCode: string): Observable<CurrentWeatherModel> {
        let cachedCurrentWeather: CurrentWeatherModel = this.getCachedCurrentWeather(zipCode);
        if (cachedCurrentWeather) {
            return of(cachedCurrentWeather);
        }

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
                tap((cw: CurrentWeatherModel) => this.cachedCurrentWeathers.push(cw)),
            );
    }
}
