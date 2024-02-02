import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Instrument, InstrumentModel } from 'src/model/instrument/instrument.model';
import { InstrumentService } from 'src/app/service/instrument.service';
import { Manufacturer } from 'src/model/manufacturer/manufacturer.model';
import { NotificationComponent } from 'src/app/shared/notifications/notification.component';
import { Notification } from 'src/model/api-model/notification.model';
import { Group, ToolGroup, Type } from 'src/model/commons/commons.model';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
    selector: 'app-instrument-detail',
    templateUrl: './instrument-detail.component.html',
    styleUrls: ['./instrument-detail.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf]
})
export class InstrumentDetailComponent {

  instrumentForm: FormGroup;
  noEdit = true;

  instrument: Instrument;
  title: string = "Detalhes do Instrumento"
  manufacturer: Manufacturer;
  model: InstrumentModel;
  group: Group;
  toolGroup: ToolGroup;
  notification: Notification;

  messageOnClose: string = "Fechar";

  constructor(
    public dialogRef: MatDialogRef<InstrumentDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Instrument,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private instrumentService: InstrumentService,
  ) {
    this.instrument = { ...data };

    this.instrumentForm = this.formBuilder.group({
      id: [''],
      description: [''],
      toolGroup: [''],
      group: [''],
      manufacturer: [''],
      model: [''],
      serialNumber: [''],
      tag: [''],
    })
  }

  ngOnInit(): void {
    this.patchInstrument(this.instrument);
  }

  onEditInstrument() {
    this.noEdit = false;
  }

  onSubmit() {
    if (this.instrument.id == null) {
      this.instrumentService.save(this.instrumentForm.value).subscribe(
        (response: any) => {
          this.patchInstrument(response.data);
        });
    } else if (!_.isEqual(this.data, this.instrumentForm.value)) {
      this.instrumentService.update(this.instrumentForm.value).subscribe(
        (response: any) => {
          this.patchInstrument(response.data);
        })
      this.noEdit = true;
    } else {
      this.onCancel();
    }
  }

  onCancel() {
    if (!this.noEdit == true && !_.isEqual(this.data, this.instrumentForm.value)) {
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

  patchInstrument(instrument: Instrument) {
    this.manufacturer = instrument.manufacturer;
    this.model = instrument.model;
    this.toolGroup = instrument.toolGroup;
    this.group = instrument.group;
    this.instrumentForm.patchValue(instrument);
  }

}
