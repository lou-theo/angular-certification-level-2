import { WeatherModel } from '@app/core/models/weather/weather.model';
import { CityModel } from '@app/core/models/weather/city.model';

export interface CurrentWeatherModel {
    city: CityModel;
    weather: WeatherModel;
    cachedDatetime: Date;
}
