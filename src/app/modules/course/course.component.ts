import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TabView } from 'primeng/tabview';
import { TabViewService } from '../../shared/component/layout/tabview.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  @ViewChild(TabView) tabView?: TabView;

  constructor(
    private tabViewService: TabViewService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
    this.tabViewService.currentComponent.subscribe(component => {
      if (component == 'course') {
        this.load();
      }
    });
  }

  load() {
    console.log('load course component');
  }
}
