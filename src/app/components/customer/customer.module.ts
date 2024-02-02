import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerAddressComponent } from './customer-address-add/customer-address.component';
import { MaterialModule } from 'src/app/shared/material/app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CustomerComponent,
        CustomerDetailComponent,
        CustomerAddressComponent,
    ]
})
export class CustomerModule { }
