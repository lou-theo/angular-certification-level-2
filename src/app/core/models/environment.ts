export interface Environment {
    production: boolean;
    openweathermapApi: {
        rootUrl: string;
        appId: string;
    };
}
