import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { PrimeNGModule } from '../../shared/primeng.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
  },
];


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
