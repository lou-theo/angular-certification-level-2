import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-city-selection-form',
    templateUrl: './city-selection-form.component.html',
    styleUrls: ['./city-selection-form.component.css'],
})
export class CitySelectionFormComponent implements OnInit {
    @Output() public selectedZipCode: EventEmitter<string> = new EventEmitter<string>();

    public zipCode: FormControl;

    public ngOnInit(): void {
        this.zipCode = new FormControl('', { validators: [Validators.required, Validators.pattern(/^[0-9]{5}$/)] });
    }

    public addLocation(): void {
        if (this.zipCode.valid) {
            this.selectedZipCode.emit(this.zipCode.value);
            this.zipCode.reset('');
        }
    }
}
