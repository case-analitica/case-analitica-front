import { CalibrationService } from '../../../../../service/calibration.service';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { CalibrationsDue } from "src/model/calibration/calibration.model";

@Component({
  selector: 'app-view-month-calibrations',
  templateUrl: './view-month-calibrations.component.html',
  styleUrls: ['./view-month-calibrations.component.scss']
})
export class ViewMonthCalibrationsComponent implements OnInit {

  public displayedColumns = ['manufacturer', 'model', 'serialNumber', 'nextCalibration'];
  dataSource: MatTableDataSource<CalibrationsDue>;
  isEmptyData = false;

  constructor(private calibrationService: CalibrationService) { }

  ngOnInit() {
    this.calibrationService.getCalibrationDueInCurrentMonth().subscribe({

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
