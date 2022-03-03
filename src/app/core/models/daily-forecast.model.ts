import { WeatherModel } from './weather.model';

export interface DailyForecastModel {
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
    weather: WeatherModel[];
    speed: number;
    deg: number;
    gust: number;
    clouds: number;
    pop: number;
}
