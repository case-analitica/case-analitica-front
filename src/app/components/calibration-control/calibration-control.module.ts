import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalibrationControlComponent } from './calibration-control.component';
import { CalibrationControlDetailComponent } from './calibration-control-detail/calibration-control-detail.component';



@NgModule({
    imports: [
        CommonModule,
        CalibrationControlComponent,
        CalibrationControlDetailComponent
    ]
})
export class CalibrationControlModule { }
