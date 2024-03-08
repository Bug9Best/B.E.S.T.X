import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamingComponent } from './streaming.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from '../../shared/primeng.module';
import { StreamingListComponent } from './streaming-list/streaming-list.component';
import { StreamingContentComponent } from './streaming-content/streaming-content.component';
import { StreamingControlComponent } from './streaming-control/streaming-control.component';

const routes: Routes = [
  {
    path: '',
    component: StreamingComponent,
  },
];


@NgModule({
  declarations: [
    StreamingComponent,
    StreamingListComponent,
    StreamingContentComponent,
    StreamingControlComponent
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
    StreamingComponent
  ]
})
export class StreamingModule { }
