import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiAuthenticationInterceptor } from '@app/core/http-interceptors/api-authentication-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiAuthenticationInterceptor, multi: true },
];
