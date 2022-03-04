import { CityModel } from './city.model';
import { WeatherModel } from './weather.model';

export interface ForecastWeatherModel {
    city: CityModel;
    weathers: WeatherModel[];
}
