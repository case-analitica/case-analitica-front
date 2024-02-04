import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Manufacturer } from 'src/model/manufacturer/manufacturer.model';
import { NotificationComponent } from 'src/app/shared/notifications/notification.component';
import { Notification } from 'src/model/api-model/notification.model';
import { Group, ToolGroup, Type } from 'src/model/commons/commons.model';
import { StandardService } from 'src/app/service/standard.service';
import { Standard, StandardName } from 'src/model/standard/standard.model';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-standard-detail',
    templateUrl: './standard-detail.component.html',
    styleUrls: ['./standard-detail.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgIf]
})
export class StandardDetailComponent {

  standardForm: FormGroup;
  noEdit = true;

  standard: Standard;
  title: string = "Detalhes do Padrão"
  manufacturer: Manufacturer;
  standardName: StandardName;
  group: Group;
  toolGroup: ToolGroup;
  notification: Notification;

  messageOnClose: string = "Fechar";

  constructor(
    public dialogRef: MatDialogRef<StandardDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Standard,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private standardService: StandardService,
  ) {
    this.standard = { ...data };

    this.standardForm = this.formBuilder.group({
      id: [''],
      description: [''],
      toolGroup: [''],
      group: [''],
      manufacturer: [''],
      standardName: [''],
      serialNumber: [''],
      tag: [''],
    })
  }

  ngOnInit(): void {
    this.patchStandard(this.standard);
  }

  onEditStandard() {
    this.noEdit = false;
  }

  onSubmit() {
    if (this.standard.id == null) {
      this.standardService.save(this.standardForm.value).subscribe(
        (response: any) => {
          this.patchStandard(response.data);
        });
    } else if (!_.isEqual(this.data, this.standardForm.value)) {
      this.standardService.update(this.standardForm.value).subscribe(
        (response: any) => {
          this.patchStandard(response.data);
        })
      this.noEdit = true;
    } else {
      this.onCancel();
    }
  }

  onCancel() {
    if (!this.noEdit == true && !_.isEqual(this.data, this.standardForm.value)) {
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

  patchStandard(standard: Standard) {
    this.manufacturer = standard.manufacturer;
    this.standardName = standard.standardName;
    this.toolGroup = standard.toolGroup;
    this.group = standard.group;
    this.standardForm.patchValue(standard);
  }

}
