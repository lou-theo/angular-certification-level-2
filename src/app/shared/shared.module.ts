import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySelectionFormComponent } from './city-selection-form/city-selection-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [CitySelectionFormComponent],
    exports: [CitySelectionFormComponent],
})
export class SharedModule {}
