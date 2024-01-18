import { CustomerComponent } from './components/customer/customer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/app.material.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { BodyComponent } from './layout/body/body.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SublevelMenuComponent } from './layout/sidenav/sublevel-menu.component';
import { NotificationComponent } from './shared/notifications/notification.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerModule } from './components/customer/customer.module';
import { DeviceModule } from './components/device/device.module';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    SidenavComponent,
    SublevelMenuComponent,
    NotificationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DashboardModule,
    CustomerModule,
    DeviceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
