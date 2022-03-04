import { WeatherConditionEnum } from '../../enums/weather-condition.enum';

export interface WeatherApiModel {
    id: number;
    main: WeatherConditionEnum;
    description: string;
    icon: string;
}
