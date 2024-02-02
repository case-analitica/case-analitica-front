import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Device, Model } from 'src/model/device/device.model';
import { DeviceService } from 'src/app/service/device.service';
import { Manufacturer } from 'src/model/manufacturer/manufacturer.model';
import { NotificationComponent } from 'src/app/shared/notifications/notification.component';
import { Notification } from 'src/model/api-model/notification.model';
import { Group, Type } from 'src/model/commons/commons.model';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-device-detail',
    templateUrl: './device-detail.component.html',
    styleUrls: ['./device-detail.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf]
})
export class DeviceDetailComponent implements OnInit {

  deviceForm: FormGroup;
  noEdit = true;

  device: Device;
  title: string = "Detalhes do Equipamento"
  manufacturer: Manufacturer;
  model: Model;
  type: Type;
  group: Group;
  notification: Notification;

  messageOnClose: string = "Fechar";

  constructor(
    public dialogRef: MatDialogRef<DeviceDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Device,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
  ) {
    this.device = { ...data };

    this.deviceForm = this.formBuilder.group({
      id: [''],
      control: [''],
      model: [''],
      serialNumber: [''],
      tag: [''],
      customerId: [''],
      accessories: [''],
      type: [''],
      group: [''],
      manufacturer: [''],
      notes: [''],
    })
  }

  ngOnInit(): void {
    this.patchDevice(this.device);
  }

  onEditDevice() {
    this.noEdit = false;
  }

  onSubmit() {
    if (this.device.id == null) {
      this.deviceService.save(this.deviceForm.value).subscribe(
        (response: any) => {
          this.patchDevice(response.data);
        });
    } else if (!_.isEqual(this.data, this.deviceForm.value)) {
      this.deviceService.update(this.deviceForm.value).subscribe(
        (response: any) => {
          this.patchDevice(response.data);
        })
        this.noEdit = true;
    } else {
      this.onCancel();
    }
  }

  onCancel() {
    if (!this.noEdit == true && !_.isEqual(this.data, this.deviceForm.value)) {
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

  patchDevice(device: Device) {
    this.manufacturer = device.manufacturer;
    this.model = device.model;
    this.type = device.type;
    this.group = device.group;
    this.deviceForm.patchValue(device);
  }

}
