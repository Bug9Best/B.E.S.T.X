import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from '../../shared/primeng.module';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
];


@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    SharedModule,
    FullCalendarModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
