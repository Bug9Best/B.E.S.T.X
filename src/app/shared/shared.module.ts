import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThaiCalendarDirective } from './directives/thai-calendar.directive';
import { ThaiDatePipe } from './pipe/thdate.pipe';
import { TabViewDirective } from './directives/tab-view.directive';

@NgModule({
  declarations: [
    ThaiDatePipe,
    ThaiCalendarDirective,
    TabViewDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ThaiDatePipe,
    ThaiCalendarDirective,
    TabViewDirective,
  ]
})
export class SharedModule { }
