
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BodyComponent } from './layout/body/body.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SublevelMenuComponent } from './layout/sidenav/sublevel-menu.component';
import { NotificationComponent } from './shared/notifications/notification.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';






@NgModule({
    declarations: [AppComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BodyComponent,
    NavbarComponent,
    SidenavComponent,
    SublevelMenuComponent,
    NotificationComponent,
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
