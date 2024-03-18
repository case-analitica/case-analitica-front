import { Component, OnInit } from '@angular/core';
import { ViewServiceOrdersComponent } from './dashboard-components/service-orders/view-service-orders.component';
import { ViewYearCalibrationsComponent } from './dashboard-components/calibrations/view-year/view-year-calibrations.component';
import { ViewMonthCalibrationsComponent } from './dashboard-components/calibrations/view-month/view-month-calibrations.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [ViewMonthCalibrationsComponent, ViewYearCalibrationsComponent, ViewServiceOrdersComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
