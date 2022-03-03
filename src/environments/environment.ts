import { Environment } from '../app/core/models/environment';

export const environment: Environment = {
    production: false,
    openweathermapApi: {
        appId: '5a4b2d457ecbef9eb2a71e480b947604',
        rootUrl: 'https://api.openweathermap.org/data/2.5/',
    },
};
