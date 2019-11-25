import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengService } from './service/primeng.service';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { LightboxModule } from 'primeng/lightbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    DropdownModule,
    LightboxModule,
    TabMenuModule,
    RatingModule,
    SliderModule,
    CarouselModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DataViewModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ToastModule,
    CalendarModule,
    FormsModule
  ],
  providers: [PrimengService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
