import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { PrimeNGModule } from '../../shared/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseControlComponent } from './course-control/course-control.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseCreateComponent } from './course-create/course-create.component';


const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
  },
  {
    path: 'create',
    component: CourseCreateComponent,
  },
  {
    path: ':id',
    component: CourseDetailComponent,
  }
];


@NgModule({
  declarations: [
    CourseComponent,
    CourseCreateComponent,
    CourseControlComponent,
    CourseListComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PrimeNGModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class CourseModule { }
