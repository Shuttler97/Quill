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
import { TooltipComponent } from './shared/tooltip/tooltip.component';
import { TooltipDirective } from './directive/tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
    CustomerReportComponent,
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    OverlayModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -4,
      "outerStrokeWidth": 4,
      "outerStrokeColor": "#12C39A",
      "innerStrokeColor": "#E6E6E8",
      "innerStrokeWidth": 4,
      "titleFontSize": "40",
      "showUnits": false,
      "clockwise": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
