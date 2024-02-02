import { CalibrationDueService } from '../../../../../service/calibration-due.service';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { CalibrationsDue } from "src/model/calibration/calibration-due.model";

@Component({
  selector: 'app-view-month-calibrations',
  templateUrl: './view-month-calibrations.component.html',
  styleUrls: ['./view-month-calibrations.component.scss']
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
