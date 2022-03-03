import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [BrowserModule, FormsModule, WeatherModule, SharedModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
