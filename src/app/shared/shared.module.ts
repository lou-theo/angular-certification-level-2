import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySelectionFormComponent } from './city-selection-form/city-selection-form.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CitySelectionFormComponent],
    exports: [CitySelectionFormComponent],
})
export class SharedModule {}
