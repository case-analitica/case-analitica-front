import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import * as _ from 'lodash';
import { CalibrationProgramService } from 'src/app/service/calibration-program.service';
import { NotificationComponent } from 'src/app/shared/notifications/notification.component';
import { Notification } from 'src/model/api-model/notification.model';
import { CalibrationProgram, DeviceModel } from 'src/model/calibration/calibration-program.model';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
    selector: 'app-calibration-program-detail',
    templateUrl: './calibration-program-detail.component.html',
    styleUrls: ['./calibration-program-detail.component.scss'],
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
export class CalibrationProgramDetailComponent {

  calibrationForm: FormGroup;
  noEdit = true;

  calibrationProgram: CalibrationProgram;
  title: string = "Detalhes do Programa de Calibração"
  deviceModel: DeviceModel;
  manufacturer: string;
  model: string;
  calibrationPoints: string;
  acceptanceCriteria: string;
  notification: Notification;

  messageOnClose: string = "Fechar";

  constructor(
    public dialogRef: MatDialogRef<CalibrationProgramDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CalibrationProgram,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private calibrationProgramService: CalibrationProgramService,
  ) {
    this.calibrationProgram = { ...data };

    this.calibrationForm = this.formBuilder.group({
      id: [''],
      manufacturer: [''],
      model: [''],
      calibrationPoints: [''],
      acceptanceCriteria: [''],
    })
  }

  ngOnInit(): void {
    if (this.calibrationProgram.id != null) {
      this.patchCalibrationProgram(this.calibrationProgram);
    } else {
      this.noEdit = false;
    }
  }

  onEditCalibrationProgram() {
    this.noEdit = false;
  }

  onSubmit() {
    if (this.calibrationProgram.id == null) {
      this.calibrationProgramService.save(this.createCalibrationProgram(this.calibrationForm.value)).subscribe(
        (response: any) => {
          this.patchCalibrationProgram(response.data);
        });
    } else if (!_.isEqual(this.data, this.calibrationForm.value)) {
      this.calibrationProgramService.update(this.calibrationForm.value).subscribe(
        (response: any) => {
          this.patchCalibrationProgram(response.data);
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

  patchCalibrationProgram(calibrationProgram: CalibrationProgram) {
    this.manufacturer = calibrationProgram.deviceModel.manufacturer;
    this.model = calibrationProgram.deviceModel.model;
    this.calibrationPoints = calibrationProgram.calibrationPoints;
    this.acceptanceCriteria = calibrationProgram.acceptanceCriteria;
    this.calibrationForm.patchValue(calibrationProgram);
  }

  createCalibrationProgram(calibrationForm: FormGroup){
    this.calibrationProgram.deviceModel.manufacturer = this.calibrationForm.value.manufacturer;
    this.calibrationProgram.deviceModel.model = this.calibrationForm.value.model;
    this.calibrationProgram.calibrationPoints = this.calibrationForm.value.calibrationPoints;
    this.calibrationProgram.acceptanceCriteria = this.calibrationForm.value.acceptanceCriteria;

    return this.calibrationProgram;
  }

}

