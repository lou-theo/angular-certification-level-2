import { CityModel } from './city.model';
import { WeatherModel } from './weather.model';

export interface CurrentWeatherModel {
    city: CityModel;
    weather: WeatherModel;
}
