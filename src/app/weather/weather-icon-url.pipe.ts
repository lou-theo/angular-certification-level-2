import { Pipe, PipeTransform } from '@angular/core';
import { WeatherConditionEnum } from '@app/core/enums/weather-condition.enum';
import { environment } from '@environment/environment';

@Pipe({
    name: 'weatherIconUrl',
})
export class WeatherIconUrlPipe implements PipeTransform {
    transform(condition: WeatherConditionEnum): string {
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
