import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CitySelectionFormComponent } from '@app/shared/city-selection-form/city-selection-form.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [CitySelectionFormComponent],
    exports: [CitySelectionFormComponent],
})
export class SharedModule {}
