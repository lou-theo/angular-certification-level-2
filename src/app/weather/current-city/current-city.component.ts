import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityModel } from '../../core/models/weather/city.model';
import { WeatherModel } from '../../core/models/weather/weather.model';
import { WeatherConditionHelper } from "../../core/helpers/weather-condition.helper";

@Component({
    selector: 'app-current-city',
    templateUrl: './current-city.component.html',
    styleUrls: ['./current-city.component.css'],
})
export class CurrentCityComponent {
    @Input() public city: CityModel;
    @Input() public weather: WeatherModel;
    @Output() public closedCity: EventEmitter<CityModel> = new EventEmitter<CityModel>();

    get iconUrl(): string {
        return WeatherConditionHelper.getIconUrl(this.weather?.condition)
    }

    public close(): void {
        this.closedCity.emit(this.city);
    }
}
