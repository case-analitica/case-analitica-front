import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ViewMonthCalibrationsComponent } from './dashboard-components/calibrations/view-month/view-month-calibrations.component';
import { ViewServiceOrdersComponent } from './dashboard-components/service-orders/view-service-orders.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from 'src/app/shared/material/app.material.module';
import { ViewYearCalibrationsComponent } from './dashboard-components/calibrations/view-year/view-year-calibrations.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewMonthCalibrationsComponent,
    ViewYearCalibrationsComponent,
    ViewServiceOrdersComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
