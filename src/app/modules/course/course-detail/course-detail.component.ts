import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {

  public items: MenuItem[] = this.initMenu();

  private initMenu() {
    return [
      { label: 'หน้าแรก', routerLink: '/course' },
      { label: 'รายละเอียดรายวิชา' },
    ];
  }

  regisCourse() {
    
  }
}
