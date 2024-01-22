import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument.component';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/app.material.module';



@NgModule({
  declarations: [
    InstrumentComponent,
    InstrumentDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class InstrumentModule { }
