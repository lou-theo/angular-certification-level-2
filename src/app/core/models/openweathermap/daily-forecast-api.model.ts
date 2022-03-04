import { WeatherApiModel } from './weather-api.model';

export interface DailyForecastApiModel {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    };
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    };
    pressure: number;
    humidity: number;
    weather: WeatherApiModel[];
    speed: number;
    deg: number;
    gust: number;
    clouds: number;
    pop: number;
}
