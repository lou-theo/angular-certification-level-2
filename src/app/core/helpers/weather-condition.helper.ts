import { WeatherConditionEnum } from '../enums/weather-condition.enum';
import { environment } from "@environment/environment";

export class WeatherConditionHelper {
    public static getIconUrl(condition: WeatherConditionEnum): string {
        let url = environment.iconsRootUrl;
        switch (condition) {
            case WeatherConditionEnum.Clear:
                url += 'sun.png';
                break;
            case WeatherConditionEnum.Rain:
            case WeatherConditionEnum.Drizzle:
            case WeatherConditionEnum.Thunderstorm:
                url += 'rain.png';
                break;
            case WeatherConditionEnum.Snow:
                url += 'snow.png';
                break;
            default:
                url += 'clouds.png';
                break;
        }
        return url;
    }
}
