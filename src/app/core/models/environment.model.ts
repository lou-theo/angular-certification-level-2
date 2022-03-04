export interface EnvironmentModel {
    production: boolean;
    openweathermapApi: {
        rootUrl: string;
        appId: string;
    };
    iconsRootUrl: string;
}
