import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from '@environment/environment';

@Injectable()
export class ApiAuthenticationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const clonedRequest = req.clone({
            params: req.params.set('appid', environment.openweathermapApi.appId),
        });

        return next.handle(clonedRequest);
    }
}
