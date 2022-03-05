import { EnvironmentModel } from '@app/core/models/environment.model';

export const environment: EnvironmentModel = {
    production: false,
    openweathermapApi: {
        appId: '5a4b2d457ecbef9eb2a71e480b947604',
        rootUrl: 'https://api.openweathermap.org/data/2.5/',
    },
    iconsRootUrl: 'https://www.angulartraining.com/images/weather/',
    numberOfForecastedDays: 5,
    currentWeatherCacheInMinutes: 5,
};
