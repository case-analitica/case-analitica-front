import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceService } from 'src/app/service/device.service';
import { CustomerDevice } from 'src/model/customer-device/customer-device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  searchForm: FormGroup;


  public displayedColumns = ['model', 'serialNumber', 'manufacturer', 'tag', 'type', 'group', 'details', 'delete'];
  dataSource: MatTableDataSource<CustomerDevice>;
  devices: CustomerDevice[];

  pageSize: number;
  length: number;
  pageIndex: number;

  filterName: string;
  filterValue: string

  sortValue = "description";
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
    this.deviceService.getOne(element).subscribe((response: any) => {
      this.dialog.open(DeviceComponent, {
        width: '100%',
        data: response.data[0]
      })
    },
      (error) => {
        console.log(error);
      }
    )
  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }

}
