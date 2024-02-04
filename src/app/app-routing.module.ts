import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './components/customer/customer.component';
import { DeviceComponent } from './components/device/device.component';
import { StandardComponent } from './components/standard/standard.component';
import { InstrumentComponent } from './components/instrument/instrument.component';
import { CalibrationProgramComponent } from './components/calibration-program/calibration-program.component';
import { CalibrationControlComponent } from './components/calibration-control/calibration-control.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'devices',
    component: DeviceComponent
  },
  {
    path: 'standards',
    component: StandardComponent
  },
  {
    path: 'instruments',
    component: InstrumentComponent
  },
  {
    path: 'calibration/calibration-program',
    component: CalibrationProgramComponent
  },
  {
    path: 'calibration/calibration-control',
    component: CalibrationControlComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
