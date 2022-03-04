import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiAuthenticationInterceptor } from './api-authentication-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiAuthenticationInterceptor, multi: true },
];
