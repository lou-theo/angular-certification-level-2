import { DailyForecastModel } from './daily-forecast.model';

export interface ForecastWeatherResponseModel {
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
    list: DailyForecastModel[];
}
