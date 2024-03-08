import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ForumComponent } from './forum.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent,
  },
];

@NgModule({
  declarations: [
    ForumComponent
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
    ForumComponent
  ]
})
export class ForumModule { }
