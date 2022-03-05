import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityModel } from '@app/core/models/weather/city.model';
import { WeatherModel } from '@app/core/models/weather/weather.model';

@Component({
    selector: 'app-current-city',
    templateUrl: './current-city.component.html',
    styleUrls: ['./current-city.component.css'],
})
export class CurrentCityComponent {
    @Input() public city: CityModel;
    @Input() public weather: WeatherModel;
    @Output() public closedCity: EventEmitter<CityModel> = new EventEmitter<CityModel>();

    public close(): void {
        this.closedCity.emit(this.city);
    }
}
