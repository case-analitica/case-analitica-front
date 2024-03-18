import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Address } from 'src/model/address/address.model';
import { Contact } from 'src/model/address/contact.model';
import { Customer } from 'src/model/customer/customer.model';
import { Notification } from 'src/model/api-model/notification.model';
import { CustomerAddressComponent } from '../customer-address-add/customer-address.component';
import { CustomerService } from 'src/app/service/customer.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, NgIf, MatCardModule, NgFor, MatDividerModule, MatButtonModule, MatIconModule]
})
export class CustomerDetailComponent implements OnInit {

  customerForm: FormGroup;

  customer: any;
  customerType: string = "PF";
  title: string = "Detalhes do Cliente"
  contacts: Contact[];
  address: Address;
  addresses: Address[];
  deliveryAddresses: Address[] = [];
  notification: Notification;

  messageOnClose: string = "Fechar";

  constructor(
    public dialogRef: MatDialogRef<CustomerDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Customer,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private customerService: CustomerService,
  ) {
    this.customer = { ...data };

    this.customerForm = this.formBuilder.group({
      id: [''],
      customerType: [''],
      name: [''],
      corporateName: [''],
      personType: [''],
      cnpj: [''],
      stateRegistration: [''],
      cityRegistration: [''],
      cpf: [''],
      rg: [''],
      birth: [''],
      phone: [''],
      mobile: [''],
      fax: [''],
      email: [''],
      active: [''],
      contacts: [['']],
      addresses: [['']],
      deliveryAddresses: [['']],
    })
  }

  ngOnInit(): void {
    this.patchCustomer(this.customer);
  }

  onNewAddress() {
    this.address = { customerId: this.customer.id }
    this.dialog.open(CustomerAddressComponent, {
      width: '50%',
      data: this.address
    }).afterClosed().subscribe((customer: Customer) => {
      if (customer != null) {
        this.patchCustomer(customer);
      }
    })
  }

  onUpdateAddress(address: any) {
    this.dialog.open(CustomerAddressComponent, {
      width: '50%',
      data: address,
    }).afterClosed().subscribe((customer: Customer) => {
      if (customer != null) {
        this.patchCustomer(customer);
      }
    })
  }

  onDeleteCustomerAddress(address: any) {
    this.customerService.delete(address.id).subscribe((response: any) => {
      let customer: Customer = response.data[0];
      this.patchCustomer(customer);
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  patchCustomer(customer: Customer) {
    console.log(customer)
    this.customerType = customer.customerType;
    this.contacts = customer.contacts;
    this.addresses = customer.addresses;
    this.deliveryAddresses = customer.deliveryAddresses;
    this.customerForm.patchValue(customer);
  }

}
