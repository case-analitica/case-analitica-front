import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceService } from 'src/app/service/device.service';
import { Device } from 'src/model/device/device.model';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { NotificationComponent } from 'src/app/shared/notifications/notification.component';
import { Notification } from 'src/model/api-model/notification.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  searchForm: FormGroup;
  notification: Notification;


  public displayedColumns = ['model', 'serialNumber', 'manufacturer', 'tag', 'type', 'group', 'details', 'delete'];
  dataSource: MatTableDataSource<Device>;
  devices: Device[];

  pageSize: number;
  length: number;
  pageIndex: number;

  filterName: string;
  filterValue: string

  sortValue = "model";
  sortDirection = "asc";


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private deviceService: DeviceService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {

    this.searchForm = this.formBuilder.group({
      filterName: [''],
      filterValue: ['']
    })

    this.filterName = "";
    this.filterValue = "";
    this.pageIndex = 0;
    this.pageSize = 10;
  }

  ngOnInit() {
    this.getAll(this.filterName, this.filterValue, this.pageIndex, 'model', 'asc', 10);
  }

  getAll(filterName: string, filterValue: string, pageIndex: number, sort: string, direction: string, pageSize: number) {
    this.deviceService.getAll(filterName, filterValue, pageIndex, sort, direction, pageSize).subscribe({

      next: (response: any) => {
        this.dataSource = response.data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.pageSize = response.meta.pageSize;
        this.length = response.meta.totalRecords;
        this.pageIndex = response.meta.pageIndex;
      },

      error: (e) => {
        console.error(e);
      },

    });
  }

  onSearch() {
    if (this.searchForm.valid) {
      this.filterName = this.searchForm.value.filterName;
      this.filterValue = this.searchForm.value.filterValue;
      this.getAll(this.filterName, this.filterValue, this.pageIndex, "model", this.sortDirection, this.pageSize);
    }
  }

  onSort = (event: any) => {
    this.sortValue = event.active;
    this.sortDirection = event.direction;
    this.getAll(this.filterName, this.filterValue, this.pageIndex, this.sortValue, this.sortDirection, this.pageSize);
  };

  onChangePage = (event: any) => {
    this.getAll(this.filterName, this.filterValue, event.pageIndex, this.sortValue, this.sortDirection, event.pageSize);
  };

  public customSort = (event: any) => {
    console.log(event);
  }

  public doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  onReset() {
    this.filterName = "";
    this.filterValue = "";
    this.searchForm.reset();
    this.pageIndex = 0;
    this.sortValue = "model";
    this.sortDirection = "asc";
    this.getAll(this.filterName, this.filterValue, this.pageIndex, this.sortValue, this.sortDirection, 10);
  }

  onDetails(element: any) {
    this.deviceService.getOne(element).subscribe({

      next: (response: any) => {
        this.dialog.open(DeviceDetailComponent, {
          width: '100%',
          data: response.data[0]
        })
      },

      error: (e) => {
        console.log(e);
      },

    });
  }

  onDeleteDevice(id: number) {
    this.notification = {
      title: "Apagar Registro",
      content: "Deseja realmente apagar o registro selecionado?",
      type: "warning"
    };
    this.dialog.open(NotificationComponent, {
      data: this.notification
    }).afterClosed().subscribe({

      next: (result) => {
        if (result) {
          this.deviceService.delete(id).subscribe({

            next: () => {
              this.notification = {
                title: "Registro Apagado",
                content: "O registro selecionado foi apagado com sucesso!",
                type: "info"
              };

              this.dialog.open(NotificationComponent, {
                data: this.notification
              })

              this.getAll(this.filterName, this.filterValue, this.pageIndex, this.sortValue, this.sortDirection, this.pageSize);
            },

            error: (e) => {
              console.log(e);
            },
          });
        }
      },

      error: (e) => {
        console.log(e);
      },
    })
  }

}

