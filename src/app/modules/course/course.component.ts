import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TabViewService } from '../../shared/component/layout/tabview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  constructor(
    private router: Router,
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

  onSelectedCourse(courseId: number) {
    this.router.navigate(['/course', courseId]);
  }
}
