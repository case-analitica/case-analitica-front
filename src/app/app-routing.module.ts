import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './components/private/customer/customer.component';
import { DeviceComponent } from './components/private/device/device.component';
import { StandardComponent } from './components/private/standard/standard.component';
import { InstrumentComponent } from './components/private/instrument/instrument.component';
import { CalibrationProgramComponent } from './components/private/calibration-program/calibration-program.component';
import { CalibrationControlComponent } from './components/private/calibration-control/calibration-control.component';
import { LoginComponent } from './components/public/login/login.component';
import { authGuard } from './shared/auth/auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthenticatedComponent } from './layout/authenticated/component/authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customers', component: CustomerComponent },
      { path: 'devices', component: DeviceComponent },
      { path: 'standards', component: StandardComponent },
      { path: 'instruments', component: InstrumentComponent },
      { path: 'calibration/calibration-program', component: CalibrationProgramComponent },
      { path: 'calibration/calibration-control', component: CalibrationControlComponent },
    ],
    canActivate: [authGuard]
  },
  // {
  //   path: '',
  //   component: AuthenticationComponent,
  //   children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
  //   ],
  // },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
