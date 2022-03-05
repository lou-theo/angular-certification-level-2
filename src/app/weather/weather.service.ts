import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CurrentWeatherResponseApiModel } from '../core/models/openweathermap/current-weather-response-api.model';
import { map, Observable, of, tap } from 'rxjs';
import { CurrentWeatherModel } from '../core/models/weather/current-weather.model';
import { environment } from '../../environments/environment';
import { DateHelper } from '../core/helpers/date.helper';
import { ForecastWeatherModel } from '../core/models/weather/forecast-weather.model';
import { ForecastWeatherResponseApiModel } from '../core/models/openweathermap/forecast-weather-response-api.model';

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

    public getForecastWeather(zipCode: string): Observable<ForecastWeatherModel> {
        const options = {
            params: new HttpParams().set('zip', zipCode + ',us').set('cnt', environment.numberOfForecastedDays),
        };
        return this.http
            .get<ForecastWeatherResponseApiModel>(
                new URL('forecast/daily', environment.openweathermapApi.rootUrl).toString(),
                options,
            )
            .pipe(
                map(
                    (response: ForecastWeatherResponseApiModel) =>
                        ({
                            city: {
                                zipCode: zipCode,
                                name: response.city.name,
                            },
                            weathers: response.list.map((item) => {
                                return {
                                    temperatureMin: item.temp.min,
                                    temperatureMax: item.temp.max,
                                    temperature: item.temp.day,
                                    condition: item.weather[0]?.main,
                                    datetime: new Date(item.dt),
                                };
                            }),
                        } as ForecastWeatherModel),
                ),
            );
    }
}
