import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, signal } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import { INITIAL_EVENTS, createEventId } from '../../shared/event-utils';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { TabViewService } from '../../shared/component/layout/tabview.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  isRender: boolean = true;

  public calendarOptions: CalendarOptions = this.initCalendar();

  constructor(
    private tabViewService: TabViewService
  ) {
    this.tabViewService.currentComponent.subscribe(component => {
      (component == 'calendar') ? this.load() : null;
    });
  }

  @ViewChild(FullCalendarComponent) calendar: FullCalendarComponent;
  load() {
    if (this.isRender) {
      this.isRender = false;
      this.calendar.getApi().render();
    }
  }

  private initCalendar(): CalendarOptions {
    return {
      plugins: [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
      ],
      initialView: 'dayGridMonth',
      initialEvents: INITIAL_EVENTS,
      weekends: true,
      editable: false,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents,
      themeSystem: 'bootstrap',
      headerToolbar: {
        left: 'prevYear,prev,next,nextYear',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      buttonText: {
        prev: 'ก่อนหน้า',
        next: 'ถัดไป',
      },
      locales: [
        {
          code: 'th',
          buttonText: {
            month: 'เดือน',
            week: 'สัปดาห์',
            day: 'วัน',
            list: 'แผนงาน',
          },
          weekText: 'สัปดาห์',
          allDayText: 'ตลอดวัน',
          moreLinkText: 'เพิ่มเติม',
          noEventsText: 'ไม่มีกิจกรรม',
        },
      ],
    };
  }

  currentEvents: [] = [];
  @Input() title: string;
  @Input() displayDetail: boolean;
  @Input() description: string;
  @Input() startDate: string;
  @Input() dueDate: string;

  handleEventClick(clickInfo: any) {
    let start = clickInfo.event.startStr
    let end = clickInfo.event.endStr
    this.displayDetail = true;
    this.title = clickInfo.event.title;
    this.description = clickInfo.event.extendedProps["description"];
    this.startDate = start.slice(8, 10) + '-' + start.slice(5, 7) + '-' + start.slice(0, 4);
    this.dueDate = end.slice(8, 10) + '-' + end.slice(5, 7) + '-' + end.slice(0, 4);
    console.log(clickInfo.event)
  }

  handleEvents(events: any) {
    this.currentEvents = events
  }

  closeDialog() {
    this.displayDetail = false;
  }
}