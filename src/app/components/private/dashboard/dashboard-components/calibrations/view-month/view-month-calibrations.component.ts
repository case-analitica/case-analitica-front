import { CalibrationDueService } from './../../../../../../service/calibration-due.service';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CalibrationsDue } from "src/model/calibration/calibration-due.model";
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-view-month-calibrations',
    templateUrl: './view-month-calibrations.component.html',
    styleUrls: ['./view-month-calibrations.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatTableModule, NgIf]
})
export class ViewMonthCalibrationsComponent implements OnInit {

  public displayedColumns = ['manufacturer', 'model', 'serialNumber', 'nextCalibration'];
  dataSource: MatTableDataSource<CalibrationsDue>;
  isEmptyData = false;

  constructor(private calibrationDueService: CalibrationDueService) { }

  ngOnInit() {
    this.calibrationDueService.getCalibrationDueInCurrentMonth().subscribe({

      next: (response: any) => {
        if(response.data){
          this.isEmptyData = true;
        }
        this.dataSource = response.data;
      },

      error: (e) => {
        console.error(e);
      },

    });
  }
}
