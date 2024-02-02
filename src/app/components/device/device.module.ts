import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/app.material.module';
import { DeviceComponent } from './device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        DeviceComponent,
        DeviceDetailComponent,
    ]
})
export class DeviceModule { }
