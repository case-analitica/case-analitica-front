import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalibrationProgramComponent } from './calibration-program.component';
import { CalibrationProgramDetailComponent } from './calibration-program-detail/calibration-program-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/app.material.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CalibrationProgramComponent,
        CalibrationProgramDetailComponent,
    ]
})
export class CalibrationProgramModule { }
