import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCityListComponent } from './current-city-list.component';

describe('CurrentCityListComponent', () => {
    let component: CurrentCityListComponent;
    let fixture: ComponentFixture<CurrentCityListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CurrentCityListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrentCityListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
