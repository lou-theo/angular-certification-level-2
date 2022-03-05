import { CityModel } from '@app/core/models/weather/city.model';
import { WeatherModel } from '@app/core/models/weather/weather.model';

export interface ForecastWeatherModel {
    city: CityModel;
    weathers: WeatherModel[];
}
