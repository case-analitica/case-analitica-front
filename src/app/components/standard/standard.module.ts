import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/app.material.module';
import { StandardComponent } from './standard.component';
import { StandardDetailComponent } from './standard-detail/standard-detail.component';



@NgModule({
  declarations: [
    StandardComponent,
    StandardDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class StandardModule { }
