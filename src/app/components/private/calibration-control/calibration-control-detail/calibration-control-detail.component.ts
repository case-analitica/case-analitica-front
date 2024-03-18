import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import * as _ from 'lodash';
import { NotificationComponent } from 'src/app/shared/notifications/notification.component';
import { Notification } from 'src/model/api-model/notification.model';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalibrationControl, DeviceModel } from 'src/model/calibration/calibration-control.model';
import { CalibrationControlService } from 'src/app/service/calibration-control.service';
import { CalibrationProgram } from 'src/model/calibration/calibration-program.model';

@Component({
  selector: 'app-calibration-control-detail',
  templateUrl: './calibration-control-detail.component.html',
  styleUrls: ['./calibration-control-detail.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
  ]
})
export class CalibrationControlDetailComponent {

  calibrationForm: FormGroup;
  noEdit = true;

  calibrationControl: CalibrationControl;
  title: string = "Detalhes do Controla de Calibração"
  serialNumber: string;
  tag: string;
  deviceModel: DeviceModel;
  calibrationProgram: CalibrationProgram
  calibrationDate: string;
  nextCalibration: string;
  certificateDocument: string
  calibrationStatus: string;
  notification: Notification;

  messageOnClose: string = "Fechar";

  constructor(
    public dialogRef: MatDialogRef<CalibrationControlDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CalibrationControl,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private calibrationControlService: CalibrationControlService,
  ) {
    this.calibrationControl = { ...data };

    this.calibrationForm = this.formBuilder.group({
      id: [''],
      serialNumber: [''],
      tag: [''],
      deviceModel: [''],
      calibrationProgram: [''],
      calibrationDate: [''],
      nextCalibration: [''],
      certificateDocument: [''],
      calibrationStatus: [''],
    })
  }

  ngOnInit(): void {
    if (this.calibrationControl.id != null) {
      this.patchCalibrationControl(this.calibrationControl);
    } else {
      this.noEdit = false;
    }
  }

  onEditCalibrationControl() {
    this.noEdit = false;
  }

  onSubmit() {
    if (this.calibrationControl.id == null) {
      this.calibrationControlService.save(this.createCalibrationControl(this.calibrationForm.value)).subscribe(
        (response: any) => {
          this.patchCalibrationControl(response.data);
        });
    } else if (!_.isEqual(this.data, this.calibrationForm.value)) {
      this.calibrationControlService.update(this.calibrationForm.value).subscribe(
        (response: any) => {
          this.patchCalibrationControl(response.data);
        })
      this.noEdit = true;
    } else {
      this.onCancel();
    }
  }

  onCancel() {
    if (!this.noEdit == true && !_.isEqual(this.data, this.calibrationForm.value)) {
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

  patchCalibrationControl(calibrationControl: CalibrationControl) {
    this.serialNumber = calibrationControl.serialNumber;
    this.tag = calibrationControl.tag;
    this.deviceModel = calibrationControl.deviceModel;
    this.calibrationProgram = calibrationControl.calibrationProgram;
    this.calibrationDate = calibrationControl.calibrationDate;
    this.nextCalibration = calibrationControl.nextCalibration;
    this.certificateDocument = calibrationControl.certificateDocument
    this.calibrationStatus = calibrationControl.calibrationStatus;
    this.calibrationForm.patchValue(calibrationControl);
  }

  createCalibrationControl(calibrationForm: FormGroup) {
    // this.calibrationControl.deviceModel.manufacturer = this.calibrationForm.value.manufacturer;

    return this.calibrationControl;
  }

}

