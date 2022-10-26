import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import {MatIconModule} from '@angular/material/icon';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
    CustomerReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "backgroundPadding": 7,
      "radius": 60,
      "space": -4,
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#12C39A",
      "innerStrokeColor": "#E6E6E8",
      "innerStrokeWidth": 4,
      "titleFontSize": "40",
      "animateTitle": true,
      animation:true,
      "animationDuration": 1000,
      startFromZero:true,
      lazy:true,
      "showUnits": false,
      "clockwise": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
