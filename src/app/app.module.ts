import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModule } from '@app/weather/weather.module';
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { httpInterceptorProviders } from '@app/core/http-interceptors';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, WeatherModule, SharedModule, AppRoutingModule],
    declarations: [AppComponent],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
