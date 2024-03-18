import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Address } from 'src/model/address/address.model';
import * as _ from 'lodash';
import { CustomerService } from 'src/app/service/customer.service';
import { Notification } from 'src/model/api-model/notification.model';
import { NotificationComponent } from 'src/app/shared/notifications/notification.component';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-customer-address',
    templateUrl: './customer-address.component.html',
    styleUrls: ['./customer-address.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatDialogModule, MatButtonModule]
})
export class CustomerAddressComponent implements OnInit {

  addressForm: FormGroup;
  address: Address;
  title: string = "Novo Endereço";
  notification: Notification;

  constructor(
    public dialogRef: MatDialogRef<CustomerAddressComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Address,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
  ) {
    this.address = { ...data };

    this.addressForm = this.formBuilder.group({
      id: [''],
      customerId: [''],
      cep: [''],
      street: [''],
      number: [''],
      complement: [''],
      neighborhood: [''],
      country: [''],
      cityId: [''],
      city: [''],
      state: [''],
      status: ['']
    })
  }

  ngOnInit(): void {
    if (this.address.id != null) {
      this.title = "Editar Endereço"
    }
    this.addressForm.patchValue(this.address);
  }

  onSubmit() {
    if (this.address.id == null) {
      this.customerService.save(this.addressForm.value).subscribe((response: any) => {
        this.dialogRef.close(response.data[0]);
      });
    } else if (!_.isEqual(this.data, this.addressForm.value)) {
      this.customerService.update(this.addressForm.value).subscribe((response: any) => {
        this.dialogRef.close(response.data[0]);
      })
    } else {
      this.onCancel();
    }
  }

  onCancel() {
    if (!_.isEqual(this.data, this.addressForm.value)) {
      this.notification = {
        title: "Cancelar",
        content: "Deseja realmente descartar as alterações realizadas?",
        type: "warning"
      };
      this.dialog.open(NotificationComponent, {
        data: this.notification
      }).afterClosed().subscribe(result => {
        if (result) {
          this.dialogRef.close();
        }
      })
    } else {
      this.dialogRef.close();
    }

  }

}
