import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  listCourse: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  @Output() onSelectedCourse = new EventEmitter<number>();
  onDetail(courseId: number) {
    this.onSelectedCourse.emit(courseId);
  }
}
