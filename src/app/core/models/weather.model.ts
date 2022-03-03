import { WeatherConditionEnum } from '../enums/weather-condition.enum';

export interface WeatherModel {
    id: number;
    main: WeatherConditionEnum;
    description: string;
    icon: string;
}
