import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ForumComponent } from './forum.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumControlComponent } from './forum-control/forum-control.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent,
  },
 
];

@NgModule({
  declarations: [
    ForumComponent,
    ForumListComponent,
    ForumControlComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumModule { }
