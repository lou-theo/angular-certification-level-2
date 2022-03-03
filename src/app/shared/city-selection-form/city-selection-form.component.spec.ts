import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySelectionFormComponent } from './city-selection-form.component';

describe('CitySelectionFormComponent', () => {
    let component: CitySelectionFormComponent;
    let fixture: ComponentFixture<CitySelectionFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CitySelectionFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CitySelectionFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
