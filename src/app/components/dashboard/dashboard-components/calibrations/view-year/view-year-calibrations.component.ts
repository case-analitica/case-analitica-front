import { CalibrationService } from '../../../../../service/calibration.service';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { CalibrationsDue } from "src/model/calibration/calibration.model";

@Component({
  selector: 'app-view-year-calibrations',
  templateUrl: './view-year-calibrations.component.html',
  styleUrls: ['./view-year-calibrations.component.scss']
})
export class ViewYearCalibrationsComponent implements OnInit {

  public displayedColumns = ['manufacturer', 'model', 'serialNumber', 'nextCalibration'];
  dataSource: MatTableDataSource<CalibrationsDue>;

  constructor(private calibrationService: CalibrationService) { }

  ngOnInit() {
    this.calibrationService.getCalibrationDueInCurrentYear(5).subscribe({

      next: (response: any) => {
        this.dataSource = response.data;
      },

      error: (e) => {
        console.error(e);
      },

    });
  }
}
