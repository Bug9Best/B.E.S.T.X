import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TabViewService } from '../../shared/component/layout/tabview.service';
import { CourseControlComponent } from './course-control/course-control.component';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  isDetail: boolean = false;

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

  @ViewChild(CourseControlComponent) controlComponent: CourseControlComponent;
  onSelectedCourse(courseId: number) {
    this.isDetail = true;
    this.controlComponent?.setMenu([
      {
        label: 'หน้าแรก',
        command: () => this.setDefaultState()
      },
      { label: 'รายละเอียด' },
    ]);
  }
  setDefaultState() {
    this.isDetail = false;
    this.controlComponent?.setMenu([{ label: 'หน้าแรก' }]);
  }
}
