import { CalibrationDueService } from './../../../../../../service/calibration-due.service';

import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CalibrationsDue } from "src/model/calibration/calibration-due.model";
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-view-year-calibrations',
    templateUrl: './view-year-calibrations.component.html',
    styleUrls: ['./view-year-calibrations.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatTableModule]
})
export class ViewYearCalibrationsComponent implements OnInit {

  public displayedColumns = ['manufacturer', 'model', 'serialNumber', 'nextCalibration'];
  dataSource: MatTableDataSource<CalibrationsDue>;

  constructor(private calibrationDueService: CalibrationDueService) { }

  ngOnInit() {
    this.calibrationDueService.getCalibrationDueInCurrentYear(5).subscribe({

      next: (response: any) => {
        this.dataSource = response.data;
      },

      error: (e) => {
        console.error(e);
      },

    });
  }
}
