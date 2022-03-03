import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCityComponent } from './forecast-city.component';

describe('ForecastCityComponent', () => {
    let component: ForecastCityComponent;
    let fixture: ComponentFixture<ForecastCityComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ForecastCityComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastCityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});