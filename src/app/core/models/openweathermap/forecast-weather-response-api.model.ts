import { DailyForecastApiModel } from './daily-forecast-api.model';

export interface ForecastWeatherResponseApiModel {
    city: {
        id: number;
        name: string;
        coord: {
            lon: number;
            lat: number;
        };
        country: string;
        population: number;
        timezone: number;
    };
    cod: string;
    message: number;
    cnt: number;
    list: DailyForecastApiModel[];
}
